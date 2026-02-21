console.log("the guess number game");
let num=45;
let guessNum=prompt("Guess the number correct:");
while(num !=guessNum){
  guessNum=prompt("wrong number,guess again:");
}
console.log("congratulations,you have entered right number");