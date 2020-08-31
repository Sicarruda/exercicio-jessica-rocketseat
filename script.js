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
var newColor = getRandomColor(); // #E943F0
