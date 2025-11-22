from fastapi import FastAPI, HTTPException
from src.clients import CLIENTS
from src.metrics import get_metrics
from src.recommender import recommend_neighborhood

app = FastAPI()

@app.get("/recommend")
async def recommend(client: str, lat: float, lon: float):
    if client not in CLIENTS:
        raise HTTPException(status_code=404, detail="Client not found")
    
    metrics = await get_metrics(lat, lon)
    score, justification = recommend_neighborhood(metrics, CLIENTS[client])
    
    return {
        "metrics": metrics,
        "score": score,
        "justification": justification
    }