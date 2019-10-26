  /*
    Equipe: 
        Thaís de Araújo de Medeiros - Subturma 01C (Líder) 
        Andryele Eduarda de Araújo Medeiros - Subturma 01C 
        Etapas 5 e 6
*/

var x = 200, y = 375; //objeto
var x1 = 25, y1 = 25; //obstáculo1
var x2 = 200, y2 = 55; //obstáculo2
var xd = 0, yd = 0; //disparo
var estadoDisparo = false;
var vidas = 5; //quantidade de vidas iniciais
var pontos = 0; //quantidade de pontos iniciais
var dificuldade = 1; //nível inicial
var raioP = 15, raioO = 25; //raios

function setup() {
  createCanvas(400, 400);
  //criar uma área de desenho 400x400
}

function draw() { 
  background(219,112,147); // cor de fundo
  
  fill(218,165,32);//preencher obstáculos
  ellipse(x1, y1, 50); // criar uma ellipse (posição-corresponde à coordenada x1, , posição-corresponde à coordenada y1,tamanho) - obstáculo
  ellipse(x2, y2, 45);
  
  fill(255); //preencher ellipse (jogador)
  ellipse(x, y, 2*raioP,2*raioP); // criar uma elipse (posição-coordenada x, posição-coordenada y, largura, altura)
  
  //informações sobre o jogo na tela
  textSize(18);
  fill(255);
  text('Vidas: '+vidas, 10, 30);
  text('Pontuação: ' +pontos, 150, 30);
  text('Nível: ' +dificuldade, 330, 30);
  
  //chamando as funções
  MovimentoObjeto();
  Disparo();
  RetornoLimites ();
  MovimentoObs()
  Colisao();
}

function MovimentoObjeto(){ //função responsável pela movimentação do jogador pelas teclas
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
}
 
function RetornoLimites() { // função para retornar a determinada posição ao atingir os limites (jogador)
 if(x < 0){
    x = 400;
  }
  
  if(y >375){ //limite da parte inferior para o jogador
    y = 375;
  }
  
  if(x > 400){ 
    x = 0;
  }
  
  if(y < 250){ //limite da parte superior (metade da tela)
    y = 250;
  }
}
  
function MovimentoObs() {  //função responsável pela movimentação dos obstáculos
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
  }
}

function Disparo(){ //disparo
  if (keyIsDown(32) && estadoDisparo == false){ //se a tecla de espaço (Código Decimal ASCII - 32) for apertada, vai sair um disparo do meio do jogador
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

function Colisao(){ //função responsável pela colisão do jogador com os obstáculos
  if (dist(x, y, x1, y1)<raioP+raioO){ //obstáculo 1
    x = 200;
    y = 375;
    vidas--;
    if (vidas<=0){
      vidas=0;
    }
      }
  if (dist(x, y, x2, y2)<raioP+raioO){ //obstáculo 2
    x = 200;
    y = 375;
    vidas--;
    if (vidas<=0){
      vidas=0;
    } 
  }
}
