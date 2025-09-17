const readline = require('readline');

const rl = readline.createInterface({ 
    input: process.stdin,
});

rl.on('line', input => {   
    function give_station(num) {
        switch (Number(num)) {
            case 1:
                console.log("You are at the Central Station.");
                break;
            case 2:
                console.log("You are at the Park Street Station.");
                break;
            case 3:
                console.log("You are at the City Hall Station.");
                break;
            case 4:
                console.log("You are at the Museum Station.");
                break;
            case 5:
                console.log("You are at the Airport Station.");
                break;
            default:
                console.log("Invalid station number. Please enter a number between 1 and 5.");
        }
    }

    give_station(input); 
});
