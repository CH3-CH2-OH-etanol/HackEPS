def recommend_neighborhood(metrics, weights):
    score = (
        metrics["parks"] * weights["parks"] +
        metrics["local_businesses"] * weights["local_businesses"] +
        metrics["public_transport"] * weights["public_transport"]
    )
    
    justification = f"This neighborhood has {metrics['parks']} parks, {metrics['local_businesses']} local businesses, and {metrics['public_transport']} public transport options."
    
    return score, justification