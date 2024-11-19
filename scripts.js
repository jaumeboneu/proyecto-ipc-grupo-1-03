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