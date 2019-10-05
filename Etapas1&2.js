/* 
    Equipe: 
        Nome Completo do Aluno I - Subturma X (Líder) 
        Nome Completo do Aluno II - Subturma Z 
        Etapa X
*/

var x = 350;
var y = 300;

function setup() {
  createCanvas(400, 400);
  //criar uma área de desenho 400x400
}


function draw() {
  background(0); // cor de fundo (0 a 255) 0 - preto, 255 - branco
  
  square(25, 25, 50); // criar um quadrado (largura-corresponde à coordenada x, comprimento-corresponde à coordenada y,tamanho) - obstáculo
  
  fill(255);
  
  
  ellipse(x, y, 30,30); // criar uma elipse - como a largura (30) e a altura (30) são iguais, a elipse vai corresponder a um círculo
  
//A função keyIsDown () serve para verificar se determinada tecla está sendo pressionada
  
  if(keyIsDown(RIGHT_ARROW)){ 
    //apertando a tecla da seta para a direita
    x = x + 6; 
    //o objeto vai se movimentar no sentido da coordenada x - direita
  }
  
  if(keyIsDown(LEFT_ARROW)){ 
    //apertando a tecla da seta para a esquerda
    x = x - 6; 
    //o objeto vai se movimentar no sentido da coordenada x - esquerda
  }
  
  if (keyIsDown(UP_ARROW)){ 
    //apertando a tecla da seta para cima
    y = y - 6;
  }
  
  if (keyIsDown(DOWN_ARROW)){ //apertando a seta para baixo no teclado
    y = y + 6;
  }
  
  if(x < 0){
    x = 400;
  }
  
  if(y < 0){
    y = 400;
  }
  
  if(x > 400){
    x = 0;
  }
  
  if(y > 400){
    y = 0;
  }
}