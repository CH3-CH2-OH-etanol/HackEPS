from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from routes import users, barris

app = FastAPI()

# Configuración de CORS
origins = [
    "http://localhost:3000",  # tu frontend Next.js
    "http://127.0.0.1:3000",  # por si lo accedes desde localhost
    # agrega más dominios si tu frontend se despliega en producción
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # Permite solicitudes desde estos dominios
    allow_credentials=True,
    allow_methods=["*"],        # Permite todos los métodos HTTP (GET, POST, etc.)
    allow_headers=["*"],        # Permite todos los headers
)

# Routers
app.include_router(users.router)
app.include_router(barris.router)

# Root
@app.get("/")
def root():
    return RedirectResponse(url="/docs")
