const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.nav-button');

let currentSlide = 1;

// Função para mostrar o slide atual
const showSlide = (slideIndex) => {
  // Verifica se o slideIndex é válido
  if (slideIndex < 1) {
    slideIndex = slides.length;
  } else if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Esconde todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  // Mostra o slide atual
  slides[slideIndex - 1].classList.add('active');

  // Atualiza o botão de navegação atual
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  buttons[slideIndex - 1].classList.add('active');

  // Atualiza o índice do slide atual
  currentSlide = slideIndex;
};

// Adiciona o evento de clique para os botões de navegação
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    showSlide(i + 1);
  });
}

// Inicia o carrossel automaticamente
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);
