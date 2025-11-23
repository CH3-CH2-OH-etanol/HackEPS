from fastapi import APIRouter, HTTPException
import csv

router = APIRouter(prefix="/barris", tags=["barris"])

# --- CARREGAR DADES NOMÉS UNA VEGADA ---
with open("DADES.csv", newline='', encoding="utf-8") as f:
    reader = csv.reader(f)
    files = list(reader)

header = files[0]
requisits = header[1:9]
barris = []
valors = []

for fila in files[1:]:
    barris.append(fila[0])
    fila_valors = []
    for x in fila[1:9]:
        try:
            numero = int(x)
        except:
            numero = 0
        fila_valors.append(numero)
    valors.append(fila_valors)


# --- ENDPOINT PRINCIPAL ---
@router.post("/recomanar")
def recomanar(respostes: list[int]):

    if len(respostes) != len(requisits):
        raise HTTPException(status_code=400, detail="Número de respostes incorrecte")

    coincidencia = []
    respostes_valides = sum(1 for r in respostes if r != 0)

    for i in range(len(barris)):
        count = 0
        fila_barri = valors[i]

        for j in range(len(requisits)):
            valor_usuari = respostes[j]
            valor_barri = fila_barri[j]

            if valor_usuari == 0:
                continue
            if valor_usuari == valor_barri:
                count += 1

        coincidencia.append(count)

    max_index = coincidencia.index(max(coincidencia))
    millor_barri = barris[max_index]

    if respostes_valides > 0:
        percentatge = (coincidencia[max_index] / respostes_valides) * 100
    else:
        percentatge = 0

    return {
        "barri_recomanat": millor_barri,
        "percentatge": percentatge,
        "coincidencies": coincidencia[max_index],
    }
