const max = prompt("Enter max no.");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("You are right! congrats!! random number was", random);
        break;
    }
    
    else if(guess < random) {
        guess = prompt("Hint: Your guess was too small, Try agin!");
        break;
    }
    else {
        guess = prompt("Hint: Your guess was too large, Try again!");
    }
}