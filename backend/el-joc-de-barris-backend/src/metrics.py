import requests

OVERPASS_URL = "http://overpass-api.de/api/interpreter"

async def get_metrics(lat: float, lon: float):
    query = f"""
    [out:json];
    (
      node["leisure"="park"](around:1000,{lat},{lon});
      node["shop"](around:1000,{lat},{lon});
      node["amenity"="bus_station"](around:1000,{lat},{lon});
    );
    out body;
    """
    response = requests.get(OVERPASS_URL, params={'data': query})
    data = response.json()
    
    parks = len([element for element in data['elements'] if element['tags'].get('leisure') == 'park'])
    local_businesses = len([element for element in data['elements'] if 'shop' in element['tags']])
    public_transport = len([element for element in data['elements'] if 'amenity' in element['tags'] and element['tags']['amenity'] == 'bus_station'])
    
    return {
        "parks": parks,
        "local_businesses": local_businesses,
        "public_transport": public_transport,
    }