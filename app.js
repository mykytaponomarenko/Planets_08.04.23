const g = 0.1;
const fps = 60;
const balls = [];
const forceY = g;
const forceX = g*0.2;

document.addEventListener('click', handleMouseClick) 

let ballNumber = 0;


function handleMouseClick(event) {
    ballNumber += 1;
    const id = 'ball-' + ballNumber 
    document.body.innerHTML += `<img src = "Great_ball.webp" id="${id}">`

    const newBall = {
        x: event.x,
        y: event.y,
        width: 100,
        height: 100,
        vx: 5,
        vy: 5,
        element: document.querySelector('#' + id),
      }

      balls.push(newBall);

} 

function move(ball) {
    ball.vx += forceX;
    ball.vy += forceY; 

    if (ball.y > window.innerHeight - 50) { 
        ball.vy = -ball.vy * 0.97;
      
    }   
    if (ball.x > window.innerWidth-50) { 
        ball.vx = -ball.vx * 0.9;
      
    } 

    ball.x += ball.vx;
    ball.y += ball.vy;

    console.log("speed y: " + ball.vy);
    console.log("speed x: " + ball.vx);

}

function drawBall(ball) {
    ball.className = 'ball';
    ball.element.style.left = ball.x + "px";
    ball.element.style.top = ball.y + "px";
  }

function time() {    
    balls.forEach(move);
    balls.forEach(drawBall);

}

setInterval(time, 1000/fps);