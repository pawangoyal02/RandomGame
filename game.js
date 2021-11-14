// Connection

const ws = new WebSocket("ws://localhost:8082");

ws.addEventListener("open", () => {
    console.log("We are connected!");

    ws.send(`${playername}`);
    ws.send(`${score}`);
});

// Enter Name

var playername = prompt("Enter Your Name To Start The Game.");

const play1 = document.getElementById('pl1');
play1.innerHTML = `Player 1- ${playername}`;

// Countdown Timer Code

let time= 59;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown,1000);

function updateCountdown(){
    
    let seconds = time;

    if(seconds>=0)
    {
        if(seconds<10)
        {
            countdownEl.innerHTML = `Time Left: 00:0${seconds}`;
        }
        else
        {
            countdownEl.innerHTML = `Time Left: 00:${seconds}`;
        }
        time--;
    }
    else
    {
        countdownEl.innerHTML = `Time Left: 00:00`;
    }    
}

setTimeout(gameOver, 60000);

function gameOver(){
    alert('Game Over! Start New Game');
}

//Random Operation Generator

var random1 = Math.floor(Math.random()*100)+1;
var random2 = Math.floor(Math.random()*100)+1;
var Op1 = document.getElementById('a');
Op1.innerHTML= `${random1} + ${random2}`;

var random3 = Math.floor(Math.random()*100)+1;
var random4 = Math.floor(Math.random()*100)+1;
var Op2 = document.getElementById('b');
Op2.innerHTML= `${random3} - ${random4}`;

var random5 = Math.floor(Math.random()*100)+1;
var random6 = Math.floor(Math.random()*100)+1;
var Op3 = document.getElementById('c');
Op3.innerHTML= `${random5} * ${random6}`;

var random7 = Math.floor(Math.random()*100)+1;
var random8 = Math.floor(Math.random()*100)+1;
var Op4 = document.getElementById('d');
Op4.innerHTML= `${random7} / ${random8}`;

var random9 = Math.floor(Math.random()*100)+1;
var random10 = Math.floor(Math.random()*100)+1;
var Op5 = document.getElementById('e');
Op5.innerHTML= `${random9} + ${random10}`;

var random11 = Math.floor(Math.random()*100)+1;
var random12 = Math.floor(Math.random()*100)+1;
var Op6 = document.getElementById('f');
Op6.innerHTML= `${random11} - ${random12}`;

var random13 = Math.floor(Math.random()*100)+1;
var random14 = Math.floor(Math.random()*100)+1;
var Op7 = document.getElementById('g');
Op7.innerHTML= `${random13} * ${random14}`;

var random15 = Math.floor(Math.random()*100)+1;
var random16 = Math.floor(Math.random()*100)+1;
var Op8 = document.getElementById('h');
Op8.innerHTML= `${random15} / ${random16}`;

//Ans Generator Code
var ans1 = document.getElementById('i');
ans1.innerHTML = random1 + random2;

var ans2 = document.getElementById('j');
ans2.innerHTML = random3 - random4;

var ans3 = document.getElementById('k');
ans3.innerHTML = random5 * random6;

var ans4 = document.getElementById('l');
ans4.innerHTML = (random7 / random8).toFixed(3);

var ans5 = document.getElementById('m');
ans5.innerHTML = random9 + random10;

var ans6 = document.getElementById('n');
ans6.innerHTML = random11 - random12;

var ans7 = document.getElementById('o');
ans7.innerHTML = random13 * random14;

var ans8 = document.getElementById('p');
ans8.innerHTML = (random15 / random16).toFixed(3);

// Click Drag Code

const Op1Box = document.querySelector('#a');
const Op1Ans = document.getElementById('i');

Op1Box.addEventListener('dragstart', (e)=>{
    setTimeout(() => {
        e.target.className = 'hide';
    },0)
});

Op1Box.addEventListener('dragend', ()=>{
    e.target.className = 'Op1Box';
});

Op1Ans.addEventListener('dragover', (e) =>{
    e.preventDefault();
})

Op1Ans.addEventListener('drop', (e) =>{
    e.target.append(Op1Box);
    
    match_found();
})

const Op2Box = document.querySelector('#b');
const Op2Ans = document.getElementById('j');

Op2Box.addEventListener('dragstart', (e)=>{
    setTimeout(() => {
        e.target.className = 'hide';
    },0)
});

Op2Box.addEventListener('dragend', ()=>{
    e.target.className = 'Op2Box';
});

Op2Ans.addEventListener('dragover', (e) =>{
    e.preventDefault();
})

Op2Ans.addEventListener('drop', (e) =>{
    e.target.append(Op2Box);
    
    match_found();
})

const Op3Box = document.querySelector('#c');
const Op3Ans = document.getElementById('k');

Op3Box.addEventListener('dragstart', (e)=>{
    setTimeout(() => {
        e.target.className = 'hide';
    },0)
});

Op3Box.addEventListener('dragend', ()=>{
    e.target.className = 'Op3Box';
});

Op3Ans.addEventListener('dragover', (e) =>{
    e.preventDefault();
})

Op3Ans.addEventListener('drop', (e) =>{
    e.target.append(Op3Box);
    
    match_found();
})

const Op4Box = document.querySelector('#d');
const Op4Ans = document.getElementById('l');

Op4Box.addEventListener('dragstart', (e)=>{
    setTimeout(() => {
        e.target.className = 'hide';
    },0)
});

Op4Box.addEventListener('dragend', ()=>{
    e.target.className = 'Op4Box';
});

Op4Ans.addEventListener('dragover', (e) =>{
    e.preventDefault();
})

Op4Ans.addEventListener('drop', (e) =>{
    e.target.append(Op4Box);
    
    match_found();
})

const Op5Box = document.querySelector('#e');
const Op5Ans = document.getElementById('m');

Op5Box.addEventListener('dragstart', (e)=>{
    setTimeout(() => {
        e.target.className = 'hide';
    },0)
});

Op5Box.addEventListener('dragend', ()=>{
    e.target.className = 'Op5Box';
});

Op5Ans.addEventListener('dragover', (e) =>{
    e.preventDefault();
})

Op5Ans.addEventListener('drop', (e) =>{
    e.target.append(Op5Box);
    
    match_found();
})

const Op6Box = document.querySelector('#f');
const Op6Ans = document.getElementById('n');

Op6Box.addEventListener('dragstart', (e)=>{
    setTimeout(() => {
        e.target.className = 'hide';
    },0)
});

Op6Box.addEventListener('dragend', ()=>{
    e.target.className = 'Op6Box';
});

Op6Ans.addEventListener('dragover', (e) =>{
    e.preventDefault();
})

Op6Ans.addEventListener('drop', (e) =>{
    e.target.append(Op6Box);
    
    match_found();
})

const Op7Box = document.querySelector('#g');
const Op7Ans = document.getElementById('o');

Op7Box.addEventListener('dragstart', (e)=>{
    setTimeout(() => {
        e.target.className = 'hide';
    },0)
});

Op7Box.addEventListener('dragend', ()=>{
    e.target.className = 'Op7Box';
});

Op7Ans.addEventListener('dragover', (e) =>{
    e.preventDefault();
})

Op7Ans.addEventListener('drop', (e) =>{
    e.target.append(Op7Box);
    
    match_found();
})

const Op8Box = document.querySelector('#h');
const Op8Ans = document.getElementById('p');

Op8Box.addEventListener('dragstart', (e)=>{
    setTimeout(() => {
        e.target.className = 'hide';
    },0)
});

Op8Box.addEventListener('dragend', ()=>{
    e.target.className = 'Op8Box';
});

Op8Ans.addEventListener('dragover', (e) =>{
    e.preventDefault();
})

Op8Ans.addEventListener('drop', (e) =>{
    e.target.append(Op8Box);
    
    match_found();
})

var score=0;

function match_found()
{
    score = score + 10;
}