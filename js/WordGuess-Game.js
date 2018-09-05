
const wordCollection = [
    {
        title : "007",
        audioSource : "media/007.ogg"
    },
    {
        title : "A Space Odyssey",
        audioSource : "media/aSpaceOdyssey.ogg"
    },
    {
        title : "The Goodfather",
        audioSource : "media/theGoodfather.ogg"
    },
    {
        title : "Jaws",
        audioSource : "media/jaws.ogg"
    },
    {
        title : "Star Wars",
        audioSource : "media/starWars.ogg"
    },
    {
        title : "Superman",
        audioSource : "media/superman.ogg"
    },
    {
        title : "Indiana Jones",
        audioSource : "media/IndianaJones.ogg"
    },
    {
        title : "E.T.",
        audioSource : "media/et.ogg"
    },
    {
        title : "Jurassic Park",
        audioSource : "media/jurassicPark.ogg"
    },
    {
        title : "Schindler's List",
        audioSource : "media/schindlersList.ogg"
    },
    {
        title : "Forrest Gump",
        audioSource : "media/forrestGump.ogg"
    },
    {
        title : "Speed",
        audioSource : "media/speed.ogg"
    },
    {
        title : "Braveheart",
        audioSource : "media/braveheart.ogg"
    },
    {
        title : "Titanic",
        audioSource : "media/titanic.ogg"
    },
    {
        title : "Gladiator",
        audioSource : "media/gladiator.ogg"
    }     
];

const allowedLetters = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890";
const totalLettersAttempts = 10;

var currentWord = "";
var guessedLetters = " .'";
var remainingGuessAttempts = totalLettersAttempts;
var wins = 0;
var playedWords = "";


function init()
{
    // choose a ramdom Word
    var rand =  nonRepeatRandom(wordCollection.length);
    if(rand === undefined) {
        gameOver();
        return;
    }
    currentWord = wordCollection[rand].title;
    console.log(currentWord);

    // set the track on the audio object
    var a = document.getElementById("oggSource");
    a.setAttribute("src", wordCollection[rand].audioSource);
    
    // play the track
    var player = document.getElementById('player');
    player.load(); 
    player.play();

    printOnScreen();
}

function keyPressed(input)
{
    if(allowedLetters.indexOf(input.key.toUpperCase()) >= 0 && guessedLetters.indexOf(input.key.toUpperCase()) < 0 && remainingGuessAttempts > 0)
    {
        guessedLetters += input.key.toUpperCase();
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
    guessedLetters = " .'";
    remainingGuessAttempts = totalLettersAttempts;
    init();
}

function gameOver()
{
    document.onkeydown = undefined;
    alert("Game Over");
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
    element.innerHTML = guessedLetters.substring(3,guessedLetters.length);
}

function nonRepeatRandom(max, calls = 0)
{
    if( calls++ > 10000 ) return undefined;

    var selected = Math.floor((Math.random() * max));
    if(playedWords.indexOf(selected) < 0)
    {
        playedWords += selected;
        return selected;
    }
    else
    {
        return nonRepeatRandom(max, calls);
    }
}