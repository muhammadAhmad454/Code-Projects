let para = document.querySelector('p');
let btn = document.querySelector('button');
let img = document.querySelector('#imgForDog');
let url = 'https://catfact.ninja/fact';
let urlForDog = 'https://dog.ceo/api/breeds/image/random';


let urlJokes = 'https://icanhazdadjoke.com/';

async function getJokes(){
    try{
        const config = { headers: {Accept: "application/json"}};
        let res = await axios.get(urlJokes, config);
        console.log(res.data.joke);
    } catch (err){
        console.log(err);
    }
}














async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        // console.log(err);
        return "No fact found"
    }
}

async function getDogImage() {
    try {
        let res = await axios.get(urlForDog);
        return res.data.message;
    } catch (err) {
        // console.log(err);
        return "No Image found"
    }
}

btn.addEventListener('click', async () => {
    let catFact = await getFacts();
    para.innerText = catFact;
    let dogImage = await getDogImage();
    img.setAttribute("src", dogImage);
});

// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         para.innerText = data.fact;
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data.fact);
//     })
//     .catch((err) => {
//         console.log(err);
//     })