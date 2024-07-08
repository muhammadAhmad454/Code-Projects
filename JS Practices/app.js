function sum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sum(5));

let stenos = ['asim', 'ahmad', 'razzaq', 'qadir', 'subhani', 'zuberi'];

function concatStenos(arr) {
    let concatString = "";
    for (let i = 0; i < arr.length; i++) {
        concatString += (arr[i] + " ");
    }
    return concatString;
}

console.log(concatStenos(stenos));


const sum2 = function (a, b) {
    return a + b;
}

console.log(sum2(50, 500))


// Qs1. Write a JavaScript function that returns array elements larger than a number.
let numArray = [1, 2, 3, 4, 5, 6];
let num = 4;

const elemLargerThanNum = function (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i])
        }
    }
}

elemLargerThanNum(numArray, num);


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let strOfallChar = "abcdabcdefgggh";
let charsOfUnique = "";
const getUniqueChar = function (str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (charsOfUnique.indexOf(char) == -1) {
            charsOfUnique += char;
        }
    }
    return charsOfUnique;
}


// getUniqueChar(strOfallChar);
console.log(getUniqueChar(strOfallChar));


// Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"


let country = ["Australia", "Germany", "United States of America"];



const getLongCountry = function (arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        let ansLen = arr[ans];
        let currLen = arr[i];
        if (currLen > ansLen) {
            ans = i
        }
    }
    return `${arr[ans]}, ${arr[ans].length}`;
}
getLongCountry(country);
console.log(getLongCountry(country));

// Write a JavaScript function to count the number of vowels in a String 

let stringOfVowels = "cheetah";



const getVowel = function (str) {
    let countVowel = 0;
    for (i of str) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            countVowel += 1;
        }
    }
    return countVowel
}

// getVowel(stringOfVowels);
console.log(getVowel(stringOfVowels));


// Write a JavaScript function to generate a random number within a range
// (start, end).

let numstart1 = 100;
let numend1 = 200;
function randomNums(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(randomNums(numstart1, numend1));

const mul = (a, b) => (a * b);
