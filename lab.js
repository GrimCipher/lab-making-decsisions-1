////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

//CODE HERE
let lovesCode = true
if (lovesCode){
  console.log(`i love to code`)
}
else {
  console.log(`code is hard`)
}


// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE
if ( amysAge <= brittanisAge){
  console.log(brittanisAge,'brittani is older than amy')
}else {
  console.log(amysAge,'amy is older than brittani')
}

  


////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

//CODE HERE
if(brittanisBirthYear === amysBirthYear) {
  console.log("wow they are born the same year")
} else {
  console.log("they weren't born in the same year")
}



////////// PROBLEM 4 //////////

let temperature = 55;
let rain = true;

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

//CODE HERE
if (60 < temperature < 80 && rain) {
  console.log("It's between 60 and 80 degrees and currently raining, you should wear a rain jacket .")
} else if (60 < temperature < 80 && !rain) {
  console.log("It's between 60 and 80 degrees and currently not raining, you should wear a normal jacket.")
} else if (temperature >= 80 && rain) {
  console.log("It is over 80 degrees and raining, you should wear a shirt and bring an umbrella.")
} else if (temperature >= 80 && !rain) {
  console.log("It is over 80 degrees It's also not raining, you should wear a shirt.")
} else if (temperature <= 60 && rain) {
  console.log("Temperatures have dropped below 60 degrees and it's raining,you should really put on a heavy jacket and bring an umbrella")
} else if (temperature <= 60 && !rain) {
  console.log("it be bellow 60 degrees and it's not raining, you should wear a heavy jacket.")
} else {
}


////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

//CODE HERE
let Hello = 10

for (let i = 0; i < 10; i++){
  if(Hello <=0){ 
  console.log('Hello')
} else {
  console.log("hello")
}
}


////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

//CODE HERE

let number = 1
for (let i = 0; i < 10; i++){
  console.log(number)
  number += 1
}


////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

//CODE HERE

let numberTwo = 10
for (let i = 0; i < 11; i++){
  console.log(numberTwo)
  numberTwo -=1
}

////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

//CODE HERE

while ( score < passingScore) {
  console.log("YOU FAILED")
  score ++
}


////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

//CODE HERE
let changeMyMind = true
if (changeMyMind) {
  changeMyMind = false
 } else if (!changeMyMind) {
  changeMyMind = true
 } else {
 }


////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true (it should currently be set to false due to the if-else statement in Problem 9). After you change the value of changeMyMind, console.log it's new value (it should now read true).

//CODE HERE

if (!changeMyMind){
changeMyMind = true
console.log(changeMyMind)
}


////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5;
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE

while(z > 0){
  for (let i = z; i > 0; i--){
  console.log(i)
}
z=z - 1 
}