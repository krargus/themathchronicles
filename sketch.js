var tela = 1;
var questão = 1;
var xjogador =10;
var yjogador = 10;
var rjogador = 5;
var pulo = false;
var xmonster1 = 10;
var ymonster1 = 10;
var rmonster1 = 6;
var pontos = 0;
var vida = 3;
var vidaM = 3;
var largura = 190;
var altura = 40;
var xMenu = 160;
var yMenu1 = 120;
var yMenu2 = 160;
var yMenu3 = 100;
var tempo = 0;
var contador = 0;
var head;
let rate = 20;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
var linku1D = []
var linku1E = []
var linku2D = []
var linku2E = []
var linkuJD = []
var monster1 = []
var monster2;
var monster3;
var monster4;
let myfont;
function preload() {
  img1 = loadImage('menuimg.gif');
  img2 = loadImage('int.gif');
  img3 = loadImage('front_monster-removebg-preview.png');
  img4 = loadImage('maxresdefault.png');
  img5 = loadImage('gameover.gif');
  img7 = loadImage('st01.gif');
  img8 = loadImage('Xg+Ruo.png');
  img9 = loadImage('825L (1).gif');
  img10= loadImage('castle01.jpg');
  img11= loadImage('Xucp (1).gif');
  img12= loadImage('Castle4.jpg');
  img13=loadImage('c7c6e02f08c9f741676e6c6b3788d5e0.png');
  myfont = loadFont('PixelOperator.ttf');
  linku1D[0] = loadImage('LINKUD_01D.png');
  linku1D[1] = loadImage('LINKUD_02D.png');
  linku1D[2] = loadImage('LINKUD_03D.png');
  linku2D[0] = loadImage('LINKUDR00.png');
  linku2D[1] = loadImage('LINKUDR01.png');
  linku2D[2] = loadImage('LINKUDR02.png');
  linku2D[3] = loadImage('LINKUDR03.png');
  linku2D[4] = loadImage('LINKUDR04.png');
  linku2D[5] = loadImage('LINKUDR05.png');
  linku2D[6] = loadImage('LINKUDR06.png');
  linku2D[7] = loadImage('LINKUDR07.png');
  linku2D[8] = loadImage('LINKUDR08.png');
  linku2D[9] = loadImage('LINKUDR09.png');
  head = loadImage('head.png');
  linku1E[0] = loadImage('LINKUE_02E.png');
  linku1E[1] = loadImage('LINKUE_03E.png');
  linku1E[2] = loadImage('LINKUE_01E.png');
  linku2E[0] = loadImage('LINKUER00.png');
  linku2E[1] = loadImage('LINKUER01.png');
  linku2E[2] = loadImage('LINKUER02.png');
  linku2E[3] = loadImage('LINKUER03.png');
  linku2E[4] = loadImage('LINKUER04.png');
  linku2E[5] = loadImage('LINKUER05.png');
  linku2E[6] = loadImage('LINKUER06.png');
  linku2E[7] = loadImage('LINKUER07.png');
  linku2E[8] = loadImage('LINKUER08.png');
  linku2E[9] = loadImage('LINKUER09.png');
  linkuJD[0] = loadImage('LINKUDJ00.png');
  linkuJD[1] = loadImage('LINKUDJ01.png');
  linkuJD[2] = loadImage('LINKUDJ02.png');
  monster1[0] = loadImage('sideEMonster1.png');
  monster1[1] = loadImage('front_monster-removebg-preview.png');
  monster1[2] = loadImage('sideDMonster1.png');
  monster2 = loadImage('monster2.gif');
  monster3 = loadImage('Necromancer00-unscreen.gif');
  monster4 = loadImage('arquimedes.gif');
  img6 = loadImage('200a002dad331dc9d5027bc45cf03f1d.png');
}
function setup() {
   createCanvas(480,270);
  frameRate(rate)
}
function draw() {
  textFont(myfont);
  tempo ++;
  //Menu
  if(tela==1){
    image(img1,0,0,480,270)
    textAlign(CENTER);
    textSize(40);
    //titulo
     stroke(200);
     fill(230,230);
     rect(xMenu-10,yMenu1-120,largura+10,altura+50,15);
     fill(255,215,0);
     stroke(20);
    text("THE MATH"+"\nCHRONICLES",250,30);
    //Menu1
    textSize(30);
     stroke(200);
     fill(230,30)
     rect(xMenu,yMenu1+4,largura,altura,15);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
     stroke(255);
     fill(230,23);
     rect(xMenu,yMenu1+4,largura,altura,15);
      if (mouseIsPressed) {
        tela = 3
      }
}
    fill(255,215,0);
    stroke(20);
    text("Iniciar",250,150);
    
    //Menu2
    textSize(30);
     stroke(200);
     fill(230,23);
     rect(xMenu,yMenu2+8,largura,altura,15)
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
     stroke(255);
     fill(230,23);
     rect(xMenu,yMenu2+8,largura,altura,15);
      if (mouseIsPressed) {
        tela = 2
      }
}
    fill(255,215,0);
    stroke(20);
    text("Informações",250,190);
    
}
  //Instruções
  else if (tela==2){
    image(img2,0,0,480,270)
    textAlign(CENTER);
    textSize(26);
    
    //Voltar
     stroke(200);
     fill(230,23);
     rect(xMenu-160,yMenu2-160,largura,altura,15)
        if(mouseX > (xMenu-160)  && mouseX < (xMenu-160) + largura && mouseY > (yMenu2-160) && mouseY < (yMenu2-160) + altura){
     stroke(255);
     fill(230,23);
     rect(xMenu-160,yMenu2-160,largura,altura,15);
      if (mouseIsPressed) {
        tela = 1
      }
}
    fill(255,215,0);
    stroke(20);
    text("Voltar",90,30);
    //INFOS
    stroke(200);
    fill(230,230);
    rect(xMenu+80,yMenu1-80,largura+30,altura+130,15);
    
    fill(255,215,0);
    stroke(20);
    text("Pular = W"+"\nIr para frente = D"+"\nIr para trás = A"+"\nSelecione a resposta \n correta para atacar",350,60);  
   image(img3,75,100,100,100)
    //Cuidado!
    fill(255,215,0);
    stroke(20);
    text("Cuidado!",130,230);
  }
  //story 01
  else if(tela==3){
    image(img7,0,0,480,270);
    textAlign(CENTER);
    textSize(23);
    
    //story
    fill(255,0,0);
    stroke(0);
    text("Em uma floresta chamda Hydyou vivia um "+"\nmatemático chamado Arquimedes que"+"\nprotegia a floresta. Sumido há mais de 100 anos"+"\napareceram na floresta criaturas malignas "+"e\no unico modo de lutar contra é usando a matemática.",240,30);
    textSize(30);
    fill(255,0,0);
    stroke(0);
    text("SALVE A FLORESTA AVENTUREIRO",240,190)
    
    //aviso de key
    textSize(23);
    fill(255,215,0);
    stroke(0);
    text("Aperte ENTER para continuar",240,250);
      if(keyCode == 13){
     tela = 4;
  }
    
  }
  //the game FASE01
  else if (tela==4){
    textAlign(CENTER)
    textSize(20)
    image(img4,0,0,480,270);
    image(head,10,10,30,20);
    //vida
    fill(255,215,0);
    stroke(20);
    text("X"+vida,50,27);
        if(vida == 0){
      tela = 12
    }
        if(vidaM==0){
      tela= tela+1;
    }
    //pontos
    fill(255,215,0);
    stroke(20);
    text("Pontos: "+pontos,400,27);   
    //rect de colisão LINKU
       if(mouseX > (xjogador+20) && mouseX < (xjogador+20) + (6*rjogador) && mouseY > (yjogador+217) && mouseY < (yjogador+217) + (5*rjogador)){
     stroke(200);
     fill(230,23);
     rect(xjogador+20,yjogador+217,6*rjogador,5*rjogador,15);
}
    //Monstro1
image(monster1[contador%3],xmonster1+310,ymonster1+200,largura-100,altura)
      if(tempo>10) {
     contador++;
     tempo=0;
    
  }
    //rect monstro1
     if (mouseX > (xmonster1+310) && mouseX< (xmonster1+310) + (largura-100) && mouseY > (ymonster1+200) && mouseY < (ymonster1+200) + (altura) ){
              stroke(200);
     fill(230,23);
     rect(xmonster1+326,ymonster1+200,10*rmonster1,8*rmonster1,15);
         }
    //colisão
if(dist(xmonster1+326,ymonster1+200,xjogador+20,yjogador+217) < (6*rmonster1+3*rjogador)) {
      if(questão == 1){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "x^2=16"+"\nx=?",225,50);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-85) && mouseX < (xMenu-85) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM-1;
        questão = questão+1;
      }
}
    fill(255,215,0);
    stroke(20);
    text("4",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+45)&&mouseX<(xMenu+45)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("8",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("6",360,120);
    }
      if(questão == 2){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "x^2=100"+"\nx=?",225,50);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-65,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-65) && mouseX < (xMenu-65) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,230);
     rect(xMenu-65,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida -1
        pontos = pontos - 500;
      }
       
}
    fill(255,215,0);
    stroke(20);
    text("20",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+65,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+65)&&mouseX<(xMenu+65)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+65,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("50",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+200,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+200) && mouseX < (xMenu+200) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+200,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM-1;
        questão = questão +1
      }
}
    fill(255,215,0);
    stroke(20);
    text("10",360,120);
    }
      if(questão == 3){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text("10x^2=40"+"\nx=?",225,50);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-85) && mouseX < (xMenu-85) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,230);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
      xjogador = 10;
        vidaM = vidaM-1;
        questão = questão + 1;
      }  
}
    fill(255,215,0);
    stroke(20);
    text("2",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+45)&&mouseX<(xMenu+45)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1
        pontos = pontos - 500
      }
}
    fill(255,215,0);
    stroke(20);
    text("20",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida -1
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("4",360,120);
    }

  }
  if(keyCode === 68){
      if (keyIsPressed === true) {
    xjogador = xjogador + 10;                                        image(linku2D[contador%10],xjogador,yjogador+220,largura-130,altura-20);
  if(tempo>1) {
     contador++;
     tempo=0;
  }      
      }
        else{         image(linku1D[contador%3],xjogador,yjogador+220,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
}
  if(keyCode === 65){
   if (keyIsPressed === true) {
    xjogador = xjogador - 10;                                        image(linku2E[contador%10],xjogador,yjogador+220,largura-130,altura-20);
  if(tempo>1) {
     contador++;
     tempo=0;
  }      
      }
        else{         image(linku1E[contador%3],xjogador,yjogador+220,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
  }
  if(keyCode === 87){                  image(linku1D[contador%3],xjogador,yjogador+220,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
  }
       else{   image(linku1D[contador%3],xjogador,yjogador+220,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
       }                            
  if(keyCode == 87&&pulo==false){   
  if(tempo>10) {
     contador++;
     tempo=0;
  } 
    if (keyIsPressed === true){
      pulo = true;
    gravidade = -8;
    }
    
  }
    if(pulo==true){
    yjogador += gravidade;
    gravidade += 1;
    if(yjogador >= 10){
      pulo = false
      yjogador =10
    }
  }
  }
  //story 02
  else if(tela==5){
    image(img6,0,0,480,270);
    textAlign(CENTER);
    textSize(23);
    
    //story
    fill(255,215,0);
    stroke(0);
    text("Assim que o aventureiro sai da floresta \ná vista castelo tenebroso,sabendo\nassim que o mal que habita a floresta está lá.",240,30);
    fill(255,215,0);
    stroke(0);
    text("O aventureiro segue em direção ao castelo.",240,200)
    //aviso de key
    textSize(23);
    fill(255,215,0);
    stroke(0);
    text("Aperte ENTER para continuar",240,250);
      if(keyCode == 13){
        tela = 6;
        vidaM= vidaM+3;
  }  
  }
  //the game FASE 02
  else if (tela==6){
    textAlign(CENTER)
    textSize(20)
    image(img8,0,0,480,270);
    image(head,10,10,30,20);
    //vida
    fill(255,215,0);
    stroke(20);
    text("X"+vida,50,27);
        if(vida == 0){
      tela = 12
    }
        if(vidaM==0){
      tela = tela + 1;
    }
    //pontos
    fill(255,215,0);
    stroke(20);
    text("Pontos: "+pontos,400,27); 
    //rect de colisão LINKU
       if(mouseX > (xjogador+20) && mouseX < (xjogador+20) + (6*rjogador) && mouseY > (yjogador+217) && mouseY < (yjogador+217) + (5*rjogador)){
     stroke(200);
     fill(230,23);
     rect(xjogador+20,yjogador+217,6*rjogador,5*rjogador,15);
}
    //Monstro1
image(monster2,xmonster1+310,ymonster1+150,largura-70,altura+70)
      if(tempo>10) {
     contador++;
     tempo=0;
    
  }
    //rect monstro1
     if (mouseX > (xmonster1+310) && mouseX< (xmonster1+310) + (largura-100) && mouseY > (ymonster1+200) && mouseY < (ymonster1+200) + (altura) ){
              stroke(200);
     fill(230,23);
     rect(xmonster1+326,ymonster1+200,10*rmonster1,8*rmonster1,15);
         }
    //colisão
if(dist(xmonster1+326,ymonster1+200,xjogador+20,yjogador+217) < (6*rmonster1+3*rjogador)) {
      if(questão == 4){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "x+4-7=1"+"\nx=?",225,50);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-85) && mouseX < (xMenu-85) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500
      }
}
    fill(255,215,0);
    stroke(20);
    text("8",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+45)&&mouseX<(xMenu+45)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM - 1;
        questão = questão + 1;
      }
}
    fill(255,215,0);
    stroke(20);
    text("4",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("3",360,120);
    }
      if(questão == 5){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "x^2-9+5=0"+"\nx=?",225,50);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-65,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-65) && mouseX < (xMenu-65) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,230);
     rect(xMenu-65,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida -1;
        pontos = pontos  - 500;
      }
       
}
    fill(255,215,0);
    stroke(20);
    text("-+6",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+65,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+65)&&mouseX<(xMenu+65)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+65,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+4",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+200,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+200) && mouseX < (xMenu+200) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+200,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM - 1;
        questão = questão +1;
        
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+2",360,120);
    }
      if(questão == 6){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "2x^2+89-507=0"+"\nx=?",225,50);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-85) && mouseX < (xMenu-85) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,230);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        xjogador = 10;
        vidaM = vidaM - 1;
        questão = questão +1;
      }  
}
    fill(255,215,0);
    stroke(20);
    text("-+raiz 209",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+45)&&mouseX<(xMenu+45)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1
        pontos = pontos - 500
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+raiz 200",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida -1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+raiz 259",360,120);
    }

  }
  if(keyCode === 68){
      if (keyIsPressed === true) {
    xjogador = xjogador + 10;                                        image(linku2D[contador%10],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>1) {
     contador++;
     tempo=0;
  }      
      }
        else{         image(linku1D[contador%3],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
}
  if(keyCode === 65){
   if (keyIsPressed === true) {
    xjogador = xjogador - 10;                                        image(linku2E[contador%10],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>1) {
     contador++;
     tempo=0;
  }      
      }
        else{         image(linku1E[contador%3],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
  }
  if(keyCode === 87){                  image(linku1D[contador%3],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
  }
       else{   image(linku1D[contador%3],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
       }                            
  if(keyCode == 87&&pulo==false){   
  if(tempo>10) {
     contador++;
     tempo=0;
  } 
    if (keyIsPressed === true){
      pulo = true;
    gravidade = -8;
    }
    
  }
    if(pulo==true){
    yjogador += gravidade;
    gravidade += 1;
    if(yjogador >= 10){
      pulo = false
      yjogador =10
    }
  }
  }
  //story 03
  else if(tela==7){
    image(img9,0,0,480,270);
    textAlign(CENTER);
    textSize(23);
    
    //story
    fill(255,0,0);
    stroke(0);
    text("Ao chegar perto do castelo tenebroso,\no aventureiro percebe o quanto é perigoso\ne assustador aquele lugar.",240,30);
    textSize(23);
    fill(255,0,0);
    stroke(0);
    text("A porta abre  e o aventureiro adentra o castelo.",240,190)
    
    //aviso de key
    textSize(23);
    fill(255,215,0);
    stroke(0);
    text("Aperte ENTER para continuar",240,250);
      if(keyCode == 13){
     tela = 8;
     vidaM =3;
     vida = 3;
  }  
  }
  //the game FASE03
  else if (tela==8){
    textAlign(CENTER)
    textSize(20)
    image(img10,0,0,480,270);
    image(head,10,10,30,20);
    //vida
    fill(255,215,0);
    stroke(20);
    text("X"+vida,50,27);
        if(vida == 0){
      tela = 12
    }
        if(vidaM ==0){
          tela = tela + 1
        }
    //pontos
    fill(255,215,0);
    stroke(20);
    text("Pontos: "+pontos,400,27);  
    //rect de colisão LINKU
       if(mouseX > (xjogador+20) && mouseX < (xjogador+20) + (6*rjogador) && mouseY > (yjogador+217) && mouseY < (yjogador+217) + (5*rjogador)){
     stroke(200);
     fill(230,23);
     rect(xjogador+20,yjogador+217,6*rjogador,5*rjogador,15);
}
    //Monstro3
image(monster3,xmonster1+370,ymonster1+100,largura-60,altura+70)
    //rect monstro1
     if (mouseX > (xmonster1+400) && mouseX< (xmonster1+400) + (largura-100) && mouseY > (ymonster1+150) && mouseY < (ymonster1+150) + (altura) ){
              stroke(200);
     fill(230,23);
     rect(xmonster1+400,ymonster1+150,10*rmonster1,8*rmonster1,15);
         }
    //colisão
if(dist(xmonster1+400,ymonster1+150,xjogador+20,yjogador+217) < (6*rmonster1+3*rjogador)) {
      if(questão == 7){
    textSize(15);
    stroke(255,215,0);
    fill(230,23);
    triangle(190,8,190,40,270,40);
    text("6",230,56);
    text("x",230,17);
    text("8",180,30);
        textSize(30);
        text("x?",230,80)
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-85) && mouseX < (xMenu-85) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("13",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+45)&&mouseX<(xMenu+45)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM - 1;
        questão = questão + 1;
      }
}
    fill(255,215,0);
    stroke(20);
    text("10",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("16",360,120);
    }
      if(questão == 8){
    textSize(15);
    stroke(255,215,0);
    fill(230,23);
    triangle(190,8,190,40,270,40);
    text("20",230,56);
    text("x",230,17);
    text("15",180,30);
    textSize(30);
    text("x?",230,80);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-65,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-65) && mouseX < (xMenu-65) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,230);
     rect(xMenu-65,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida -1
        pontos = pontos - 500;
      }
       
}
    fill(255,215,0);
    stroke(20);
    text("20",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+65,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+65)&&mouseX<(xMenu+65)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+65,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM - 1;
        questão = questão +1;
      }
}
    fill(255,215,0);
    stroke(20);
    text("25",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+200,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+200) && mouseX < (xMenu+200) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+200,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida-1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("30",360,120);
    }
      if(questão == 9){
    textSize(15);
    stroke(255,215,0);
    fill(230,23);
    triangle(190,8,190,40,270,40);
    text("(200.2)",230,56);
    text("x",230,17);
    text("(150.2)",172,30);
    textSize(30);
    text("x?",230,80)
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-85) && mouseX < (xMenu-85) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,230);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        xjogador = 10;
        vidaM = vidaM - 1;
        questão = questão +1;
      }  
}
    fill(255,215,0);
    stroke(20);
    text("500",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+45)&&mouseX<(xMenu+45)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1
        pontos = pontos - 500
      }
}
    fill(255,215,0);
    stroke(20);
    text("350",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida -1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("250",360,120);
    }

  }
  if(keyCode === 68){
      if (keyIsPressed === true) {
    xjogador = xjogador + 10;                                        image(linku2D[contador%10],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>1) {
     contador++;
     tempo=0;
  }      
      }
        else{         image(linku1D[contador%3],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
}
  if(keyCode === 65){
   if (keyIsPressed === true) {
    xjogador = xjogador - 10;                                        image(linku2E[contador%10],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>1) {
     contador++;
     tempo=0;
  }      
      }
        else{         image(linku1E[contador%3],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
  }
  if(keyCode === 87){                  image(linku1D[contador%3],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
  }
       else{   image(linku1D[contador%3],xjogador,yjogador+230,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
       }                            
  if(keyCode == 87&&pulo==false){   
  if(tempo>10) {
     contador++;
     tempo=0;
  } 
    if (keyIsPressed === true){
      pulo = true;
    gravidade = -8;
    }
    
  }
    if(pulo==true){
    yjogador += gravidade;
    gravidade += 1;
    if(yjogador >= 10){
      pulo = false
      yjogador =10
    }
  }
}
  //story 04
  else if(tela==9){
    image(img12,0,0,480,270);
    textAlign(CENTER);
    textSize(23);
    
    //story
    fill(255,215,0);
    stroke(0);
    text("Após de derrotar vários montros\n o aventureiro se via cansado naquele castelo,\nouvindo uma voz estranha vindo de uma sala proxima\nfoi investigar o que era.",240,30);
    textSize(30);
    fill(255,0,0);
    stroke(0);
    text("Lá estava a fonte de todo o mal",240,190)
    
    //aviso de key
    textSize(23);
    fill(255,215,0);
    stroke(0);
    text("Aperte ENTER para continuar",240,250);
      if(keyCode == 13){
     tela = 10;
        vidaM = 6;
        vida = vida + 1;
  }  
  }
  //the game FASEBOSS
  else if (tela==10){
    textAlign(CENTER)
    textSize(20)
    image(img13,0,0,480,270);
    image(head,10,10,30,20);
    //vida
    fill(255,215,0);
    stroke(20);
    text("X"+vida,50,27);
        if(vida == 0){
      tela = 11
    }
        if(vidaM==0){
           tela = tela +1;
    }
    //pontos
    fill(255,215,0);
    stroke(20);
    text("Pontos: "+pontos,400,27);  
    //rect de colisão LINKU
       if(mouseX > (xjogador+20) && mouseX < (xjogador+20) + (6*rjogador) && mouseY > (yjogador+200) && mouseY < (yjogador+200) + (5*rjogador)){
     stroke(200);
     fill(230,23);
     rect(xjogador+20,yjogador+200,6*rjogador,5*rjogador,15);
}
    //Monstro3
image(monster4,xmonster1+137,ymonster1+60,largura,altura+70)
    //rect monstro1
     if (mouseX > (xmonster1+200) && mouseX< (xmonster1+200) + (largura-100) && mouseY > (ymonster1+100) && mouseY < (ymonster1+100) + (altura) ){
              stroke(200);
     fill(230,23);
     rect(xmonster1+200,ymonster1+100,10*rmonster1,8*rmonster1,15);
         }
    //colisão
if(dist(xmonster1+200,ymonster1+100,xjogador+20,yjogador+200) < (7*rmonster1+5*rjogador)) {
      if(questão == 10){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "x^2=81"+"\nx=?",225,50);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-85) && mouseX < (xMenu-85) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM-1;
        questão = questão+1;
      }
}
    fill(255,215,0);
    stroke(20);
    text("9",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+45)&&mouseX<(xMenu+45)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("8",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("41",360,120);
    }
      if(questão == 11){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "30x^2=750"+"\nx=?",225,50);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-65,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-65) && mouseX < (xMenu-65) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,230);
     rect(xMenu-65,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida -1
        pontos = pontos - 500;
      }
       
}
    fill(255,215,0);
    stroke(20);
    text("7",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+65,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+65)&&mouseX<(xMenu+65)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+65,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("6",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+200,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+200) && mouseX < (xMenu+200) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+200,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM-1;
        questão = questão +1
      }
}
    fill(255,215,0);
    stroke(20);
    text("5",360,120);
    }
      if(questão == 12){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "2x+10-11=3"+"\nx=?",225,50);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-85) && mouseX < (xMenu-85) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500
      }
}
    fill(255,215,0);
    stroke(20);
    text("4",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+45)&&mouseX<(xMenu+45)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM - 1;
        questão = questão + 1;
      }
}
    fill(255,215,0);
    stroke(20);
    text("2",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("3",360,120);
    }
      if(questão == 13){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "x^2-64=0"+"\nx=?",225,50);
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-65,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-65) && mouseX < (xMenu-65) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,230);
     rect(xMenu-65,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida -1;
        pontos = pontos  - 500;
      }
       
}
    fill(255,215,0);
    stroke(20);
    text("-+6",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+65,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+65)&&mouseX<(xMenu+65)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+65,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+4",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+200,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+200) && mouseX < (xMenu+200) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+200,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM - 1;
        questão = questão +1;
        
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+8",360,120);
    }
      if(questão == 14){
    textSize(15);
    stroke(255,215,0);
    fill(230,23);
    triangle(190,8,190,40,270,40);
    text("60",230,56);
    text("x",230,17);
    text("80",172,30);
    textSize(30);
    text("x?",230,80)
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-85) && mouseX < (xMenu-85) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,230);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM - 1;
        questão = questão +1;
      }  
}
    fill(255,215,0);
    stroke(20);
    text("100",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+45)&&mouseX<(xMenu+45)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1
        pontos = pontos - 500;
        
      }
}
    fill(255,215,0);
    stroke(20);
    text("40",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida -1
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("50",360,120);
    }
      if(questão == 15){
    textSize(15);
    stroke(255,215,0);
    fill(230,23);
    triangle(190,8,190,40,270,40);
    text("5",230,56);
    text("x",230,17);
    text("12",180,30);
        textSize(30);
        text("x?",230,80)
      //Respostas 01
     stroke(200);
     fill(255,215,0);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
     if(mouseX > (xMenu-85) && mouseX < (xMenu-85) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu-85,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("23",90,120);
      //Resposta 02
     stroke(200);
     fill(255,215,0);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
  if(mouseX >(xMenu+45)&&mouseX<(xMenu+45)+ (largura-180)&&mouseY>(yMenu1-26)&&mouseY<(yMenu1-26)+(altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        pontos = pontos + 1000;
        vidaM = vidaM - 1;
      }
}
    fill(255,215,0);
    stroke(20);
    text("13",225,120);
      //Resposta 03
     stroke(200);
     fill(255,215,0);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-180) && mouseY > (yMenu1-26) && mouseY < (yMenu1-26) + (altura-35)){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-26,largura-180,altura-35);
      if (mouseIsPressed) {
        vida = vida - 1;
        pontos = pontos - 500;
      }
}
    fill(255,215,0);
    stroke(20);
    text("24",360,120);
    }
  }
  if(keyCode === 68){
      if (keyIsPressed === true) {
    xjogador = xjogador + 10;                                        image(linku2D[contador%10],xjogador,yjogador+205,largura-130,altura-20);
  if(tempo>1) {
     contador++;
     tempo=0;
  }      
      }
        else{         image(linku1D[contador%3],xjogador,yjogador+205,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
}
  if(keyCode === 65){
   if (keyIsPressed === true) {
    xjogador = xjogador - 10;                                        image(linku2E[contador%10],xjogador,yjogador+205,largura-130,altura-20);
  if(tempo>1) {
     contador++;
     tempo=0;
  }      
      }
        else{         image(linku1E[contador%3],xjogador,yjogador+205,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
  }
  if(keyCode === 87){                  image(linku1D[contador%3],xjogador,yjogador+205,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
  }
       else{   image(linku1D[contador%3],xjogador,yjogador+205,largura-130,altura-20);
  if(tempo>5) {
     contador++;
     tempo=0;
    
  }
    
  }
       }                            
  if(keyCode == 87&&pulo==false){   
  if(tempo>10) {
     contador++;
     tempo=0;
  } 
    if (keyIsPressed === true){
      pulo = true;
    gravidade = -8;
    }
    
  }
    if(pulo==true){
    yjogador += gravidade;
    gravidade += 1;
    if(yjogador >= 10){
      pulo = false
      yjogador =10
    }
  }
  }
  //Creditos
  else if (tela==11){
    //text principal
    image(img11,0,0,480,270);
    textSize(50);
    textAlign(CENTER);
    fill(255,215,0);
    stroke(20);
    text("PARABÉNS",240,50);
    textSize(15);
    text("Você salvou a floresta",240,70);
    //Creditos
    text("Game by:\nPedro Victor(Krargus)\nSound by: \nHugo Bezerra",410,150)
    
        //highscore
    textSize(20);
    fill(255,215,0);
    text("PONTUÇÃO:"+pontos,240,100);
    
    //voltar
         stroke(200);
     fill(230,23);
     rect(xMenu-158,yMenu2+60,largura,altura,15)
        if(mouseX > (xMenu-158) && mouseX < (xMenu-158) + largura && mouseY > (yMenu2+60) && mouseY < (yMenu2+60) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu-158,yMenu2+60,largura,altura,15);
        if (mouseIsPressed) {
        tela = 1;
          vida = 3;
          pontos = 0;
          questão = 1;
          xjogador = 10;
          vidaM = 3;
    }          
}
         textSize(30);
     fill(255,215,0);
     stroke(20);
     text("Menu",90,247)
  }
  //GAME OVER
  else if (tela==12){
    image(img5,0,0,480,270);
    textAlign(CENTER);
    textSize(90);
    fill(255,0,0);
    stroke(20);
    text("GAME OVER",240,70);
    
    //highscore
    textSize(20);
    fill(255,215,0);
    text("PONTUÇÃO:"+pontos,240,100)
    
    //Tentar de NOVO
     stroke(200);
     fill(230,23);
     rect(xMenu+120,yMenu2+60,largura,altura,15)
        if(mouseX > (xMenu+120) && mouseX < (xMenu+120) + largura && mouseY > (yMenu2+60) && mouseY < (yMenu2+60) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu+120,yMenu2+60,largura,altura,15);
        if (mouseIsPressed) {
        tela = 1;
          vida = vida + 3;
          pontos = 0;
          questão = 1;
          xjogador = 10;
          vidaM = 3;
    }          
}
         textSize(30);
     fill(255,215,0);
     stroke(20);
     text("Menu",370,247)
  }
}