let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let img = document.createElement('img');
img.src = 'IMG/leonardo.jpg';
img.classList.add('profile');
container.appendChild(img);

let text1 = document.createElement('p');
text1.textContent = 'Leonardo';
text1.classList.add('text-class');
container.appendChild(text1);

let text2 = document.createElement('p');
text2.classList.add('text-class2');
container.appendChild(text2);

let img2 = document.createElement('img');
img2.src = 'IMG/map.png';
img2.classList.add('map');
text2.appendChild(img2);

let text2Content = document.createTextNode('Curitiba - PR');
text2.appendChild(text2Content);

let text3 = document.createElement('p');
text3.textContent = 'Desenvolvedor-Web Full-stack';
text3.classList.add('text-class');
container.appendChild(text3);


let buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.marginTop = '20px';
container.appendChild(buttonContainer);
let buttonImages = [    
    'IMG/linkedin.png',    
    'IMG/github.png',    
    'IMG/whatsapp.png',    
    'IMG/facebook.png',    
    'IMG/instagram.png'];
let buttonLinks = [      
    'https://www.linkedin.com/in/leonardo-manique/',      
    'https://github.com/LeonardoManique',      
    'https://wa.me/+5541997981076',      
    'https://www.facebook.com/Because.want.to.bother.me',      
    'https://www.instagram.com/leonardo.manique/'];
for (let i = 0; i < buttonImages.length; i++) {
  let button = document.createElement('a');
  button.style.margin = '0 10px';
  let link = document.createElement('a');
  link.href = buttonLinks[i];
  link.target = '_blank';
  let img = document.createElement('img');
  img.src = buttonImages[i];
  img.classList.add('button-image');
  link.appendChild(img);
  button.appendChild(link);
  buttonContainer.appendChild(button);
  img.addEventListener('mouseover', function() {
    img.classList.add('enlarge');
  });
  img.addEventListener('mouseout', function() {
    img.classList.remove('enlarge');
  });
}

  let buttonDiv = document.createElement('div');
  buttonDiv.style.display = 'flex';
  buttonDiv.style.justifyContent = 'center';
  buttonDiv.style.marginTop = '20px';
  container.appendChild(buttonDiv);
  
  let alertButton1 = document.createElement('button');
  alertButton1.textContent = 'Sobre mim';
  alertButton1.classList.add('popup2');
  alertButton1.addEventListener('click', function() {
    window.location.href = '';
  });
  buttonDiv.appendChild(alertButton1);
  
  let alertButton2 = document.createElement('button');
  alertButton2.textContent = 'Certificados';
  alertButton2.classList.add('popup');
  alertButton2.addEventListener('click', function() {
    window.location.href = 'certificado.html';
  });
  let certificadosText = document.createTextNode('');
alertButton2.appendChild(certificadosText);

let certificadosIcon = document.createElement('img');
certificadosIcon.setAttribute('src', 'IMG/download.png');
certificadosIcon.classList.add('download');
alertButton2.appendChild(certificadosIcon);
  buttonDiv.appendChild(alertButton2);

  

let text4 = document.createElement('p');
text4.textContent = '"𝘌𝘷𝘦𝘯 𝘪𝘧 𝘺𝘰𝘶 𝘢𝘳𝘦 𝘯𝘰𝘵 𝘳𝘦𝘢𝘥𝘺 𝘧𝘰𝘳 𝘵𝘩𝘦 𝘥𝘢𝘺, 𝘪𝘵 𝘤𝘢𝘯𝘯𝘰𝘵 𝘢𝘭𝘸𝘢𝘺𝘴 𝘣𝘦 𝘯𝘪𝘨𝘩𝘵."';
text4.classList.add('text-class4');
container.appendChild(text4);

const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.nav-button');

let currentSlide = 1;

const showSlide = (slideIndex) => {
  if (slideIndex < 1) {
    slideIndex = slides.length;
  } else if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex - 1].classList.add('active');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  buttons[slideIndex - 1].classList.add('active');
  currentSlide = slideIndex;
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    showSlide(i + 1);
  });
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

const main = document.querySelector('main');
const texto = document.createElement('p');
texto.textContent = 'O desafio TAG Livros <br> teve 853 participantes, totalizando mais de 1104 microrromances inscritos. Como critério para participação os textos deveriam ter no máximo 500 caracteres (com exceção do título), com temática livre, ser inéditos — não tendo sido publicados em nenhum meio até a data da inscrição, nem mesmo em blogs pessoais e redes sociais — e não infringir direitos autorais. A comissão avaliadora foi composta por três escritores, escolhidos pela Revista Bula. A TAG Livros, patrocinadora oficial do concurso, não participou na escolha dos premiados, nem é solidária nos direitos de publicação dos textos vencedores. Todos os autores selecionados assinaram Termo de Anuência, confirmando a autoria dos textos, com cessão de direitos autorais para a Revista Bula.';
texto.classList.add('sobre');
main.appendChild(texto);



