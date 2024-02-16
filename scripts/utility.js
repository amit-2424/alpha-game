

function hideElementById(id) {
    document.getElementById(id).classList.add("hidden");
}

function showElementById(id) {
    document.getElementById(id).classList.remove("hidden");
}

function getRandomAlphabet() {
    const alphabetText = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabetText.split('');

    const randomNumber = Math.random() * 25;
    const randomIndex = Math.round(randomNumber);

    const alphabet = alphabetArray[randomIndex];
    return alphabet;
}


function setInnerTextById(id, text) {
    document.getElementById(id).innerText = text;
}
function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    return innerText
}

function addBgColorById(id){
    document.getElementById(id).classList.add("bg-orange-400");
}

function removeBgColorById(id){
    document.getElementById(id).classList.remove("bg-orange-400");
}