
function handleKeyboardKeypressEvent(event) {
    const playerPressedKey = event.key;
    const pressedKey = playerPressedKey.toLowerCase();

    const currentAlphabetElement = getInnerTextById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.toLowerCase();

    if (pressedKey == currentAlphabet) {

        // update score
        const initialScore = parseInt(getInnerTextById("current-score"));
        const newScore = initialScore + 1;

        setInnerTextById("current-score", newScore);

        // new round start
        removeBgColorById(currentAlphabet);
        continueGame();
    } else {

        const initialLife = parseInt(getInnerTextById("current-life"));
        const newLife = initialLife - 1;
        setInnerTextById("current-life", newLife);

        if (newLife < 0) {
            gameOver();
        }

    }
}
document.addEventListener("keypress", handleKeyboardKeypressEvent);



function continueGame() {

    const alphabet = getRandomAlphabet();
    setInnerTextById("current-alphabet", alphabet);
    addBgColorById(alphabet);

}


function play() {
    // hide everything
    hideElementById("home-screen");
    hideElementById("final-score");
    showElementById("play-ground");

    // initial score
    setInnerTextById("current-life", 5);
    setInnerTextById("current-score", 0);

    continueGame();
}

function gameOver() {
    hideElementById("play-ground");
    showElementById("final-score");

    const score = getInnerTextById("current-score");
    setInnerTextById("last-score", score);

    // clear current alphabet 
    const currentAlphabet = getInnerTextById("current-alphabet");
    removeBgColorById(currentAlphabet);

}