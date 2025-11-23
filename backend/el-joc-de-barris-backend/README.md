# El Joc de Barris Backend

## Setup Instructions

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
   pip install -r requirements.txt
4. Run the FastAPI application:
   uvicorn src.main:app --reload

## Frontend Connection

The frontend should make GET requests to the endpoint:
GET /recommend?client={client_name}&lat={latitude}&lon={longitude}

Replace `{client_name}`, `{latitude}`, and `{longitude}` with the appropriate values.

The response will be a JSON object containing the metrics, score, and justification.

### Execution Commands
- Install dependencies: pip install -r requirements.txt
- Run the server: uvicorn src.main:app --reload

This backend is optimized for a hackathon, focusing on simplicity and clarity while providing impressive functionality for the jury.