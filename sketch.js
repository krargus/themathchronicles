var tela = 4;
var questão = 1;
var xjogador =10;
var yjogador = 10;
var rjogador = 5;
var xmonster1 = 10;
var ymonster1 = 10;
var rmonster1 = 6;
var pontos = 0;
var barreira = 2999;
var highscore = pontos;
var vida = 3;
var largura = 190;
var altura = 40;
var xMenu = 160;
var yMenu1 = 120;
var yMenu2 = 160;
var yMenu3 = 100;
var tempo = 0;
var contador = 0;
var head;
let rate = 12;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
var linku1D = []
var linku1E = []
var monster1 = []
let myfont;
function preload() {
  img1 = loadImage('menuimg.gif');
  img2 = loadImage('int.gif');
  img3 = loadImage('front_monster-removebg-preview.png');
  img4 = loadImage('maxresdefault.png');
  img5 = loadImage('gameover.gif');
  myfont = loadFont('PixelOperator.ttf');
  linku1D[0] = loadImage('LINKUD_01D.png');
  linku1D[1] = loadImage('LINKUD_02D.png');
  linku1D[2] = loadImage('LINKUD_03D.png');
  head = loadImage('head.png');
  linku1E[0] = loadImage('LINKUE_02E.png');
  linku1E[1] = loadImage('LINKUE_03E.png');
  linku1E[2] = loadImage('LINKUE_01E.png');
  monster1[0] = loadImage('sideEMonster1.png');
  monster1[1] = loadImage('front_monster-removebg-preview.png');
  monster1[2] = loadImage('sideDMonster1.png');
  img6 = loadImage('200a002dad331dc9d5027bc45cf03f1d.png');
}
function setup() {
   createCanvas(480,270);
  frameRate(rate)
   pulo = yjogador
   
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
     fill(230,23);
     rect(xMenu,yMenu1+4,largura,altura,15);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
     stroke(200);
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
     stroke(200);
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
     stroke(200);
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
    rect(xMenu+80,yMenu1-80,largura+30,altura+100,15);
    
    fill(255,215,0);
    stroke(20);
    text("Pular = W"+"\nIr para frente = D"+"\nIr para trás = A"+"\nAtacar=BT esq.mouse",350,60);  
   image(img3,75,100,100,100)
    //Cuidado!
    fill(255,215,0);
    stroke(20);
    text("Cuidado!",130,230);
  }
  //the game FASE01
  else if (tela==3){
    textAlign(CENTER)
    textSize(20)
    image(img4,0,0,480,270);
    image(head,10,10,30,20);
    //vida
    fill(255,215,0);
    stroke(20);
    text("X"+vida,50,27);
    if(vida == 0){
      tela = 6
    }
    //pontos
    fill(255,215,0);
    stroke(20);
    text("Pontos: "+pontos,400,27);
    if (pontos > barreira){
      tela = tela + 1
    }
      
    
    
    //LINKU
    image(linku1D[contador%3],xjogador,yjogador+220,largura-130,altura-20);
  if(tempo>10) {
     contador++;
     tempo=0;
    
  }
    //rect de colisão LINKU
       if(mouseX > (xjogador+20) && mouseX < (xjogador+20) + (6*rjogador) && mouseY > (yjogador+217) && mouseY < (yjogador+217) + (5*rjogador)){
     stroke(200);
     fill(230,23);
     rect(xjogador+20,yjogador+217,6*rjogador,5*rjogador,15);
}
    //Monstro1
    image(monster1[contador%3],xmonster1+310,ymonster1+200,largura-100,altura)
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
      text( "x+4-7=1"+"\nx=?",225,50);
      //Respostas 01
     if(mouseX > (xMenu-90) && mouseX < (xMenu-90) + (largura-150) && mouseY > (yMenu1-30) && mouseY < (yMenu1-30) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu-90,yMenu1-30,largura-150,altura,15);
      if (mouseIsPressed) {
        pontos = pontos + 1000
      }
}
    fill(255,215,0);
    stroke(20);
    text("4",90,120);
      //Resposta 02
           if(mouseX > (xMenu+45) && mouseX < (xMenu+45) + (largura-150) && mouseY > (yMenu1-30) && mouseY < (yMenu1-30) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-30,largura-150,altura,15);
      if (mouseIsPressed) {
        vida = vida - 1
      }
}
    fill(255,215,0);
    stroke(20);
    text("8",225,120);
      //Resposta 03
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-150) && mouseY > (yMenu1-30) && mouseY < (yMenu1-30) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-30,largura-150,altura,15);
      if (mouseIsPressed) {
        vida = vida - 1
      }
}
    fill(255,215,0);
    stroke(20);
    text("3",360,120);
        if(pontos>999){
          questão = 2
        }
    }
      if(questão == 2){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "x^2-9+5=0"+"\nx=?",225,50);
      //Respostas 01
     if(mouseX > (xMenu-90) && mouseX < (xMenu-90) + (largura-150) && mouseY > (yMenu1-30) && mouseY < (yMenu1-30) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu-90,yMenu1-30,largura-150,altura,15);
      if (mouseIsPressed) {
        vida = vida -1
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+6",90,120);
      //Resposta 02
           if(mouseX > (xMenu+45) && mouseX < (xMenu+45) + (largura-150) && mouseY > (yMenu1-30) && mouseY < (yMenu1-30) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-30,largura-150,altura,15);
      if (mouseIsPressed) {
        vida = vida - 1
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+4",225,120);
      //Resposta 03
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-150) && mouseY > (yMenu1-30) && mouseY < (yMenu1-30) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-30,largura-150,altura,15);
      if (mouseIsPressed) {
        pontos = pontos + 1000
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+2",360,120);
        if(pontos>1999){
          questão = 3
        }
    }
      if(questão == 3){
      textSize(30)
      fill(255,215,0);
      stroke(20);
      text( "2x^2+89-507"+"\nx=?",225,50);
      //Respostas 01
     if(mouseX > (xMenu-90) && mouseX < (xMenu-90) + (largura-150) && mouseY > (yMenu1-30) && mouseY < (yMenu1-30) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu-90,yMenu1-30,largura-150,altura,15);
      if (mouseIsPressed) {
        pontos = pontos + 1000
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+raiz 209",90,120);
      //Resposta 02
           if(mouseX > (xMenu+45) && mouseX < (xMenu+45) + (largura-150) && mouseY > (yMenu1-30) && mouseY < (yMenu1-30) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu+45,yMenu1-30,largura-150,altura,15);
      if (mouseIsPressed) {
        vida = vida -1
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+raiz 200",225,120);
      //Resposta 03
      if(mouseX > (xMenu+180) && mouseX < (xMenu+180) + (largura-150) && mouseY > (yMenu1-30) && mouseY < (yMenu1-30) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu+180,yMenu1-30,largura-150,altura,15);
      if (mouseIsPressed) {
        vida = vida -1
      }
}
    fill(255,215,0);
    stroke(20);
    text("-+raiz 259",360,120);
    }

  }
  }
  //the game FASE 02
  else if (tela==4){
    textAlign(CENTER)
    textSize(40)
    image(img6,0,0,480,270)
    fill(255,215,0);
    stroke(20);
    text("FASE 02",250,30);
    
    fill(255,215,0);
    stroke(20);
    text("EM DESENVOLVIMENTO",250,150);
    
  }
  //the game FASE03
  else if (tela==5){
    
  }  
  //GAME OVER
  else if (tela==6){
    image(img5,0,0,480,270);
    textAlign(CENTER);
    textSize(90);
    fill(255,0,0);
    stroke(20);
    text("GAME OVER",240,70);
    
    //Tentar de NOVO
     stroke(200);
     fill(230,23);
     rect(xMenu+120,yMenu2+60,largura,altura,15)
        if(mouseX > (xMenu+120) && mouseX < (xMenu+120) + largura && mouseY > (yMenu2+60) && mouseY < (yMenu2+60) + altura){
     stroke(200);
     fill(230,23);
     rect(xMenu+120,yMenu2+60,largura,altura,15);
        if (mouseIsPressed) {
        tela = 1
          vida = vida + 3
          pontos = 0
          questão = 1
    }          
}
         textSize(30);
     fill(255,215,0);
     stroke(20);
     text("Menu",370,247)
  }
}
  function keyPressed(){
  if(keyCode === 68){
    xjogador = xjogador + 10
  }
  else if(keyCode === 65){
    xjogador = xjogador - 10
  }
  else if(keyCode == 87){
    pulo ++
  }
}
