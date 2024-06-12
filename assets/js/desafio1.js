const imagen = document.getElementById('mi-imagen');

// Agregar el evento de clic a la imagen
imagen.addEventListener('click', () => {
  // Verificar si la imagen tiene un borde actualmente
  if (imagen.style.border === 'none') {
    // Si no tiene borde, agregar un borde de 2 píxeles de grosor y color rojo
    imagen.style.border = '2px solid red';
  } else {
    // Si tiene borde, eliminar el borde
    imagen.style.border = 'none';
  }
});