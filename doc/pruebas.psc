Algoritmo sistemaveterinario
	definir nombre, edad, due�o, raza, especie, pelaje, telefono, tipo como cadena 
	escribir "especie (perro/gato/ave):" 
	leer especie 
	
	si especie = "perro" entonces
		escribir "Cual es el nombre de tu amigo peludo?"
		leer nombre
		escribir "Cual es la edad de tu amigo peludo?"
		leer edad 
		escribir "nombre del due�o:"
		leer due�o
		escribir "Tel�fono del due�o:"
		leer telefono 
		escribir "raza del del perro"
		leer raza
	FinSi
	
	si especie = "gato" entonces
		escribir "Cual es el nombre de tu amigo peludo?"
		leer nombre
		escribir "Cual es la edad de tu amigo peludo?"
		leer edad 
		escribir "nombre del due�o:"
		leer due�o
		escribir "Tel�fono del due�o:"
		leer telefono 
		escribir "Color de pelaje del gato:"
		leer pelaje
	FinSi
	
	si especie = "ave" entonces
		escribir "Cual es el nombre de tu amigo peludo?"
		leer nombre
		escribir "Cual es la edad de tu amigo peludo?"
		leer edad 
		escribir "nombre del due�o:"
		leer due�o
		escribir "Tel�fono del due�o:"
		leer telefono 
		escribir "tipo de ave:"
		leer tipo
	FinSi
	
	Escribir "cita agendada para " + nombre + " con el Dr. Misael para el 3/12/2024"
	
FinAlgoritmo
