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
texto.textContent = 'Olá! Eu me chamo Leonardo, um jovem estudante de 22 anos e cursando análise e desenvolvimento de sistemas na universidade Estácio, localizada em Curitiba, Paraná. Desde criança, sempre fui apaixonado por tecnologia e programação, e agora estou determinado a me tornar um desenvolvedor sênior. Para isso, dedico grande parte do meu tempo aos estudos, buscando aprimorar minhas habilidades de programação e aprender novas tecnologias. Além de estar na faculdade, já trabalho como desenvolvedor-web-fullstack júnior em uma empresa chamada DealerSites. Esse trabalho tem sido um desafio, mas me proporciona uma valiosa experiência prática, permitindo-me aprimorar minhas habilidades e adquirir novos conhecimentos. Estou sempre em busca de novos desafios para continuar me desenvolvendo ainda mais, e estar no mercado de trabalho me permite estar atualizado sobre as tendências e novidades da área. Tenho um grande sonho de me mudar para o Canadá e continuar minha carreira como desenvolvedor. Acredito que o país oferece muitas oportunidades na área de tecnologia e seria um ótimo lugar para desenvolver minhas habilidades e crescer profissionalmente. Entretanto, sei que antes disso, preciso continuar me esforçando e aprendendo para me tornar um desenvolvedor de sucesso, independentemente de onde estiver. Com a experiência que estou adquirindo como desenvolvedor-web-fullstack júnior, estou confiante de que estou no caminho certo para alcançar meu objetivo de me tornar um desenvolvedor sênior e, quem sabe, um dia poder trabalhar no Canadá.';
texto.classList.add('sobre');
main.appendChild(texto);



