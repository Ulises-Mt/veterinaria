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
  const nombre = document.getElementById(`nombre-${selectedAnimal}`).value;
  const raza = document.getElementById(`raza-${selectedAnimal}`).value || 'No aplica';
  const edad = document.getElementById(`edad-${selectedAnimal}`).value;
  const motivo = document.getElementById(`motivo-${selectedAnimal}`).value;
  const dueño = document.getElementById(`dueño-${selectedAnimal}`).value;
  const numero = document.getElementById(`numero-${selectedAnimal}`).value;

  // Crea un objeto con los datos
  const registro = { nombre, raza, edad, motivo, dueño, numero };

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

  // Crea una lista de los registros
  const lista = document.createElement('ul');
  registros.forEach((registro, index) => {
    const item = document.createElement('li');
    item.textContent = `Registro ${index + 1}: Nombre - ${registro.nombre}, Raza - ${registro.raza}, Edad - ${registro.edad}, Motivo - ${registro.motivo}, Dueño - ${registro.dueño}, Número - ${registro.numero}`;
    lista.appendChild(item);
  });

  // Agrega la lista al contenedor
  contenedorDatos.appendChild(lista);
}

// Botón para mostrar los datos manualmente
document.getElementById('mostrar-datos').addEventListener('click', (e) => {
  e.preventDefault();
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
