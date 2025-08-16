var dNumber = Math.floor(Math.random() * 100) + 1;

function checkIt()
{
    var resultOutput = document.getElementById("resultOutput");
    var userGuess = Number(document.getElementById("userGuess").value);

    if (userGuess < 1 || userGuess > 100)
    {
        resultOutput.innerHTML = "ERROR - Please only enter a number between 1 and 100.";
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
logo.style.position = "absolute";
logo.style.top = "20px";
logo.style.right = "20px";
logo.style.width = "100px";