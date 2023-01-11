let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 150, 260, 95, 210, 315];
let velocidadeCarros = [5, 7, 4, 4.5, 6.5, 5.5]; 
let comprimentoCarro = 50;
let alturaCarro = 40;




function mostraCarros(){
  for (let i = 0; i < imgCarros.length; i = i + 1 ){
  image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
}
}

function movimentaCarros(){
  for( i= 0; i < imgCarros.length; i = i + 1){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro(){
  
  for(i = 0; i <imgCarros.length; i = i + 1){
      if (passouTodaTela(xCarros[i])){
        xCarros[i] = 600;
 }
 }
 }

function passouTodaTela(xCarros){
  return xCarros < -75;
}
  

