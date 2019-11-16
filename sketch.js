var x = 300, y = 563; //objeto
var xd = 0, yd = 0; //disparo
var estadoDisparo = false;
var vidas = 15; //quantidade de vidas iniciais
var pontos = 0; //quantidade de pontos iniciais
var dificuldade = 1; //nível inicial
var raioJ = 25, raioO = 25, raioD = 5; //raios da ellipse jogador, obstáculos e disparo
var larguraT = 600, alturaT = 600;
var img1, img2, img3, img4, img5, img6, img7, img8, img9;
var hp, obs1, obs2, obs3, obs4, obs5;
var vetorX = [], vetorY = [], vetorV = [];
//vetores coordenadas X e Y, vetor velocidade dos obstáculos
var qtdDeElementos = 10;
var i;
var barreiraDePontos = 200;
var tela = 1;
var musica;

function setup() {  
  createCanvas(larguraT, alturaT);
  //criar uma área de desenho 600x600
  caracteristicasObstaculos ();
  Som();
}
function draw() { 
  Telas();
}

//criando e movimentando os obstáculos
function Obstaculos(){
  for (i = 0; i<qtdDeElementos; i++){
    if (dificuldade == 1){
    image(obs1,vetorX[i]-30,vetorY[i]-30,65,65); 
    }
    if (dificuldade == 2){
    image(obs2,vetorX[i]-30,vetorY[i]-40,70,65); 
    }
    if (dificuldade == 3){
    image(obs3,vetorX[i]-33,vetorY[i]-30,65,65); 
    }
    if (dificuldade == 4){
    image(obs4,vetorX[i]-30,vetorY[i]-30,65,65); 
    }
    if (dificuldade == 5){
    image(obs5,vetorX[i]-30,vetorY[i]-30,65,65); 
    }
    //ellipse(vetorX[i], vetorY[i], 2*raioO, 2*raioO);//criar uma ellipse (posição-corresponde à coordenada x, , posição-corresponde à coordenada y,tamanho) - obstáculos
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
    x = 31;
  }
  
  if(y >563){ //limite da parte inferior para o jogador
    y = 563;
  }
  
  if(x > 565){ 
    x = 560;
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
          vetorX[i] = random (25, 575);
          vetorY[i] = random (-600, 0);
      }
    }else if(dificuldade == 2){
      vetorY[i] = vetorY[i] + 1.3*vetorV[i]; //mudança de velocidade em cada nível
      if (vetorY[i]>600){
          vetorX[i] = random (25, 575);
          vetorY[i] = random (-600, 0);
      }
    }else if(dificuldade == 3){
      vetorY[i] = vetorY[i] + 1.5*vetorV[i];
      if (vetorY[i]>600){
          vetorX[i] = random (25, 575);
          vetorY[i] = random (-600, 0);
      }
    }else if(dificuldade == 4){
      vetorY[i] = vetorY[i] + 1.7*vetorV[i];
      if (vetorY[i]>600){
          vetorX[i] = random (25, 575);
          vetorY[i] = random (-600, 0);
      }
    }else if(dificuldade == 5){
      vetorY[i] = vetorY[i] + 2*vetorV[i];
      if (vetorY[i]>600){
          vetorX[i] = random (25, 575);
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
    if (dificuldade == 1){
    image(disp1,xd-15,yd-15,30,30);
    }
    if (dificuldade == 2){
    image(disp2,xd-71,yd-15,130,90); 
    }
    if (dificuldade == 3){
    image(disp3,xd-13,yd-13,20,40); 
    }
    if (dificuldade == 4 || dificuldade == 5){
    image(dispf,xd-15,yd-15,30,30); 
    }
    //ellipse(xd, yd, 2*raioD, 2*raioD); //criação do disparo
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
  if (vidas==0){ 
    tela = 4
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

//características
function caracteristicasObstaculos (){
  for(i = 0; i<qtdDeElementos; i++){
    vetorX[i] = random (25, 575);
    vetorY[i] = random (-600, 0); 
    vetorV[i] = random (2,5); //velocidade
  }
}

//barreira de pontos para mudança de nível
function barreiraPontos (){
  if (pontos >= barreiraDePontos){
    dificuldade++;
    barreiraDePontos+=200;
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
    if (dificuldade > 5){
      background(img9);
    }
 }
  if (tela == 4){
    background(img8);
    fill(255);
    textSize(30);
    text("Total de pontos: " +pontos, 160, 580);
      if (keyIsDown(CONTROL)){
        x = 300;
        y = 563;
        xd = 0;
        yd = 0;
        vidas = 15; 
        pontos = 0;
        barreiraDePontos = 200;
        for (i = 0; i<qtdDeElementos;i++){
          vetorX[i] = random (25, 575);
          vetorY[i] = random (-600, 0);
          }
        dificuldade = 1;
        tela = 3;
    }
  }
}

//inserir imagem e som
function preload() {
  img1 = loadImage("figuras/tela1.jpg");
  img2 = loadImage("figuras/tela2.jpg");
  img3 = loadImage("figuras/tela3.jpg");
  img4 = loadImage("figuras/tela4.jpg");
  img5 = loadImage("figuras/tela5.jpg");
  img6 = loadImage("figuras/tela6.jpg");
  img7 = loadImage("figuras/tela7.jpg");
  img8 = loadImage("figuras/tela8.jpg");
  img9 = loadImage("figuras/tela9.jpg");
  obs1 = loadImage("figuras/obs1.png");
  obs2 = loadImage("figuras/obs2.png");
  obs3 = loadImage("figuras/obs3.png");
  obs4 = loadImage("figuras/obs4.png");
  obs5 = loadImage("figuras/obs5.png");
  disp1 = loadImage("figuras/disparo1.png");
  disp2 = loadImage("figuras/disparo2.png");
  disp3 = loadImage("figuras/disparo3.png");
  dispf = loadImage("figuras/disparof.png");
  hp = loadImage("figuras/harry.png");
  musica = loadSound("temahp.mp3");
}

//jogo
function Jogo(){
    image(hp, x-30, y-30, 70, 65);
    //ellipse(x, y, 2*raioJ, 2*raioJ); // criar uma elipse (posição-coordenada x, posição-coordenada y, largura, altura)
  
    //chamando as funções
    MovimentoObjeto();
    Disparo();
    RetornoLimites ();
    MovimentoObs();
    Colisao();
    barreiraPontos ();
    Obstaculos();
  
    //informações sobre o jogo
    textSize(23);
    fill(255);
    text('Vidas: '+vidas, 10, 30);
    text('Pontuação: ' +pontos, 230, 30);
    text('Nível: ' +dificuldade, 510, 30);
  
}

//som
function Som(){
  musica.setVolume(1.0);
  musica.loop();
}

