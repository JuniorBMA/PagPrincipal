// Variables para el slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.slider-dots .dot');
const slider = document.querySelector('.slider');

// Función para mostrar el slide actual
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;  // Si llegamos al final, volvemos al principio
    } else if (index < 0) {
        slideIndex = slides.length - 1;  // Si estamos al principio, vamos al final
    } else {
        slideIndex = index;
    }

    // Desplaza el contenedor del slider para mostrar la imagen correcta
    const offset = -slideIndex * window.innerWidth; // Desplazamiento según el ancho de la ventana
    slider.style.transform = `translateX(${offset}px)`; // Desplazamiento del carrusel

    // Actualizar los puntos de navegación
    dots.forEach((dot, i) => {
        if (i === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Función para mover al siguiente o anterior slide
function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Función para ir a un slide específico
function currentSlide(index) {
    showSlide(index - 1); // Restamos 1 porque los índices empiezan en 0
}

// Iniciar el slider
showSlide(slideIndex);

// Cambiar automáticamente cada 7 segundos
setInterval(() => {
    moveSlide(1); // Cambia al siguiente slide
}, 7000);

// Agregar eventos a los puntos de navegación
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => currentSlide(i + 1)); // El índice de los puntos comienza en 0, pero se pasa como 1 para la función showSlide
});






let currentIndex = 0;  // Índice de la imagen actual
const images = document.querySelectorAll('.image-box');  // Todas las imágenes
const totalImages = images.length;  // Número total de imágenes
const imagesPerPage = 2;  // Cantidad de imágenes visibles a la vez

// Mueve las imágenes según la dirección (izquierda o derecha)
function moveImages(step) {
    currentIndex += step;
  // Si llegamos al final, volvemos al inicio sin espacio en blanco
  if (currentIndex >= totalImages-1) {
    currentIndex = 0;
    // Desplazamos el carrusel al inicio
    document.querySelector('.image-container').style.transform = `translateX(0%)`;
    
    // Restauramos la transición después de un pequeño retraso
    setTimeout(() => {
        document.querySelector('.image-container').style.transition = 'transform 0.5s ease';  // Restauramos la transición
    }, 50);  // Esto se hace con un pequeño retraso para que no se vea el espacio en blanco
} else if (currentIndex < 0) {
    currentIndex = totalImages - imagesPerPage;
}

// Calculamos el desplazamiento basado en el índice actual
const offset = -(currentIndex * (100 / imagesPerPage));  // Ajuste para mover las imágenes de a 2 por vez
document.querySelector('.image-container').style.transform = `translateX(${offset}%)`;
}

// Llama a la función para asegurar que el carrusel empieza en la primera imagen
moveCarousel(0);  // Inicia el carrusel en la primera imagen


