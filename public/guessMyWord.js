let secretWord = ["u", "p", "b", "e", "a", "t", "_", "u", "n", "o"];
let guessedWord = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

let bonusWord = ["h", "a", "m", "i", "l", "t", "o", "n"];
let guessedBonusWord = ["_", "_", "_", "_", "_", "_", "_", "_"];

document.getElementById("wordDisplay").textContent = guessedWord.join(" ");
document.getElementById("bonusWordDisplay").textContent = guessedBonusWord.join(" ");

let bonusTries = 0;
let bonusMaxTries = 15;

function bonusMakeGuess() 
  {
  let message = document.getElementById("bonusMessage");
  let guess = document.getElementById("bonusGuessInput").value.toLowerCase();
  let bonusCorrect = false;

    if(bonusTries >= bonusMaxTries)
      {
        message.textContent = "Sorry :c, you've exceeded the maximum number of tries. The word was 'hamilton'.";
        return;
      }

    for (let i = 0; i < bonusWord.length; i++) 
    {
      if (bonusWord[i] === guess) 
      {
        guessedBonusWord[i] = guess;
        bonusCorrect = true;
      }
    }

    document.getElementById("bonusWordDisplay").textContent = guessedBonusWord.join(" ");
    message.classList.remove("right", "wrong");
    if(bonusCorrect)
    {
      message.textContent = "Correct guess✅! Yay!";
      message.classList.add("right");
    }
    else if(!bonusCorrect)
    {
      message.textContent = "Sorry, try again ❌. :c";
      message.classList.add("wrong");
      bonusTries++;
    }
    document.getElementById("bonusNumberOfAttempts").textContent = "Tries left: " + (bonusMaxTries - bonusTries);
    document.getElementById("bonusGuessInput").value = "";
  }

function bonusHintRelease()
{
  let bonusHint = document.getElementById("bonusHint");
  bonusHint.textContent = "Hint: The word is a name, it's related to United States History, and the musical is composed by Lin-Manuel Miranda!";
  bonusHint.style.display = "block";
}


 let maxTries = 15;
 let tries = 0;
  function makeGuess() 
  {
  let message = document.getElementById("message");
  let guess = document.getElementById("guessInput").value.toLowerCase();
  let correct = false;

      if(tries >= maxTries)
      {
        message.textContent = "Sorry :c, you've exceeded the maximum number of tries. The word was 'upbeat uno'.";
        return;
      }
      

    for (let i = 0; i < secretWord.length; i++) 
    {
      if (secretWord[i] === guess) 
      {
        guessedWord[i] = guess;
        correct = true;
      }
    }

    document.getElementById("wordDisplay").textContent = guessedWord.join(" ");
    message.classList.remove("right", "wrong");
    if(correct)
    {
      message.textContent = "Correct guess✅! Yay!";
      message.classList.add("right");
    }
    else if(!correct)
    {
      message.textContent = "Sorry, try again ❌. :c";
      message.classList.add("wrong");
      tries++;
    }
    document.getElementById("numberOfAttempts").textContent = "Tries left: " + (maxTries - tries);
    document.getElementById("guessInput").value = "";
  }

function hintRelease()
{
  let hint = document.getElementById("hint");
  hint.textContent = "Hint: The first word is a synonym of happy, and the second word is a name!";
  hint.style.display = "block";
}


logo.style.position = "absolute";
logo.style.top = "20px";
logo.style.right = "20px";
logo.style.width = "100px";

