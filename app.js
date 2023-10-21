const color = document.getElementById('color');
const button = document.querySelector('button');

function randomColorGenerator () {
    let colorCode = "#";
    let digits = "0123456789ABCDEF";
    for (i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random()*16);
        colorCode += digits[randomIndex];
    }
    return colorCode;
}

button.addEventListener('click', function () {
    document.body.style.background = randomColorGenerator ();
    color.textContent = randomColorGenerator();
})





