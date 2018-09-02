
const wordCollection = ["Uno", "Dos 2", "tres", "cuatro", "cinco cincuenta", "seis", "siete", "ocho", "nueve", "dies"];
const allowedLetters = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890";
const totalLettersAttempts = 10;

var currentWord = "";
var guessedLetters = " ";
var remainingGuessAttempts = totalLettersAttempts;
var wins = 0;


function init()
{
    // choose a ramdom Word
    var rand =  Math.floor((Math.random() * 10));
    currentWord = wordCollection[rand];
    console.log(currentWord);

    printOnScreen();
}

function keyPressed(input)
{
    if(allowedLetters.indexOf(input.key.toUpperCase()) >= 0 && guessedLetters.indexOf(input.key.toUpperCase()) < 0 && remainingGuessAttempts > 0)
    {
        guessedLetters += input.key.toUpperCase();
        console.log(guessedLetters);
        remainingGuessAttempts--;
        printOnScreen();
        
        var sExpression = new RegExp("[^" + guessedLetters + "]","gi");
        var temp = currentWord.replace(sExpression, "_");
        if(currentWord === temp)
        {
            wins++;
            alert("You Win!");
            resetGame();
        }
        else if(remainingGuessAttempts <= 0)
        {
            alert("You lose!");
            resetGame();
        }
    }
}

function resetGame()
{
    guessedLetters = " ";
    remainingGuessAttempts = totalLettersAttempts;
    init();
}

function printOnScreen()
{
    // set the word on screen
    var element = document.getElementById("secret-word");
    var sExpression = new RegExp("[^" + guessedLetters + "]","gi");
    element.innerHTML = currentWord.replace(sExpression, "_").toUpperCase();

    // set the current Wins
    var element = document.getElementById("current-wins");
    element.innerHTML = wins;

    // set remaining guesses
    var element = document.getElementById("remaining-guesses");
    element.innerHTML = remainingGuessAttempts;

    // set guessed letters
    var element = document.getElementById("guessed-letters");
    element.innerHTML = guessedLetters;
}