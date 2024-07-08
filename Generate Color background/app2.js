let colorBtn = document.querySelector('button');

colorBtn.addEventListener('click', function () {
    let randomColor = getRandomColor();
    // let boxColor = document.querySelector('div');
    let body = document.querySelector('body');
    let headingColor = document.querySelector('h1');
    headingColor.innerText = randomColor;
    // headingColor.style.color = randomColor;
    // boxColor.style.backgroundColor = randomColor;
    // boxColor.style.boxShadow = `1px 1px 5px ${randomColor}`;
    body.style.backgroundColor = randomColor;

})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let rgbColor = `rgb(${red},${green},${blue})`;
    return rgbColor;
}