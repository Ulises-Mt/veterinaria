document.addEventListener('DOMContentLoaded', () => {
  const animalSelect = document.getElementById('animal');
  const preguntasDivs = document.querySelectorAll('#preguntas > div');

  animalSelect.addEventListener('change', () => {
    const selectedAnimal = animalSelect.value;

    // Ocultamos todas las preguntas
    preguntasDivs.forEach(div => div.classList.add('hidden'));

    // Mostramos las preguntas del animal seleccionado
    if (selectedAnimal) {
      document.getElementById(selectedAnimal).classList.remove('hidden');
    }
  });
});