// export default function Engine(canvas){
// const canvas = document.getElementById(canva);
// const context = canvas.getContext("2d");
// const width = canvas.width = 320;
// const height = canvas.height = 480;
// const frameWidth = 64;
// const frameHeight = 100;
// const xPos = 130;
// const yPos = 160;
// const scale = 1;
// const fps = 60;
// const secondsToUpdate = 0.06 * fps;
// let frameIndex = 0;
// let count = 0;

// canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

// const spriteSheet = new Image();
// spriteSheet.src = "assets/images/hero_spritesheet.png";

// const State = {
//   states: {},
//   generateState: function(name, startIndex, endIndex) {
//     if (!this.states[name]) {
//       this.states[name] = {
//         frameIndex: startIndex,
//         startIndex: startIndex,
//         endIndex: endIndex
//       };
//     }
//   },
//   getState: function(name) {
//     if (this.states[name]) {
//       return this.states[name];
//     }
//   }
// };

// State.generateState("breath", 0, 4);
// State.generateState("angry", 4, 8);
// State.generateState("jump", 8, 14);

// function animate(state) {
//   context.drawImage(
//     spriteSheet,
//     state.frameIndex * frameWidth,
//     0,
//     frameWidth,
//     frameHeight,
//     xPos,
//     yPos,
//     frameWidth * scale,
//     frameHeight * scale
//   );

//   count ++;
//   if (count > secondsToUpdate) {
//     state.frameIndex ++;
//     count = 0;
//   }

//   if (state.frameIndex > state.endIndex) {
//     state.frameIndex = state.startIndex;
//   }
// }

// function frame() {
//   context.clearRect(0, 0, width, height);
//   animate(State.getState("breath"));
//   // animate(State.getState("angry"));
//   // animate(State.getState("jump"));
//   requestAnimationFrame(frame);
// }

// frame();
// }



// export default function Engine(){
//     const canvas = document.getElementById('canvas');
//     const context = canvas.getContext('2d');
//     const canvasWidth = canvas.width = 50;
//     const canvasHeight = canvas.Height = 50;
    
//     let img = new Image();
//     img.src = "https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/273685480_250191227287367_4314568326436548815_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=UpJVY2A48UEAX_NtGKC&_nc_ht=scontent-vie1-1.xx&oh=03_AVIZz8tnQ3vl7y8dfSz-83swAWoaJcgdDBeaA_px8UD0ww&oe=6231EAB4";
//     //img.src = "https://opengameart.org/sites/default/files/fire1_64.png";
//     //img.src = "https://media.discordapp.net/attachments/354989172702052352/943641743205761052/Projectile_612.png";
    
    
//     const spriteWidth = 20;
//     const spriteHeight = 30;
//     let frameX = 0;
//     let frameY = 0;
//     let gameframe = 0;
//     const stagger = 5;
//     console.log('loaded');   

    
    
//     function animate(){
//         context.clearRect(0, 0, canvasHeight, canvasWidth);
//         let pos = Math.floor(gameframe/stagger) % 4;    
//         frameX = spriteWidth * pos;
//         context.drawImage(img, frameX , frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
//         gameframe++;
//         requestAnimationFrame(animate);
//     }
//     animate();
// }