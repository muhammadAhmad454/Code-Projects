// let ranNum = Math.floor(Math.random() * 10) + 1;
// let ranNum2 = Math.floor(Math.random() * 100) + 1;
// let ranNum3 = Math.ceil(Math.random() * 5);
// console.log(ranNum, ranNum2, ranNum3)

let maxNum = prompt("Please enter a Max Number");
maxNum = parseInt(maxNum);
let randomNum = Math.ceil(Math.random() * maxNum);

let userGuessNum = prompt("Guess the Number");
userGuessNum = parseInt(userGuessNum);

let count = 0;

while (userGuessNum != randomNum) {
    console.log("Wrong! try again")
    if (userGuessNum < randomNum) {
        userGuessNum = prompt("Hint: Your guess is small");
    } else {
        userGuessNum = prompt("Hint: Your guess is Large");
    }
    count++;
    if (count == 4){
        console.log("Oops! You play", count+1, "chances. Loss!");
        console.log(`Computer No. was ${randomNum}`);
        break;
    }
    if(userGuessNum == randomNum){
        console.log("Hurrrrraaaay, You Win");
        console.log(`Your guess: ${userGuessNum}, Computer No. ${randomNum}`);
        break;
    }
}

