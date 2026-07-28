from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# Email integration (Emergent managed Resend)
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
LEAD_NOTIFICATION_EMAIL = os.environ["LEAD_NOTIFICATION_EMAIL"]

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class LeadCreate(BaseModel):
    nombre: str
    telefono: str
    ciudad: str
    recibo: str
    email: Optional[str] = None
    mensaje: Optional[str] = None
    origen: Optional[str] = "Formulario web"


class Lead(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nombre: str
    telefono: str
    ciudad: str
    recibo: str
    email: Optional[str] = None
    mensaje: Optional[str] = None
    origen: Optional[str] = "Formulario web"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


def build_lead_email(lead: Lead) -> str:
    return f"""
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#0047FF;padding:24px;border-radius:12px 12px 0 0;">
        <tr><td style="color:#fff;font-size:22px;font-weight:bold;">☀️ Nuevo lead — Power Stein Sonora</td></tr>
      </table>
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-top:none;">
        <tr><td style="padding:8px 0;color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Nombre</td></tr>
        <tr><td style="padding:0 0 12px;color:#0f172a;font-size:18px;font-weight:bold;">{lead.nombre}</td></tr>
        <tr><td style="padding:8px 0;color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Teléfono</td></tr>
        <tr><td style="padding:0 0 12px;color:#0f172a;font-size:18px;font-weight:bold;">{lead.telefono}</td></tr>
        <tr><td style="padding:8px 0;color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Ciudad</td></tr>
        <tr><td style="padding:0 0 12px;color:#0f172a;font-size:18px;">{lead.ciudad}</td></tr>
        <tr><td style="padding:8px 0;color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Pago mensual de luz (CFE)</td></tr>
        <tr><td style="padding:0 0 12px;color:#FF7A00;font-size:20px;font-weight:bold;">${lead.recibo}</td></tr>
        <tr><td style="padding:8px 0;color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Correo</td></tr>
        <tr><td style="padding:0 0 12px;color:#0f172a;font-size:16px;">{lead.email or '—'}</td></tr>
        <tr><td style="padding:8px 0;color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Mensaje</td></tr>
        <tr><td style="padding:0 0 12px;color:#0f172a;font-size:16px;">{lead.mensaje or '—'}</td></tr>
        <tr><td style="padding:16px 0 0;color:#94a3b8;font-size:12px;">Origen: {lead.origen} · {lead.created_at}</td></tr>
      </table>
    </div>
    """


async def send_lead_email(lead: Lead):
    payload = {
        "to": [LEAD_NOTIFICATION_EMAIL],
        "subject": f"🔆 Nueva cotización: {lead.nombre} ({lead.ciudad}) — paga ${lead.recibo}/mes",
        "html": build_lead_email(lead),
        "from_name": EMAIL_FROM_NAME,
    }
    if lead.email:
        payload["contact_email"] = lead.email
    async with httpx.AsyncClient(timeout=30) as http_client:
        resp = await http_client.post(
            f"{EMAIL_BASE_URL}/api/v1/email/send",
            headers={"X-Email-Key": EMAIL_KEY},
            json=payload,
        )
    resp.raise_for_status()
    return resp.json().get("id")


@api_router.get("/")
async def root():
    return {"message": "Power Stein Sonora API"}


@api_router.post("/leads")
async def create_lead(payload: LeadCreate):
    lead = Lead(**payload.model_dump())
    await db.leads.insert_one(lead.model_dump())
    email_ok = True
    try:
        await send_lead_email(lead)
    except Exception as e:
        email_ok = False
        logger.error(f"Lead email failed: {e}")
    return {"status": "success", "id": lead.id, "email_sent": email_ok}


@api_router.get("/leads", response_model=List[Lead])
async def list_leads():
    leads = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return leads


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
