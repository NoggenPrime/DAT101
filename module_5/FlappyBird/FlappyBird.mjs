"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import libSound from "../../common/libs/libSound.mjs";
import THero from "./hero.mjs";
import TObstacle from "./obstacle.mjs";
import { TBait } from "./bait.mjs";
import { TMenu } from "./menu.mjs";


//--------------- Objects and Variables ----------------------------------//
const chkMuteSound = document.getElementById("chkMuteSound");
const rbDayNight = document.getElementsByName("rbDayNight");
const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);
libSound.activateAudioContext();


export const SpriteInfoList = {
  hero1:        { x:    0, y: 545, width:   34, height:  24, count:  4 },
  hero2:        { x:    0, y: 569, width:   34, height:  24, count:  4 },
  hero3:        { x:    0, y: 593, width:   34, height:  24, count:  4 },
  obstacle:     { x:    0, y:   0, width:   52, height: 320, count:  4 },
  background:   { x:  246, y:   0, width:  576, height: 512, count:  2 },
  flappyBird:   { x:    0, y: 330, width:  178, height:  50, count:  1 },
  ground:       { x:  246, y: 512, width: 1152, height: 114, count:  1 },
  numberSmall:  { x:  681, y: 635, width:   14, height:  20, count: 10 },
  numberBig:    { x:  422, y: 635, width:   24, height:  36, count: 10 },
  buttonPlay:   { x: 1183, y: 635, width:  104, height:  58, count:  1 },
  gameOver:     { x:    0, y: 384, width:  226, height: 114, count:  1 },
  infoText:     { x:    0, y: 630, width:  200, height:  55, count:  2 },
  food:         { x:    0, y: 696, width:   70, height:  65, count: 34 },
  medal:        { x:  985, y: 635, width:   44, height:  44, count:  4 },
};


export const EGameStatus = { idle: 0, getReady: 1, playing: 2, gameOver: 3 };

export const GameProps = {
  soundMuted: false,
  dayTime: true,
  speed: 1,
  status: EGameStatus.idle,
  background: null,
  ground: null,
  hero: null,
  obstacles: [],
  baits: [],
  menu: null,
  score: 0,
  bestScore: 0,
  sounds: {countDown: null, food: null, gameOver: null, dead: null, running: null},
};

//--------------- Functions ----------------------------------------------//

export function playSound(aSound) {
  if (!GameProps.soundMuted) {
    aSound.play();
  } else {
    aSound.pause();
  }
}

function loadGame(){
  console.log("Game ready to load");
  cvs.width = SpriteInfoList.background.width;
  cvs.height = SpriteInfoList.background.height;

  
  let backgroundPos = new lib2d.TPosition(0, 0);
  GameProps.background = new libSprite.TSprite(spcvs, SpriteInfoList.background, backgroundPos);

  
  let groundPos = new lib2d.TPosition(0, cvs.height - SpriteInfoList.ground.height);
  GameProps.ground = new libSprite.TSprite(spcvs, SpriteInfoList.ground, groundPos);

  
  let heroPos = new lib2d.TPosition(100, 100);
  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, heroPos);

  
  GameProps.hero.animateSpeed = 10;

  GameProps.menu = new TMenu(spcvs);


  spawnObstacle();
  spawnBait();

  
  
  requestAnimationFrame(drawGame);
  setInterval(updateGame, 10);
  GameProps.sounds.running = new libSound.TSoundFile("./Media/running.mp3");
  GameProps.sounds.countDown = new libSound.TSoundFile("./Media/countDown.mp3");
  GameProps.sounds.flap = new libSound.TSoundFile("./Media/flap.mp3");
  GameProps.sounds.food = new libSound.TSoundFile("./Media/food.mp3");
  GameProps.sounds.dead = new libSound.TSoundFile("./Media/gameOver.mp3");
  GameProps.sounds.gameOver = new libSound.TSoundFile("./Media/heroIsDead.mp3");

}

function drawGame(){
  spcvs.clearCanvas();
  GameProps.background.draw();
  drawObstacles();
  drawBait();
  GameProps.ground.draw();
  GameProps.hero.draw();
  GameProps.menu.draw();
  requestAnimationFrame(drawGame);
  
}

function drawObstacles(){
  for(let i = 0; i < GameProps.obstacles.length; i++){
    const obstacle = GameProps.obstacles[i];
    obstacle.draw();
  }
}

function drawBait() {
  for (let i = 0; i < GameProps.baits.length; i++) {
    const bait = GameProps.baits[i];
    bait.draw();
  }
}


function updateGame(){
  
  switch (GameProps.status) {
    case EGameStatus.playing:
      if (GameProps.hero.isDead) {
        GameProps.hero.animateSpeed = 0;
        GameProps.soundMuted === GameProps.soundMuted;
        playSound(GameProps.sounds.dead);
        GameProps.hero.update();
        return;
      }
      GameProps.ground.translate(-GameProps.speed, 0);

      if (GameProps.ground.posX <= -SpriteInfoList.background.width) {
        GameProps.ground.posX = 0;
      }

      GameProps.hero.update();
      let delObstacleIndex = -1;
      
      for (let i = 0; i < GameProps.obstacles.length; i++) {
        const obstacle = GameProps.obstacles[i];
        obstacle.update();

        if(obstacle.right < GameProps.hero.left && !obstacle.hasPassed){

          GameProps.menu.incScore(20);
          console.log("Score: " + GameProps.score);
          obstacle.hasPassed = true;
        }

        if (obstacle.posX < -100) {
          delObstacleIndex = i;
        }
      }

        if (delObstacleIndex >= 0) {
          GameProps.obstacles.splice(delObstacleIndex, 1);
      }

      case EGameStatus.gameOver:
        let delBaitIndex = -1;
        const posHero = GameProps.hero.getCenter();

      for (let i = 0; i < GameProps.baits.length; i++) {
        const bait = GameProps.baits[i];
        bait.update();
        const posBait = bait.getCenter();
        const dist = posHero.distanceToPoint(posBait);

        if (dist < 15) {
          delBaitIndex = i;
          }
        }

        if (delBaitIndex >= 0) {
          GameProps.baits.splice(delBaitIndex, 1);
          GameProps.soundMuted === GameProps.soundMuted;
          GameProps.sounds.food.stop();
          playSound(GameProps.sounds.food);
          GameProps.menu.incScore(10); 

        }
        break;
        case EGameStatus.idle:
          GameProps.hero.updateIdle();
        break;
    }
  
}

function spawnObstacle(){
  const obstacle = new TObstacle(spcvs, SpriteInfoList.obstacle);
  GameProps.obstacles.push(obstacle);
  // Generate new obstacles every 2 to 5 seconds

  if (GameProps.status === EGameStatus.playing) {
    const seconds = Math.ceil(Math.random() * 5) + 2;
    setTimeout(spawnObstacle, seconds * 1000);
}
}

function spawnBait() {
  const pos = new lib2d.TPosition(SpriteInfoList.background.width, 100);
  const bait = new TBait(spcvs, SpriteInfoList.food, pos);
  GameProps.baits.push(bait);
  
  // Generate new baits every 2 to 5 seconds
  if (GameProps.status === EGameStatus.playing) {
    const sec = Math.ceil(Math.random() * 4) + 2; // Random interval between 2 and 5 seconds
    setTimeout(spawnBait, sec * 1000);
  }
}

export function StartGame() {
  GameProps.status = EGameStatus.playing;

  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, new lib2d.TPosition(100,100));
  GameProps.obstacles = [];
  GameProps.baits = [];
  GameProps.menu.reset();
  spawnObstacle();
  spawnBait();

  GameProps.sounds.countDown.stop();
  GameProps.sounds.gameOver.stop();
  GameProps.sounds.dead.stop();
  GameProps.soundMuted === GameProps.soundMuted;
  playSound(GameProps.sounds.running);

}


//--------------- Event Handlers -----------------------------------------//

function setSoundOnOff() {
  if (chkMuteSound.checked) {
    GameProps.soundMuted = true;
    console.log("Sound muted");
  } else {
    GameProps.soundMuted = false;
    console.log("Sound on");
  }
} 

function setDayNight() {
  if (rbDayNight[0].checked) {
    GameProps.dayTime = true;
    GameProps.background.index = 0; 
    console.log("Day time");
  } else {
    GameProps.dayTime = false;
    GameProps.background.index = 1; 
    console.log("Night time");
  }
  for (let obstacle of GameProps.obstacles) {
    if (GameProps.dayTime) {
     // obstacle.index = 0; 
    } else {
    //  obstacle.index = 1; 
    }
  }
}

function onKeyPress(aEvent){
  if (aEvent.code === "Space") {
    GameProps.hero.flap();
    GameProps.soundMuted === GameProps.soundMuted;
    GameProps.sounds.flap.stop();
    playSound(GameProps.sounds.flap);
  }

}

//--------------- Main Code ----------------------------------------------//
chkMuteSound.addEventListener("change", setSoundOnOff);
rbDayNight[0].addEventListener("change", setDayNight);
rbDayNight[1].addEventListener("change", setDayNight);

document.addEventListener("keydown", onKeyPress);

// Load the sprite sheet
spcvs.loadSpriteSheet("./Media/FlappyBirdSprites.png", loadGame)


