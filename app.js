const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let min = 0;
let max = 100;
let guess = Math.round(Math.random() * 100);
let guesses = 1;

function game() {
  console.clear();

  rl.question(`Is your number ${guess}? higher, lower, or yes. `, (answer) => {

    if (answer.toUpperCase() == "YES" && guesses == 1) {
      end = true
      console.log(`That was easy, it only took ${guesses} guess.`)
      rl.close();
    }
    if (answer.toUpperCase() == "YES" && guesses > 1) {
      end = true
      console.log(`Yea! your number is ${guess}, it only took ${guesses} guesses.`)
      rl.close();
    }
    if (answer.toUpperCase() == "HIGHER") {
      min = guess + 1;
      guess = Math.round(Math.random() * (max - min) + min);
      guesses++;

      game();
    }
    if (answer.toUpperCase() == "LOWER") {
      max = guess - 1;
      guess = Math.round(Math.random() * (max - min) + min);
      guesses++;

      game();
    }


  });
}
rl.question(`Think of a number between 1 and 100, ready? (press enter) `, (answer) => {
  game()
});
