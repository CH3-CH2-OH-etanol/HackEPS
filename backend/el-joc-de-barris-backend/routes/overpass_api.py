import overpy

def make_matrix(barrio):
    api = overpy.Overpass()
    
    query = f"""
    (
      area["name"="{barrio}"]["place"="neighbourhood"];
      area["name"="{barrio}"]["place"="suburb"];
      area["name"="{barrio}"]["boundary"="administrative"];
    );
    node["amenity"="restaurant"](area);
    out;
    """
    
    try:
        result = api.query(query)
    except Exception as e:
        print(f"Error al consultar {barrio}: {e}")
        return

    if not result.nodes:  
        return
    
    return len(result.nodes)

# Ejemplo de uso

neighborhood = ["Westlake", "Capitol Hill", "Ballard", "Fremont", "Queen Anne"]

for n in neighborhood:
    print("Restaurantes en: "+n+" = "+str(make_matrix(n)))