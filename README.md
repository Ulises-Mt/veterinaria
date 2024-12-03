# Sistema de Gestión de Clínica Veterinaria **VITAPET🐾**
## Sobre nosotros
Somos [**Vitapet🐾**](http://127.0.0.1:5000 "Conocenos") una web de Clínica Veterinaria diseñada para  atender de la mejor manera a tus mascotas. Ofrecemos organizar las citas para tus mascotas, historiales medicos, y administramos a nuestros clientes y sus mascotas.

- **Gestion de clientes**: Registra y consulta datos de los propietarios y mascotas.
- **Calendario de citas**: Administra citas facilmente.
---
### **Contamos con:** 
* Baño 
    * Bañamos a tus mascotas. 🐕🐈🐦![B](app/static/imagenes/icono1.png)
* Consultas
    * Consultas medicas o de revision para cualquiera de tus mascotas.![C](app/static/imagenes/icono2.png)
* Servicios
    * Nuestros servicios todo el día todos los días.
    ![24/7](app/static/imagenes/icono3.png)
 ---
## Metodología de las 6D
## 1. Descripción del problema:
 **• Diseñar un sistema para registrar animales, categorías (especies/razas) y dueños.**
• Implementar funciones para registrar animales en la base de datos, gestionar citas médicas, y así realizar un registro en el que tendremos datos mas específicos de los pacientes caninos, felinos y aves.
• Considerar la posibilidad de diferentes tipos de animales, con atributos específicos como especie, raza, edad, peso y estado de salud. Este sistema de gestión veterinaria está diseñado para facilitar la administración de pacientes, dueños, y servicios relacionados con el cuidado animal.
## 2. Definición de la solución:
• Un Sistema de Gestión Veterinaria: Este sistema de gestión está diseñado para facilitar la administración de pacientes (animales), dueños, y servicios veterinarios, permitiendo un control eficiente de citas e historiales médicos.
## 3. Diseño de la Solución:
**Pseudocodigo**
![imagen](app/static/imagenes/pseudocodigo1.png)
![imagen](app/static/imagenes/pseudocodigo2.png)
![imagen](app/static/imagenes/pseudocodigo3.png)
**Diagrama de flujo**
![pruebas](app/static/imagenes/pruebas.png)

## 4. Desarrollo de la solución
**Clases Python**
![clases1](app/static/imagenes/clases1.png)
![clases2](app/static/imagenes/clases2.png)
![clases3](app/static/imagenes/clases3.png)
![clases4](app/static/imagenes/clases4.png)
## 5. Depuración y Pruebas:

![pruebas1](app/static/imagenes/diagrama1.jpg)

## 6. Documentación:
### **Cómo funciona:**
**1. Ingreso de datos:**

• Nombre del animal.
• Especie (perro, gato, ave, etc.).
• Edad del animal.
• Nombre y teléfono del dueño.
• Raza.

**2. Proceso:**

• El sistema guarda los datos del animal y del dueño.
• Se agenda automáticamente una cita médica con el veterinario.

**3. Salida:**
 
• El sistema confirma el registro del animal.
• Proporciona la fecha, hora y nombre del veterinario asignado.
Ejemplo de uso:
• Entrada: Un usuario registra un perro llamado “pinnky”, de 34 años, cuyo dueño es “Fernando”.
• Salida:
• Animal registrado: pinnky. 
• Cita programada con el Dr. Misael para el 2024-12-03.
Este sistema simplifica la gestión veterinaria y asegura que los animales reciban atención médica a tiempo.
