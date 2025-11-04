const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0; // Índice da imagem atual
const totalImages = images.length;
const intervalTime = 3000; // Tempo entre as transições (em milissegundos)

// Função para atualizar a posição do carrossel
function updateCarousel() {
  const offset = -currentIndex * 100; // Calcula o deslocamento
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Função para ir para a próxima imagem
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages; // Volta ao início se atingir o final
  updateCarousel();
}

// Função para ir para a imagem anterior
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Volta ao final se atingir o início
  updateCarousel();
}

// Adiciona eventos aos botões
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Configura o carrossel automático
let autoSlide = setInterval(nextImage, intervalTime);

// Pausa o carrossel ao passar o mouse
document.querySelector('.carousel').addEventListener('mouseover', () => {
  clearInterval(autoSlide);
});

// Retoma o carrossel ao remover o mouse
document.querySelector('.carousel').addEventListener('mouseout', () => {
  autoSlide = setInterval(nextImage, intervalTime);
});