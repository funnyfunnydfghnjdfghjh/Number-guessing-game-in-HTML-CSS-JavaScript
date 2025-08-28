let display = document.getElementById("display");

let input = document.getElementById("input");
let number = Math.floor(Math.random() * 100);
let header2 = document.getElementById("header2")
let button = document.getElementById("button3")
let guesses = 0



button.addEventListener("click", function() {
    //The Number function converts the value to an int
    let guess = Number(input.value); // <-- important change
    if (guess < number) {
        header2.textContent = "Too low!";
        guesses++
    } else if (guess > number) {
        header2.textContent = "Too high!";
        guesses++
    } 
    else if(guess === number){
        header2.textContent = `Correct! You got it in ${guesses} guesses`;
    }
    
});




