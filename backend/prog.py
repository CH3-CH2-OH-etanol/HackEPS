import csv


with open("DADES.csv", newline='', encoding="utf-8") as f:
    reader = csv.reader(f)
    files = list(reader)


header = files[0]
requisits = header[1:9]   


barris = []
valors = []

for fila in files[1:]:
    if not fila[0].strip():
        continue

    barris.append(fila[0])

    fila_valors = []
    for x in fila[1:9]:    
        try:
            fila_valors.append(int(x))
        except:
            fila_valors.append(0)   
    valors.append(fila_valors)

print("\nRESPON AMB: 1 = Sí   |   -1 = No   |   0 = M'és igual\n")


respostes = []
for req in requisits:
    r = int(input(f"{req}? (1/-1/0): "))
    respostes.append(r)
    


punts = []
respostes_no_zero = sum(1 for r in respostes if r != 0) 

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


max_index = punts.index(max(punts))
millor_barri = barris[max_index]


if respostes_no_zero > 0:
    percentatge = (punts[max_index] / respostes_no_zero) * 100
else:
    percentatge = 0

print("\n🏆  BARRI RECOMANAT:")
print(millor_barri)
print(f"Coincidències: {punts[max_index]} de {respostes_no_zero} ({percentatge:.1f}%)")
