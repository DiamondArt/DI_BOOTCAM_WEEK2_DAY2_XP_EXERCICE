/* 
|Exercise 1: Simple If/Else Statement
|------------------------------------
|Create 2 variables, x and y. Each of them should have a different numeric value.
|Write an if/else statement that checks which number is bigger.
*/

let x =7;
let y = 5;
if(x>y){
    console.log(`We are ${x} and ${y} between both, ${x} is bigger`);
}

/* 
|Exercise 2: Chihuahua
|------------------------------------
|Create a variable called newDog where it’s value is “Chihuahua”.
|Check and display how many letters are in newDog.
|Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
|Check if the variable newDog is equal to “Chihuahua”
|if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
|else, console.log ‘I dont care, I prefer cats’
*/

let newDog = "Chihuahua";

console.log(newDog.length); // display length of newDog
newDog.toUpperCase() // display in uppercase
newDog.toLowerCase() // display in lowercase

if(newDog == "Chihuahua"){
    console.log("I love Chihuahuas, it's my favorite dog breed");
}else{
    console.log("I dont care, I prefer cats");
}

/* 
|Exercise 3: Even Or Odd
|------------------------------------
|Prompt the user for a number and save it to a variable.
|Check whether the variable is even or odd.
|If it is even, display: “x is an even number”. Where x is the actual number the user chose.
|If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
|multiple de 2
*/

let nbre = prompt("Hello help me to understand even and odd number, enter a number please")

if(nbre%2 == 0){
    console.log(`${nbre} is an even number`);
}else{
    console.log(`${nbre} is an odd number`);
}

/* 
|Exercise 4: Group Chat
|------------------------------------
|Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
|If there is no users (the users array is empty), console.log “no one is online”.
|If there is 1 user, console.log “<name_user> is online”.
|If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
|If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
*/

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let userDim = users.length;
if(userDim > 2){
    let others = userDim - 2;
    console.log(`They are ${users[0]}, ${users[1]} and ${others} more are online`);
}else if(userDim === 2){
    console.log(`They are ${users[0]}, ${users[1]} are online`);
}
else if(userDim === 1){
    console.log(`${users[0]} is online`);
}else{
    console.log('no one is online');
}