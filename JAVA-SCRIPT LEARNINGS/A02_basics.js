// ----------------------------------- 1. console.log----------------------------------
console.log("hello world");
// ----------------- ---------------2 . template literals ------------------------------
let pencilprice = 10;
let eraserprice = 5;
console.log("the total prcice is ",pencilprice + eraserprice,"rupees");
let output = "the total prcice is " +(pencilprice + eraserprice)+"rupees";
let outputusingtemplateliterals = `the total price is : ${pencilprice + eraserprice} rupees.`;
console.log(outputusingtemplateliterals);
// ---------------------------------3.operators in javascripts-----------------------------------
//arithmatic operator
let a = 10;
let b = 5;
console.log( a + b);
console.log( a - b);
console.log( a * b);
console.log( a / b);
console.log( a ** b)
console.log( a % b);
// unary operator
console.log(a++);//10
console.log(++a);//12
//comparision operator
let age  = 16;
console.log (age < 16);
console.log (age > 16);
console.log (age == 16);
console.log(age != 16);
console.log(age <= 16);
console.log(age >= 16);
// ------------------------------------------- 4. conditional statments -------------------------------------
// if statments 
console.log(" before my if statments");
let ages = 29;
if(ages >= 18){
    console.log(" you can vote ");
}
console.log(" after my if statments");
// else if statments  
let age1 = 14;
if(age > 18){
    console.log("you can vote anuj ");
} else if (age < 18){
    console.log(" you cannnot vote  anuj");
}
//nested if else statments 
let marks = 40;
if(marks >= 33){
    console.log("pass");
    if(marks >= 80){
        console.log("grade o");
    } 
    else(marks >= 40 )
    {
    console.log("grade a");
}
}
else{
    ("better luck next time");
}
//logical operators 
let rank = 75;
if(rank >= 60 && rank <= 75){
    console.log("topper");
}


let nums = 12;
if((nums %3 ===0) && ((nums + 1 == 15) || (nums -1 == 11))) 
    {
    console.log("safe");
}else{
    console.log("unsafe");
}
//truthy and falsy value
if(true){
    console.log("it is true value ");
}
else{
    console.log("it has false values");
}



if(false){
    console.log("it is true value ");
}
else{
    console.log("it has false values");
}


if(NaN){
    console.log("it is true value ");
}
else{
    console.log("it has false values");
}
// SWITCH STATMENTS 
 let colours1 = "red";
  switch (colours1){
    case "red":
        console.log("stops");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("broken light");

  }
  // -----------------------------------------alert and prompt--------------------------------------------------- 

  /* let firstnames = prompt("enter first name");
  let lastnames = prompt ("enter last names");
  let msg = "welcome" + firstnames + " " + lastnames +"!" ;
  alert(msg); */ 

// ---------------practice questions 
let colour = "red";
if(colour === "red"){
   console.log("stop");
}
if(colour === " yellow"){
    console.log("slow down");
}
if(colour === "green"){
    console.log("go");
}

//----------------------practice questions
let size = "s";
if(size === "xl"){
    console.log("price is rs 250");
}
if(size === "L"){
    console.log("price is rs 200");
}
if(size === "M"){
    console.log("price is rs 100");
}
if(size === "s"){
    console.log("price is rs 50");
}
  

  
     