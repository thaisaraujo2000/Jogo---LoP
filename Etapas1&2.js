/* 
    Equipe: 
        Thaís de Araújo de Medeiros - Subturma 01C (Líder) 
        Andryele Eduarda de Araújo Medeiros - Subturma 01C 
        Etapas 1 e 2
*/

var x = 300, y = 350; //objeto
var x1 = 25, y1 = 25; //obstáculo

function setup() {
  createCanvas(400, 400);
  //criar uma área de desenho 400x400
}


function draw() {
  background(0); // cor de fundo (0 a 255) 0 - preto, 255 - branco
  square(x1, y1, 50); // criar um quadrado (posição-corresponde à coordenada x1, , posição-corresponde à coordenada y1,tamanho) - obstáculo

  fill(255); //preencher
  
  ellipse(x, y, 30,30); // criar uma elipse (posição-coordenada x, posição-coordenada y, largura, altura) - como a largura (30) e a altura (30) são iguais, a elipse vai corresponder a um círculo 
  
//A função keyIsDown () serve para verificar se determinada tecla está sendo pressionada - movimentação do objeto (elipse) 
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
    //o objeto vai se movimentar no sentido da coordenada y - para cima
  }
  if (keyIsDown(DOWN_ARROW)){ 
    //apertando a tecla da seta para baixo 
    y = y + 6;
    //o objeto vai se movimentar no sentido da coordenada y - para baixo
  }
  //retornar a determinada posição ao atingir os limites
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
  
