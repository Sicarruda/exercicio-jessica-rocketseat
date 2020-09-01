var corpo = document.querySelector('body');
var quadrado = document.querySelector('div#quadrado');
var botaoQuadrado = document.querySelector('button');
//variavel de contole para a função acaoBotao()
var quadradoExiste = true;

function some(){
  corpo.removeChild(quadrado);
  quadradoExiste = false;
}

function aparece(){
  corpo.appendChild(quadrado);
  quadradoExiste = true;
}

function acaoBotao(){
  if(quadradoExiste){
    some();
  }else{
    aparece();
  }
}

botaoQuadrado.onclick = acaoBotao;

//o puts-puts setInterval(acaoBotao, 100);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function trocaCor(){
  var corAleatoria = getRandomColor();
  quadrado.style.backgroundColor = corAleatoria;
  //troca o html de dentro do meu quadrado
  quadrado.innerHTML = 'Quadrado '+ corAleatoria;
}

quadrado.onmousemove = trocaCor;
//onmouseover = quando o mouse entra no elemento
//onmousemove = quando o mouse se mexe no elemento

var nomes = ["Diego", "Gabriel", "Lucas"];

var elementoUl = document.createElement('ul');

for(var i=0;i<nomes.length;i++){
  var tmp = document.createElement('li');
  tmp.innerHTML = nomes[i];
  tmp.style.color = getRandomColor();
  elementoUl.appendChild(tmp);
}

var divBotao = document.querySelector("div#botao");
divBotao.appendChild(elementoUl);

function adicionar(){
  var tmp = document.createElement('li');
  tmp.innerHTML = document.querySelector('input').value;
  document.querySelector('input').value = "";
  document.querySelector('input').focus();
  tmp.style.color = getRandomColor();
  elementoUl.appendChild(tmp);
}