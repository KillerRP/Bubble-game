const bubble = document.getElementById('bubble');
const letter = document.getElementById('letter');
const gameover = document.getElementById('end-game');

const letterLists = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const iteration = 10;
let score = 0;
let negativeCounter = 0;
let endgame
function randomNum(limit) {
    return Math.floor(Math.random() * limit);
}

function randomLetter() {
    let randomletters = letterLists[Math.floor(Math.random() * letterLists.length)];
    return randomletters;
}

bubble.addEventListener('animationiteration', function () {
    let randomnumber = randomNum(90);
    bubble.style.left = randomnumber + '%';
    letter.innerText = randomLetter();
    bubble.style.top = "100%";
    // console.log(negativeCounter);
    let reachedBottom = parseInt(window.getComputedStyle(bubble).getPropertyValue('top'));
    console.log(reachedBottom, 0);
    if (reachedBottom === 0) {
        console.log("in");
        endgame = true;
    }
    if (negativeCounter === 3) {
        endgame = true;
    }
    if (endgame) {
        gameover.style.display = "block";
        bubble.style.display = "none";
    }
})

window.addEventListener('keydown', (e) => {
    e.key === letter.innerText ? score += 1 : negativeCounter += 1;
})