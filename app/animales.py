class Animal:
    def __init__(self, nombre, especie, edad, dueño, motivo, telefono):
        self.nombre = nombre
        self.especie = especie
        self.edad = edad
        self.dueño = dueño
        self.motivo = motivo
        self.telefono = telefono


    def mostrar_info(self):
        return f"Nombre: {self.nombre}, Especie: {self.especie}, Edad: {self.edad} años, Dueño {self.dueño}, Motivo {self.motivo}, Telefono {self.telefono}"

class Perro(Animal):
    def __init__(self, nombre, edad, dueño, motivo, telefono, raza):
        super().__init__(nombre, "Perro", edad, dueño, motivo, telefono, raza)
        self.raza = raza

    def mostrar_info(self):
        info_base = super().mostrar_info()
        return f"{info_base}, Raza: {self.raza}"


class Gato(Animal):
    def __init__(self, nombre, edad, dueño, motivo, telefono, raza):
        super().__init__(nombre, "Gato", dueño, motivo, telefono, raza)
        self.raza = raza

    def mostrar_info(self):
        info_base = super().mostrar_info()
        return f"{info_base}, Raza: {self.raza}"

class Hamster(Animal):
    def __init__(self, nombre, edad, dueño, motivo, telefono, raza):
        super().__init__(nombre, "Hamster", dueño, motivo, telefono, raza)
        self.raza = raza

    def mostrar_info(self):
        info_base = super().mostrar_info()
        return f"{info_base}, Raza: {self.raza}"

class Citas:
    def __init__(self, nombre, especie, dia, dueño, motivo, telefono):
        self.nombre = nombre
        self.especie = especie
        self.dia = dia
        self.hora = hora
        self.dueño = dueño
        self.motivo = motivo
        self.telefono = telefono

    def mostrar_info(self):
        return f"Nombre: {self.nombre}, Especie: {self.especie}, Dia: {self.dia} , hora: {self.hora} Dueño {self.dueño}, Motivo {self.motivo}, Telefono {self.telefono}"

class Baño(Citas)::
    def __init__(self, nombre, esoecie, dia, hora, dueño, motivo, telefono)
    super().__init__(nombre, especie, dia, hora, dueño, "baño", telefono)

class Consulta(Citas)::
    def __init__(self, nombre, esoecie, dia, hora, dueño, motivo, telefono)
    super().__init__(nombre, especie, dia, hora, dueño, "consulta", telefono)

class Emergencias(Citas)::
    def __init__(self, nombre, esoecie, dia, hora, dueño, motivo, telefono)
    super().__init__(nombre, especie, dia, hora, dueño, "emergencias", telefono)  

        def mostrar_info(self):
        info_base = super().mostrar_info()
        return f"{info_base}, motivo: {self.motivo}"
