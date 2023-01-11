function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}


function draw() {
  
  background(imgEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarros();
  movimentaCarros();
  voltaCarro();
  virificaColisao();
  movimentaAtorLados();  
  incluiPontos();
  marcaPonto();
  
}



























