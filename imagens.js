let imgEstrada; 
let imgAtor;
let imgCarroUm;
let imgCarroDois;
let imgCarroTres;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imgEstrada = loadImage("imagens/estrada.png");
  imgAtor = loadImage("imagens/ator-1.png");
  imgCarroUm = loadImage("imagens/carro-1.png");
  imgCarroDois = loadImage("imagens/carro-2.png");
  imgCarroTres = loadImage("imagens/carro-3.png");
  
  imgCarros = [imgCarroUm,imgCarroDois,imgCarroTres, imgCarroDois, imgCarroUm, imgCarroTres];
  
  somDaTrilha = loadSound("musica/trilha.mp3");
  somDaColisao = loadSound("musica/colidiu.mp3");
  somDoPonto = loadSound("musica/pontos.wav");
  
}