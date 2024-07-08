console.log("Welcome to Simon game");

let gameSeq = [];
let userSeq = [];
let startGame = false;
let level = 0;
let btns = ['yellow', 'red', 'green', 'purple'];
let msgHeading = document.querySelector('h3');
let startBtn = document.querySelector('.start_button');

startBtn.addEventListener("click", function () {
    if (startGame == false) {
        console.log('game is start')
        startGame = true;
    }
    this.innerText = "Stop";
    this.style.backgroundColor = "red";

    levelUp();
})

function levelUp() {
    userSeq = [];
    level++;
    msgHeading.innerText = `Level ${level}`;
    msgHeading.style.color = 'blue';

    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);

    gameSeq.push(ranColor);
    console.log(gameSeq);

    gameFlash(ranBtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 250);
}

function checkGame(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(() => {
                levelUp();
            }, 1000);
        }
    } else {
        console.log('game over');
        msgHeading.innerHTML = `Game over, Score is <span style="color: blue;">${level}</span>. <br> Play again to Press <span style="background-color: #000; color: #fff; padding: 0 8px; border-radius: 4px;">Start</span> button.`
        msgHeading.style.color = 'red';
        let body = document.querySelector('body');
        body.style.backgroundColor = 'red';
        setTimeout(() => {
            body.style.backgroundColor = 'white';
        }, 250);

        startBtn.innerText = "Start";
        startBtn.style.backgroundColor = "#000";

        reset();
    }
}

function userBtnFlash() {
    let btn = this;
    gameFlash(btn);

    userClr = btn.getAttribute('id');
    userSeq.push(userClr);

    checkGame(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (oneBtn of allBtns) {
    oneBtn.addEventListener('click', userBtnFlash);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    startGame = false;
    level = 0;
}