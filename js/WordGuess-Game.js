// initialize the game
        

// press a key

    // reset the game

    // letter asserted

    // letter flail

    //



const wordCollection = ["Uno", "Dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "dies"];
var currentWord = "";
var pressedKeys = "so";
var sExpression = new RegExp("[^" + pressedKeys + "]","gi");
const totalLettersAttents = 10;
var remainingLettersAttents = totalLettersAttents;
var wins = 0


function init()
{
    // choose a ramdom Word
    var rand =  Math.floor((Math.random() * 10));
    currentWord = wordCollection[rand];
    console.log(currentWord);

    // set the word on screen
    var secretWordEle = document.getElementById("secret-word");
    secretWordEle.innerHTML = currentWord.replace(sExpression, "_");
}

function resetGame()
{

}

function keyPressed(key)
{

}