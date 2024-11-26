function toggleMenu() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
  }
  
// Función para actualizar la URL cuando se hace clic en un acordeón
document.querySelectorAll('.accordion-button').forEach(function (button) {
  button.addEventListener('click', function () {
    // Obtener el ID del acordeón (por ejemplo, 'collapseOne', 'collapseTwo', etc.)
    var targetId = this.getAttribute('data-bs-target').substring(1); // Quitar el símbolo '#'

    // Actualizar la URL sin recargar la página
    history.pushState(null, null, '#'+targetId);
  });
});

// Al cargar la página, verificar si hay un fragmento en la URL y abrir el acordeón correspondiente
document.addEventListener('DOMContentLoaded', function () {
  var hash = window.location.hash;
  if (hash) {
    // Si el fragmento es válido, abrir el acordeón correspondiente
    var acordeon = new bootstrap.Collapse(document.querySelector(hash), {
      toggle: true // Abrir el acordeón
    });
  }
});

document.getElementById('evaluation-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir envío del formulario

  let score = 0;
  let totalQuestions = 10; // Total de preguntas

  // Calcular puntuación
  for (let i = 1; i <= totalQuestions; i++) {
      let selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
      if (selectedOption && selectedOption.value === 'correct') {
          score++;
      } else if (selectedOption && selectedOption.value === 'mid') {
          score = score + 0.5;
      }
  }

  // Calcular el porcentaje
  let percentage = (score / totalQuestions) * 100;

  // Mostrar resultados
  document.getElementById('score').textContent = `Puntuación: (${percentage.toFixed(2)}%)`;
  
  let explanation;
  if (percentage === 100) {
      explanation = "¡Felicidades! Has acertado todas las preguntas.";
  } else if (percentage >= 80) {
      explanation = "Muy bien, tienes un gran conocimiento del TFG.";
  } else if (percentage >= 50) {
      explanation = "Estás en el buen camino, pero aún puedes mejorar.";
  } else {
      explanation = "Parece que necesitas revisar algunos aspectos del TFG.";
  }
  document.getElementById('explanation').textContent = explanation;

  // Ocultar el formulario y mostrar los resultados
  document.getElementById('evaluation-form').style.display = 'none';
  document.getElementById('result').style.display = 'block';
});
