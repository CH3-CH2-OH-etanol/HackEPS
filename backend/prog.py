import csv

with open("DADES.csv", newline='', encoding="utf-8") as f:
    reader = csv.reader(f)
    files = list(reader)


header= files[0]
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


print("\nRESPON AMB: 1 = Sí   |   -1 = No   |   0 = M'és igual\n")


respostes = []
for req in requisits:
    pregunta = req + "? (1/-1/0): "  
    r = int(input(pregunta))          
    respostes.append(r)    
    


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

print("\n BARRI RECOMANAT:")
print(millor_barri)
print(f"Coincidències: {coincidencia[max_index]} de {respostes_valides} ({percentatge:.1f}%)")


print("\nREVISIÓ DE REQUISITS:")

for j in range(len(requisits)):
    valor_usuari = respostes[j]
    valor_barri = valors[max_index][j]

    if valor_usuari == 0:
        print("- " + requisits[j] + ": no valorat (0)")
    elif valor_usuari == valor_barri:
        print("- " + requisits[j] + ": COMPLEIX ")
    else:
        print("- " + requisits[j] + ": NO compleix ")

print("jUSTIFICACIÓ")

print("El barri", millor_barri, "s'ha triat perquè és el que presenta un nombre més alt de coincidències")
print("amb les teves preferències. Compleix", coincidencia[max_index], "dels", respostes_valides, "requisits que has indicat.")
print("A dalt pots veure detalladament quins requisits coincideixen i quins no.")