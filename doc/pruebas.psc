Algoritmo sistemaveterinario
	definir nombre, edad, dueño, raza, especie, pelaje, telefono, tipo como cadena 
	escribir "especie (perro/gato/ave):" 
	leer especie 
	
	si especie = "perro" entonces
		escribir "Cual es el nombre de tu amigo peludo?"
		leer nombre
		escribir "Cual es la edad de tu amigo peludo?"
		leer edad 
		escribir "nombre del dueño:"
		leer dueño
		escribir "Teléfono del dueño:"
		leer telefono 
		escribir "raza del del perro"
		leer raza
	FinSi
	
	si especie = "gato" entonces
		escribir "Cual es el nombre de tu amigo peludo?"
		leer nombre
		escribir "Cual es la edad de tu amigo peludo?"
		leer edad 
		escribir "nombre del dueño:"
		leer dueño
		escribir "Teléfono del dueño:"
		leer telefono 
		escribir "Color de pelaje del gato:"
		leer pelaje
	FinSi
	
	si especie = "ave" entonces
		escribir "Cual es el nombre de tu amigo peludo?"
		leer nombre
		escribir "Cual es la edad de tu amigo peludo?"
		leer edad 
		escribir "nombre del dueño:"
		leer dueño
		escribir "Teléfono del dueño:"
		leer telefono 
		escribir "tipo de ave:"
		leer tipo
	FinSi
	
	Escribir "cita agendada para " + nombre + " con el Dr. Misael para el 3/12/2024"
	
FinAlgoritmo
