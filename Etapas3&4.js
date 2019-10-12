/* 
    Equipe: 
        Thaís de Araújo de Medeiros - Subturma 01C (Líder) 
        Andryele Eduarda de Araújo Medeiros - Subturma 01C 
        Etapas 3 e 4
*/

var x = 300, y = 350; //objeto
var x1 = 25, y1 = 25; //obstáculo1
var x2 = 200, y2 = 55; //obstáculo2
var xd = 0, yd = 0; //disparo
var estadoDisparo = false;

function setup() {
  createCanvas(400, 400);
  //criar uma área de desenho 400x400
}

function draw() {
  background(100); // cor de fundo (0 a 255) 0 - preto, 255 - branco
  
  square(x1, y1, 50); // criar um quadrado (posição-corresponde à coordenada x1, , posição-corresponde à coordenada y1,tamanho) - obstáculo
  
  square(x2, y2, 45);
  
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
    
  //retornar a determinada posição ao atingir os limites (objeto)
 if(x < 0){
    x = 400;
  }
  
  if(y >370){ //limite da parte inferior para o jogador
    y = 370;
  }
  
  if(x > 400){ 
    x = 0;
  }
  
  if(y < 250){ //limite da parte superior (metade da tela)
    y = 250;
  }
  
  //movimentação do obstáculo
  //objeto1
  y1 = y1 + 6;
  if(y1 > 400){
    y1 = -random (50); // posição aleatória para o obstáculo ressurgir no eixo y 
    x1 = random (253); // posição aleatória para o obstáculo ressurgir no eixo x
    console.log(y1); 
    console.log(x1); 
  }
  
  //objeto2
  y2 = y2 + 4;
  if(y2 > 400){
    y2 = -random (50); // posição aleatória para o obstáculo ressurgir no eixo y 
    x2 = random (523); // posição aleatória para o obstáculo ressurgir no eixo x
    console.log(y2); 
    console.log(x2); 
  }
  
  //disparo
  if (keyIsDown(CONTROL) && estadoDisparo == false){ //se a tecla CTRL for apertada, vai sair um disparo do meio do jogador
    xd = x;
    yd = y;
    estadoDisparo = true;
  }
  if(estadoDisparo == true){
    ellipse(xd, yd, 6, 6); //criação do disparo
    yd = yd - 10; // movimentação do disparo
    if(yd < 0){
      estadoDisparo = false; //ao ultrapassar os limites da tela, não há mais disparo
    }
  }
}
