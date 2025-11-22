import csv

# Obrim el CSV
with open("DADES.csv", newline='', encoding="utf-8") as f:
    reader = csv.reader(f)
    files = list(reader)

# Noms de les columnes
header = files[0]
requisits = header[1:9]   # EXACTAMENT 8 requisits

# Dades dels barris
barris = []
valors = []

for fila in files[1:]:
    if not fila[0].strip():
        continue

    barris.append(fila[0])

    fila_valors = []
    for x in fila[1:9]:    # NOMÉS agafem les 8 columnes bones
        try:
            fila_valors.append(int(x))
        except:
            fila_valors.append(0)   # Si hi ha "ç" o buit → 0 automàtic
    valors.append(fila_valors)

print("\nRESPON AMB: 1 = Sí   |   -1 = No   |   0 = M'és igual\n")

# Preguntes automàtiques
respostes = []
for req in requisits:
    r = int(input(f"{req}? (1/-1/0): "))
    respostes.append(r)
    

# Comparació
punts = []
respostes_no_zero = sum(1 for r in respostes if r != 0)  # Total de requisits que l'usuari ha contestat

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

    punts.append(count)

# Trobar el guanyador
max_index = punts.index(max(punts))
millor_barri = barris[max_index]

# Percentatge
if respostes_no_zero > 0:
    percentatge = (punts[max_index] / respostes_no_zero) * 100
else:
    percentatge = 0

print("\n🏆  BARRI RECOMANAT:")
print(millor_barri)
print(f"Coincidències: {punts[max_index]} de {respostes_no_zero} ({percentatge:.1f}%)")
