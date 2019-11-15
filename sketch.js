var x = 300, y = 563; //objeto
var xd = 0, yd = 0; //disparo
var estadoDisparo = false;
var vidas = 10; //quantidade de vidas iniciais
var pontos = 0; //quantidade de pontos iniciais
var dificuldade = 1; //nível inicial
var raioJ = 25, raioO = 25, raioD = 4; //raios da ellipse jogador, obstáculos e disparo
var larguraT = 600, alturaT = 600;
var img1, img2, img3, img4, img5, img6, img7, img8, img9;
var hp, obs1, obs2, obs3, obs4, obs5;
var vetorX = [], vetorY = [], vetorV = [], vetorCor = [];
//vetores coordenadas X e Y, vetor velocidade dos obstáculos e a cor, que futuramente vai virar imagem
var qtdDeElementos = 10;
var i;
var barreiraDePontos = 100;
var tela = 1, bonusY = 0, deltaD = 10;

function setup() {  
  createCanvas(larguraT, alturaT);
  caracteristicasObstaculos ();
  //criar uma área de desenho 600x600
}

function draw() { 
  Telas();
}

//criando e movimentando os obstáculos
function Obstaculos(){
  for (i = 0; i<qtdDeElementos; i++){
    //image(img2,vetorX[i],vetorY[i],70,70);  
    //imageMode(CENTER);
    fill(vetorCor[i]);
    ellipse(vetorX[i], vetorY[i], 2*raioO, 2*raioO);//criar uma ellipse (posição-corresponde à coordenada x, , posição-corresponde à coordenada y,tamanho) - obstáculos
  }
}

//função responsável pela movimentação do jogador pelas teclas
function MovimentoObjeto(){ 
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

// função para retornar a determinada posição ao atingir os limites (jogador)
function RetornoLimites() { 
 if(x < 36){
    x = 36;
  }
  
  if(y >563){ //limite da parte inferior para o jogador
    y = 563;
  }
  
  if(x > 565){ 
    x = 565;
  }
  
  if(y < 36){ //limite da parte superior
    y = 36;
  }
}

//função responsável pela movimentação dos obstáculos
function MovimentoObs() {  
  for (i = 0; i<qtdDeElementos; i++){
    if(dificuldade == 1){
      vetorY[i] = vetorY[i] + vetorV[i];
      if (vetorY[i]>600){
          vetorY[i] = random (-600, 0);
      }
    }else if(dificuldade == 2){
      vetorY[i] = vetorY[i] + 1.3*vetorV[i]; //mudança de velocidade em cada nível
      if (vetorY[i]>600){
          vetorX[i] = random (0, 600);
          vetorY[i] = random (-600, 0);
      }
    }else if(dificuldade == 3){
      vetorY[i] = vetorY[i] + 1.5*vetorV[i];
      if (vetorY[i]>600){
          vetorX[i] = random (0, 600);
          vetorY[i] = random (-600, 0);
      }
    }else if(dificuldade == 4){
      vetorY[i] = vetorY[i] + 1.7*vetorV[i];
      if (vetorY[i]>600){
          vetorX[i] = random (0, 600);
          vetorY[i] = random (-600, 0);
      }
    }else if(dificuldade == 5){
      vetorY[i] = vetorY[i] + 2*vetorV[i];
      if (vetorY[i]>600){
          vetorX[i] = random (0, 600);
          vetorY[i] = random (-600, 0);
      }
    }
  }
}

//disparo
function Disparo(){ 
  if (keyIsDown(32) && estadoDisparo == false){ //se a tecla de espaço (Código Decimal ASCII - 32) for apertada, vai sair um disparo do meio do jogador
    xd = x;
    yd = y;
    estadoDisparo = true;
  }
  if(estadoDisparo == true){
  //image(img1,xd,yd,70,70);  
  //imageMode(CENTER);
    ellipse(xd, yd, 2*raioD, 2*raioD); //criação do disparo
    yd = yd - 7; // movimentação do disparo
    if(yd < 0){
      estadoDisparo = false; //ao ultrapassar os limites da tela, não há mais disparo
    }
    ColisaoDisparo();
  }
}

//função responsável pela colisão do jogador com os obstáculos
function Colisao(){ 
  for (i = 0; i<qtdDeElementos; i++){
  if (dist(x, y, vetorX[i], vetorY[i])<raioJ+raioO){ 
    vetorX[i] = random(25, 575);
    vetorY[i] = random(-600, 0);
    vidas--;
    }
  if (vidas<0){ //se a quantidade de vidas for menor do que 0, vidas vai ser 0 
    vidas=0;
    }
  }
}

//função responsável pela colisão do disparo com os obstáculos
function ColisaoDisparo(){ 
  for (i = 0; i<qtdDeElementos; i++){
    if (dist(xd,yd,vetorX[i],vetorY[i])<raioD+raioO){ 
      vetorX[i] = random (25, 575);
      vetorY[i] = random (-600, 0); 
      pontos+=10;
      estadoDisparo = false; //quando atingir o obstáculo, não haverá mais disparo
    }
  }
}

//inserir imagem
/*function preload() {
    img = loadImage("figuras/harry.png");
    img1 = loadImage("figuras/magia.png");
    img2 = loadImage("figuras/dementadores.png");
    img3 = loadImage("figuras/Hogwarts.jpg");
}
*/

//características
function caracteristicasObstaculos (){
  for(i = 0; i<qtdDeElementos; i++){
    vetorX[i] = random (25, 575);
    vetorY[i] = random (-600, 0); 
    vetorV[i] = random (2,5); //velocidade
    vetorCor[i] = random (100,220);
  }
}

//barreira de pontos para mudança de nível
function barreiraPontos (){
  if (pontos >= barreiraDePontos){
    dificuldade++;
    barreiraDePontos+=100;
  }
}

function Telas(){
  if (tela == 1) {
      background(img1);
    if (keyIsDown(ENTER)){
      tela = 2;
      }
    }
  if (tela == 2) {
      background(img2);
      if (keyIsDown(SHIFT) ) {
          tela = 3;
      }
    }
  if (tela == 3){
    if (dificuldade == 1){
      background(img3);
      Jogo();
    }
    if (dificuldade == 2){
      background(img4);
      Jogo();
    }
    if (dificuldade == 3){
      background(img5);
      Jogo();
    }
    if (dificuldade == 4){
      background(img6);
      Jogo();
    }
    if (dificuldade == 5){
      background(img7);
      Jogo();
    }
    if (dificuldade>5){
      fill(255);
      background(0);
      textSize(12);
      text("Venceu", 70, 70);
    }
  }
  if (tela == 4){
    background(0); 
    fill(135,206,235);
    }
}
//inserir imagem
function preload() {
  img1 = loadImage("figuras/tela1.jpg");
  img2 = loadImage("figuras/tela2.jpg");
  img3 = loadImage("figuras/tela3.jpg");
  img4 = loadImage("figuras/tela4.jpg");
  img5 = loadImage("figuras/tela5.jpg");
  img6 = loadImage("figuras/tela6.jpg");
  img7 = loadImage("figuras/tela7.jpg");
  obs1 = loadImage("figuras/obs1.png");
//  img8 = loadImage("figuras/tela8.jpg");
  //img9 = loadImage("figuras/tela9.jpg");
  hp = loadImage("figuras/harry.png");
}
//jogo
function Jogo(){
    fill(255); //preencher ellipse (jogador)
    image(hp, x, y, 60, 60);
    imageMode(CENTER);
    ellipse(x, y, 2*raioJ, 2*raioJ); // criar uma elipse (posição-coordenada x, posição-coordenada y, largura, altura)


    //informações sobre o jogo na tela
    textSize(23);
    fill(255);
    text('Vidas: '+vidas, 10, 30);
    text('Pontuação: ' +pontos, 230, 30);
    text('Nível: ' +dificuldade, 510, 30);

    //chamando as funções
    MovimentoObjeto();
    Disparo();
    RetornoLimites ();
    MovimentoObs();
    Colisao();
    barreiraPontos ();
    Obstaculos();
  
  if (vidas == 0){
      tela = 4;
  }
}
