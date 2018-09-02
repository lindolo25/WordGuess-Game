// initialize the game
        

// press a key

    // reset the game

    // letter asserted

    // letter flail

    //



const wordCollection = ["Uno", "Dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "dies"];
var currentWord = "";
var pressedKeys = "";
const totalLettersAttents = 10;
var remainingLettersAttents = totalLettersAttents;
var wins = 0


function init()
{
    // choose a ramdom Word
    var rand =  Math.floor((Math.random() * 10));
    currentWord = wordCollection[rand];
    console.log(currentWord);

    printOnScreen();
}

function resetGame()
{

}

function keyPressed(input)
{
    pressedKeys += input.key;
    remainingLettersAttents--;
    printOnScreen();
    
    var sExpression = new RegExp("[^" + pressedKeys + "]","gi");
    var temp = currentWord.replace(sExpression, "_");
    if(currentWord === temp)
    {
        this.wins++;
        alert("You Win!");
    }
    else if(remainingLettersAttents <= 0)
    {
        alert("You lose!");
    }
}

function printOnScreen()
{
    // set the word on screen
    var element = document.getElementById("secret-word");
    var sExpression = new RegExp("[^" + pressedKeys + "]","gi");
    element.innerHTML = currentWord.replace(sExpression, "_");

    // set remaining guesses
    var element = document.getElementById("remaining-guesses");
    element.innerHTML = remainingLettersAttents;

    // set guessed letters
    var element = document.getElementById("guessed-letters");
    element.innerHTML = pressedKeys.toUpperCase();
}