
class Animal:
    def __init__(self, nombre, especie, edad, dueño):
        self.nombre = nombre
        self.especie = especie
        self.edad = edad
        self.dueño = dueño
        self.historial = []

    def agregar_diagnostico(self, diagnostico, tratamiento):
        self.historial.append({"diagnostico": diagnostico, "tratamiento": tratamiento})

    def mostrar_historial(self):

        return self.historial


class Perro(Animal):
    def __init__(self, nombre, edad, dueño, raza):
        super().__init__(nombre, "Perro", edad, dueño)
        self.raza = raza


class Gato(Animal):
    def __init__(self, nombre, edad, dueño, color_pelaje):
        super().__init__(nombre, "Gato", edad, dueño)
        self.color_pelaje = color_pelaje


class Ave(Animal):
    def __init__(self, nombre, edad, dueño, tipo_ave):
        super().__init__(nombre, "Ave", edad, dueño)
        self.tipo_ave = tipo_ave



class Dueño:
    def __init__(self, nombre, telefono):
        self.nombre = nombre
        self.telefono = telefono


class Veterinario:
    def __init__(self, nombre, especialidad):
        self.nombre = nombre
        self.especialidad = especialidad


class Cita:
    def __init__(self, animal, veterinario, fecha, motivo):
        self.animal = animal
        self.veterinario = veterinario
        self.fecha = fecha
        self.motivo = motivo


def registrar_animal():
    nombre = input("Cual es el nombre de tu amigo peludo?: ")
    especie = input("Especie (Perro/Gato/Ave): ")
    edad = int(input("Cual es la edad de tu amigo peludo? "))
    nombre_dueño = input("Nombre del dueño: ")
    telefono_dueño = input("Teléfono del dueño: ")

    dueño = Dueño(nombre_dueño, telefono_dueño)

    if especie.lower() == "perro":
        raza = input("Raza del perro: ")
        return Perro(nombre, edad, dueño, raza)
    elif especie.lower() == "gato":
        color_pelaje = input("Color de pelaje del gato: ")
        return Gato(nombre, edad, dueño, color_pelaje)
    elif especie.lower() == "ave":
        tipo_ave = input("Tipo de ave: ")
        return Ave(nombre, edad, dueño, tipo_ave)
    

def agendar_cita(animal, veterinario, fecha, motivo):
    return Cita(animal, veterinario, fecha, motivo)


def registrar_diagnostico(animal):
    diagnostico = input("Ingrese el diagnóstico: ")
    tratamiento = input("Ingrese el tratamiento: ")
    animal.agregar_diagnostico(diagnostico, tratamiento)
    print("Diagnóstico registrado con éxito.")


if __name__ == "__main__":
    print("Sistema Veterinario")
    animales = []

    nuevo_animal = registrar_animal()
    if nuevo_animal:
        animales.append(nuevo_animal)
        print(f"Animal registrado: {nuevo_animal.nombre}")

    veterinario = Veterinario("Dr. Misael ", "Medico veterinario general")

    if animales:
        cita = agendar_cita(animales[0], veterinario, "2024-11-25", "Consulta general")
        print(f"Cita agendada para {cita.animal.nombre} con {cita.veterinario.nombre} el {cita.fecha}.")

        

   