//esconde y solo muestra las preguntas necesarias
document.addEventListener('DOMContentLoaded', () => {
  const animalSelect = document.getElementById('animal');
  const preguntasDivs = document.querySelectorAll('#preguntas > div');

  animalSelect.addEventListener('change', () => {
    const selectedAnimal = animalSelect.value;

    // Ocultar todas las preguntas
    preguntasDivs.forEach(div => div.classList.add('hidden'));

    // Mostrar las preguntas del animal seleccionado
    if (selectedAnimal) {
      document.getElementById(selectedAnimal).classList.remove('hidden');
    }
  });
});

// Captura el formulario y el contenedor de datos
const form = document.getElementById('registro-form');
const contenedorDatos = document.getElementById('datos-registrados');

// Maneja el envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const animalSelect = document.getElementById('animal');
  const selectedAnimal = animalSelect.value;

  if (!selectedAnimal) {
    alert('Selecciona un tipo de animal.');
    return;
  }

  // Obtiene los datos del formulario
  const animal = document.getElementById('animal').value;
  const nombre = document.getElementById(`nombre-${selectedAnimal}`).value;
  const raza = document.getElementById(`raza-${selectedAnimal}`).value;
  const edad = document.getElementById(`edad-${selectedAnimal}`).value;
  const motivo = document.getElementById(`motivo-${selectedAnimal}`).value;
  const dueño = document.getElementById(`dueño-${selectedAnimal}`).value;
  const numero = document.getElementById(`numero-${selectedAnimal}`).value;

  // Crea un objeto con los datos
  const registro = { animal, nombre, raza, edad, motivo, dueño, numero };

  // Recupera los datos existentes en localStorage
  let registros = JSON.parse(localStorage.getItem('registros')) || [];
  registros.push(registro);

  // Guarda de nuevo en localStorage
  localStorage.setItem('registros', JSON.stringify(registros));

  // Limpia el formulario
  form.reset();

  // Actualiza la visualización de los datos
  mostrarDatos();
});

// Función para mostrar los datos en la página
function mostrarDatos() {
  // Limpia el contenido anterior
  contenedorDatos.innerHTML = '';

  // Recupera los datos de localStorage
  const registros = JSON.parse(localStorage.getItem('registros')) || [];

  // Si no hay registros, muestra un mensaje
  if (registros.length === 0) {
    contenedorDatos.innerHTML = '<p>No hay datos registrados.</p>';
    return;
  }

  // Crea la tabla y cabecera
  const tabla = document.createElement('table');
  tabla.innerHTML = `
    <thead>
      <tr>
        <th>#</th>
        <th>Tipo de Animal</th>
        <th>Nombre</th>
        <th>Raza</th>
        <th>Edad</th>
        <th>Motivo</th>
        <th>Dueño</th>
        <th>Teléfono</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  `;

  // Llena la tabla con los registros
  const tbody = tabla.querySelector('tbody');
  registros.forEach((registro, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${registro.animal}</td>
      <td>${registro.nombre}</td>
      <td>${registro.raza}</td>
      <td>${registro.edad}</td>
      <td>${registro.motivo}</td>
      <td>${registro.dueño}</td>
      <td>${registro.numero}</td>
    `;
    tbody.appendChild(fila);
  });

  // Agrega la tabla al contenedor
  contenedorDatos.appendChild(tabla);
}

// Botón para mostrar los datos manualmente
document.getElementById('mostrar-datos').addEventListener('click', () => {
  console.log('Botón "Mostrar Base de datos" en base-datos.html presionado.');
  mostrarDatos();
});

// Botón para borrar la base de datos
document.getElementById('borrar-datos').addEventListener('click', (e) => {
  e.preventDefault();

  // Eliminar los datos del localStorage
  localStorage.removeItem('registros');

  // Actualizar la visualización
  contenedorDatos.innerHTML = '<p>No hay datos registrados.</p>';
});
