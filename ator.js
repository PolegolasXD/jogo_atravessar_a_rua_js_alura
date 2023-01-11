let xAtor = 150;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  
  image(imgAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor(){
  
  if(keyIsDown(UP_ARROW)){
    
    yAtor -= 3;
   
  }
  
   if(keyIsDown(DOWN_ARROW)){
    
     if(podeSeMover()){
      
    yAtor += 3;
       
    }
    
  }
  
}

function movimentaAtorLados(){
  
  if(keyIsDown(LEFT_ARROW)){
    if(podeSeMoverEsquerda()){
      
    xAtor -= 3;
      
    }
  }
  
   if(keyIsDown(RIGHT_ARROW)){
    if(podeSeMoverDireita()){
      
    xAtor += 3;
      
    }
  }
  
}

function virificaColisao(){
  for(let i = 0; i < imgCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      
      colidiu();
      somDaColisao.play();
      
      if(meusPontos > 0){
        
        meusPontos -= 1;
        
      }
    }
  }
}

function colidiu(){
  yAtor = 366
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(128,0,128);
  text(meusPontos, width / 5, 28);
}


function marcaPonto(){
  if(yAtor < 6 ){
    meusPontos += 1;
    somDoPonto.play();
    yAtor = 366;
  }
}

function podeSeMover(){
  return yAtor < 366;
}

function podeSeMoverDireita(){
  return xAtor < 471;
}

function podeSeMoverEsquerda(){
  return xAtor > 0;
}



