var dNumber = Math.floor(Math.random() * 100) + 1;

function checkIt()
{
    var resultOutput = document.getElementById("resultOutput");
    var userGuess = Number(document.getElementById("userGuess").value);

    if (userGuess < 1 || userGuess > 100)
    {
        resultOutput.innerHTML = "ERROR - Please only enter a number between 1 and 100.";
    }
    else if ((userGuess > dNumber) && (userGuess <= dNumber + 10))
    {
        resultOutput.innerHTML = "Result: Your guess is close but your guess is still higher. Go lower!";

    }
    else if ((userGuess < dNumber) && (userGuess >= dNumber - 10))
    {
        resultOutput.innerHTML = "Result: Your guess is close but your guess is still lower. Go higher!";

    }
    else if (userGuess < dNumber)
    {
        resultOutput.innerHTML = "Result: Your guess is too low. Go higher!";

    }
    else if (userGuess > dNumber)
    {
        resultOutput.innerHTML = "Result: Your guess is too high. Go lower!";
        
    }
    else if (userGuess == dNumber)
    {
        resultOutput.innerHTML = "Result: Yippie! You guessed it right! The number was " + dNumber + "!";
        
    }
}   

