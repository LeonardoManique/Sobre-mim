let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let img = document.createElement('img');
img.src = 'IMG/leonardo.jpg';
img.style.width = '250px';
img.style.height = '250px';
img.style.borderRadius = '50%';
container.appendChild(img);

let text1 = document.createElement('p');
text1.textContent = 'Leonardo';
text1.classList.add('text-class');
container.appendChild(text1);

let text2 = document.createElement('p');
text2.textContent = 'Curitiba - PR';
text2.classList.add('text-class');
container.appendChild(text2);

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
    'IMG/whatsapp.png',
    'IMG/whatsapp.png',
    'IMG/whatsapp.png',
    'IMG/whatsapp.png',
    'IMG/whatsapp.png'
];
let buttonLinks = [  
    'https://linkedin.com',  
    'https://facebook.com',  
    'https://youtube.com',  
    'https://link4.com',  
    'https://link5.com'
];
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
}

let text4 = document.createElement('p');
text4.textContent = 'Frase';
text4.classList.add('text-class');
container.appendChild(text4);

   