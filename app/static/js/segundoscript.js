// Función para generar las horas en punto en el <select>
function generarHoras() {
const selectHora = document.getElementById('hora');
// Generar opciones de horas (de 1:00 a 24:00)
for (let i = 1; i <= 24; i++) {
    const option = document.createElement('option');
    // Formato de la hora: 01:00, 02:00, ..., 24:00
    const horaFormateada = i < 10 ? `0${i}:00` : `${i}:00`;
    option.value = horaFormateada;
    option.textContent = horaFormateada;
    selectHora.appendChild(option);
    }
}

// Llamar a la función para generar las horas cuando se carga la página
generarHoras();

// Calcular la fecha mínima (hoy) y máxima (hoy + 14 días)
const hoy = new Date();
const fechaMin = hoy.toISOString().split('T')[0]; // Convertir a formato YYYY-MM-DD
const fechaMax = new Date(hoy);
fechaMax.setDate(hoy.getDate() + 14); // Agregar 14 días
const fechaMaxFormat = fechaMax.toISOString().split('T')[0];

// Asignar las fechas al input de tipo date
document.getElementById('fecha').min = fechaMin;
document.getElementById('fecha').max = fechaMaxFormat;



//funcionalidad de las citas agendadas

document.addEventListener('DOMContentLoaded', () => {
const botonMostrarCitas = document.getElementById('mostrar-citas');
botonMostrarCitas.addEventListener('click', () => {
    console.log("Clic en mostrar citas");
    mostrarCitas();
    });
});
  
// Referencias a elementos del DOM
const formCitas = document.getElementById('cita-form');
const contenedorCitas = document.getElementById('citas-agendadas');
const botonMostrarCitas = document.getElementById('mostrar-citas');
const botonBorrarCitas = document.getElementById('borrar-citas');
  
// Manejar el envío del formulario
formCitas.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener datos del formulario
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const animal = document.getElementById('animal').value;
    const paciente = document.getElementById('nombre-paciente').value;
    const motivo = document.getElementById('cita-motivo').value;
    const dueño = document.getElementById('nombre-dueño').value;
    const telefono = document.getElementById('numero-telefonico').value;
    
    // Validar datos
    if (!fecha || !hora || animal === 'selecciona' || motivo === 'selecciona' || !paciente || !dueño || !telefono) {
        alert('Por favor, completa todos los campos.');
        return;
}
  
// Crear el objeto de la cita
const nuevaCita = { fecha, hora, animal, paciente, motivo, dueño, telefono };
  
// Guardar la cita en localStorage
const citas = JSON.parse(localStorage.getItem('citas')) || [];
citas.push(nuevaCita);
localStorage.setItem('citas', JSON.stringify(citas));//posible error 
  
// Limpiar el formulario y mostrar las citas
formCitas.reset();
mostrarCitas();
});
  
// Función para mostrar las citas
function mostrarCitas() {
contenedorCitas.innerHTML = ''; // Limpiar el contenido existente
const citas = JSON.parse(localStorage.getItem('citas')) || [];
  
if (citas.length === 0) {
    contenedorCitas.innerHTML = '<p>No hay citas agendadas.</p>';
    return;
}
  
// Crear la tabla de citas
const tabla = document.createElement('table');
tabla.innerHTML = `
    <thead>
    <tr>
        <th>#</th>
        <th>Fecha</th>
        <th>Hora</th>
        <th>Animal</th>
        <th>Paciente</th>
        <th>Motivo</th>
        <th>Dueño</th>
        <th>Teléfono</th>
     </tr>
    </thead>
<tbody>
</tbody>
`;
  
const tbody = tabla.querySelector('tbody');
citas.forEach((cita, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${cita.fecha}</td>
        <td>${cita.hora}</td>
        <td>${cita.animal}</td>
        <td>${cita.paciente}</td>
        <td>${cita.motivo}</td>
        <td>${cita.dueño}</td>
        <td>${cita.telefono}</td>
    `;
        tbody.appendChild(fila);
    });
  
    contenedorCitas.appendChild(tabla);
}

// Manejar el botón para mostrar citas
document.getElementById('mostrar-citas').addEventListener('click', mostrarCitas);
  
// Manejar el botón para borrar citas
botonBorrarCitas.addEventListener('click', () => {
    localStorage.removeItem('citas');
    mostrarCitas();
});
  
// Mostrar las citas al cargar la página
mostrarCitas();
;
  