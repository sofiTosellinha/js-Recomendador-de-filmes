let xbolinha = 300;
let ybolinha = 200;
let diametro = 15;
let raio = diametro/2;

let xvelocidade = 6;
let yvelocidade = 6;

let xRaquete = 10;
let yRaquete = 155;
let larguraRaquete = 10;
let alturaRaquete = 90;
let xRaqueteOponente = 580;
let yRaqueteOponente = 155;

let meuPlacar = 0 
let placarOponente = 0

let trilha; 
let ponto;
let raquetada;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaquete();
  movimentaRaqueteOponente();
  colisaoRaquete();
  placar();
  contabilizaPlacar();
}

function desenhaBolinha(){
  circle(xbolinha,ybolinha,diametro)
} 

function movimentaBolinha(){
  xbolinha += xvelocidade;
  ybolinha += yvelocidade;
}

function verificaBorda(){
  if(xbolinha > (width - raio) || xbolinha < (0 + raio)){
    xvelocidade = xvelocidade * (-1);
  }
  if(ybolinha > (height - raio) || ybolinha < (0 + raio)){
    yvelocidade = yvelocidade * (-1);
  }
}

function desenhaRaquete(x, y){
  rect(x, y, larguraRaquete , alturaRaquete);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
    if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function colisaoRaquete(){
  if(xbolinha - raio <= xRaquete + larguraRaquete &&
    ybolinha + raio >= yRaquete &&
    ybolinha - raio <= yRaquete + alturaRaquete){
    xvelocidade *= -1;
    raquetada.play();
  }
  
  if(xbolinha + raio >= xRaqueteOponente &&
    ybolinha + raio >= yRaqueteOponente &&
    ybolinha - raio <= yRaqueteOponente + alturaRaquete){
    xvelocidade *= -1;
    raquetada.play();
  }
}

function placar(){
  fill('orange')
  rect(130, 5, 40, 25)
  rect(430, 5, 40, 25)
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(meuPlacar, 150, 25);
  text(placarOponente, 450, 25);
}

function contabilizaPlacar(){
  if(xbolinha - raio <= 0){
    placarOponente +=1;
    ponto.play();
  }
  if(xbolinha + raio >= width){
    meuPlacar += 1;
    ponto.play();
  }
}

function preload(){
  trilha = loadSound('trilha.mp3')
  raquetada = loadSound('raquetada.mp3')
  ponto = loadSound('ponto.mp3')
}
