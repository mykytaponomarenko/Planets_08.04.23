const g = 0.1;
const fps = 60;
const balls = [];
const forceY = g;
const forceX = g;

document.addEventListener('click', handleMouseClick) 

let ballNumber = 0;


function handleMouseClick(event) {

    ballNumber += 1;
    const id = 'ball-' + ballNumber; 

    let imgElement = document.createElement('img');
    imgElement.id = id ;
    imgElement.src = 'Great_ball.webp';

    let lineElement = document.createElement('line');
    lineElement.setAttribute('x1', "0");
    lineElement.setAttribute('y1', "80");
    lineElement.setAttribute('x2', "100");
    lineElement.setAttribute('y2', "20");
    lineElement.setAttribute('stroke', "0");

    document.body.append(imgElement);
    document.querySelector('#svg').innerHTML = `<line x1="${ballNumber*10}" y1="80" x2="100" y2="20" stroke="black" />`

    const newBall = {
        x: event.x,
        y: event.y,
        width: 100,
        height: 100,
        vx: 10,
        vy: 10,
        element: document.querySelector('#' + id),
      }

      balls.push(newBall);

} 

function move(ball, idx) {
    ball.vx += forceX;
    ball.vy += forceY; 

    if (ball.y > window.innerHeight - 5) { 
        ball.vy = -ball.vy * 0.97;
      
    }   
    if (ball.x > window.innerWidth-5) { 
        ball.vx = -ball.vx * 0.9;
      
    } 

    if (ball.y < 5) { 
        ball.vy = -ball.vy * 0.97;
      
    }   
    if (ball.x < 5) { 
        ball.vx = -ball.vx * 0.9;
      
    } 

    ball.x += ball.vx;
    ball.y += ball.vy;


    console.log("ball #" + idx, "\n" + "speed y: " + ball.vy);
    console.log("speed x: " + ball.vx);

    console.log("y: " + ball.y);
    console.log("x: " + ball.x);

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