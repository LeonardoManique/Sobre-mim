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
  alertButton1.classList.add('popup');
  alertButton1.addEventListener('click', function() {
    alert('Alerta 1!');
  });
  buttonDiv.appendChild(alertButton1);
  
  let alertButton2 = document.createElement('button');
  alertButton2.textContent = 'Certificados';
  alertButton2.classList.add('popup');
  alertButton2.addEventListener('click', function() {
    alert('Alerta 2!');
  });
  buttonDiv.appendChild(alertButton2);

  

let text4 = document.createElement('p');
text4.textContent = '"𝘌𝘷𝘦𝘯 𝘪𝘧 𝘺𝘰𝘶 𝘢𝘳𝘦 𝘯𝘰𝘵 𝘳𝘦𝘢𝘥𝘺 𝘧𝘰𝘳 𝘵𝘩𝘦 𝘥𝘢𝘺, 𝘪𝘵 𝘤𝘢𝘯𝘯𝘰𝘵 𝘢𝘭𝘸𝘢𝘺𝘴 𝘣𝘦 𝘯𝘪𝘨𝘩𝘵."';
text4.classList.add('text-class4');
container.appendChild(text4);


