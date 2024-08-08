console.log("<---------------H E L L 0_____F U N C T I O N --------------->");
/*
FUNCTION DEFINATION(telling js)
        function funcName(){
            // do something 
        
        }
FUNCTION CALLING(USING THE FUNCTION)
*/
function hello(){  // function defination
    console.log("hello Anuj");
}
hello();//  function calling
hello();
hello();

function print1to5(){
    for(let i = 0;i<=5;i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age = 15;
    if(age >= 18){
        console.log("adult");
    }else{
        console.log("teen");
    }
}
isAdult();

//<create a function to print a poem>
function printpoem(){
    console.log("twinkle twinklw little star");
    console.log("how i wonder what you are ");
}
printpoem();
printpoem();

//<create a function to roll a dice & always display the value of the dice 1 to 6>
function rolldice(){
    console.log(Math.floor(Math.random()*6)+1);
}
rolldice();

//<-------------------------------------------------FUNCTION WITH ARGUMENTS------------------------------------------------->

/*
Values we pass to the function
function funcNAME(arg1, arg2)
{
   // do something 
}
*/


function printinfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printinfo("anuj", 20);//anuj's age is 20
printinfo("pallavi")//pallavi's age is undefined

function sum(a,b){
    console.log(a+b);
}
sum(657,768);

// create a function that gives us the average of the 3 number
function avg(a,b,c){
    console.log((a+b+c)/3);
}
avg(1,2,3);

// create a function that prints the multiplication table of a number
function tableofnumber(number){
    for(let i = 0;i<=10;i++){
        console.log(number*i);
    }
}
tableofnumber(7);

//<--------------------------------RETUN KEYWORD------------------------------------------------------------------>
/*
return keyword is used to return some value from the functions 
// input ----->[function (does some work)]---->output
function FuncName(arg1, arg2){
    // do something 
  return val;
  anything written after return not executed 
}
*/
function additon(a,b){
    return a+b;
}
console.log(additon(3,4));// used to print 
console.log(additon(additon(1,2),3));

//<create a function the returns the sum of numbers from 1 to n >

function sumofn(n){
    let sum = 0;
    for(let i =1 ;i<=n;i++){
        sum =sum + i;
    }
    return sum;
}
console.log(sumofn(5));

// create a function that returns all the concatination of all strings 
let strings2 = ["hi","hello","bye","howareyou","!"];
function concat(strings2) {
    let result1 = "";
    for(let i = 0; i < strings2.length;i++){
        result1 += strings2[i];
    }
    return result1;
}
console.log(concat(strings2)); //hihellobyehowareyou!
//<-----------------------------------------------------------------SCOPE--------------------------------------------------------->
/*
SCOPE:- Scope determines the acesssibility of variabless , objects , and functions from different parts of the code 
1.function
2.Block 
3.Lexical
*/


/*[FUNCTION SCOPE]

Variables defined inside a function are not acessible(visble) from outside the function

*/
let sum2= 54; // global scope 
function calcSum(a,b){
    let sum2 = a+b; // function scope
    console.log(sum2); 
}
calcSum(1,2);
console.log(sum2);

/*
[BLOCK SCOPE]

Variable declared inside a { } block cannot be acessed from outside the block

*/
let age5 = 25;
if(age5 >=18){
    let str = "adult";
    console.log(str); // block scope 
}
    //console.log(str); we cant, use this here becs veriable str is decleared inside in block and it is only be acessable inside the block

/*
[LEXICAL SCOPE]
A veriable defined outside a function can be aceesssible inside another function defined after thr veriable deceleration
the opposite is not true
*/
function outerfunction(){
    let x = 5;
    let y = 10;
    function innerfunction()
    { 
        console.log(x);
        console.log(y);
    }
    innerfunction();
}
outerfunction();

// Question :- what will be the output
let greet = "hello";
function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet)
    }
    //innergreet();
}
console.log(greet);
changeGreet();

//<-----------------------------------FUNCTION EXPRESSION ------------------------------------------------------------->
/*
const veriable = function(arg1,arg2...){
        // do something
}
*/
const sum9 = function(a,b){
    return a + b;
}
console.log(sum9(4,5));

let welcome = function(){
    console.log("welcome back")
}
welcome();
welcome = function(){
    console.log("namaste");
}
welcome();
// <------------------------------------HIGH ORDER FUNCTION---------------------------------------------------------------------->
/*
A Function  that does one or both 
-->take one or multiple function as arguments.
-->return a function.
*/
function multiplegreeet(func1 , count){
    for(let i = 1; i<= count ; i++){
        func1();
    }
}
let greets = function(){
    console.log("hello");
}
multiplegreeet(greets,1000);
multiplegreeet(function(){console.log("namaste")},100);

// [Higher Order Function Return]

function oddorevenfactory(){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
    }
    else if( request == "even"){
        let even = function(n){
            console.log(n%2 ==0);
        }
    }else{
        comnsole.log("wrong request");
    }
    
}
let request = "odd";
console.log(request);

//<--------------------------------------------------------------------METHODS------------------------------------------------------------------------>
// Actions that can be performed on an objects
const calculator = {
     num : 55,
    add : function(a,b){
        return a + b ;
    },
    sub : function(a,b){
        return a - b;
    },
    mul : function(a,b){
        return a * b;
    }
};
console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.add(1,2));
console.log(calculator.sub(7,4));
console.log(calculator.mul(5,5));

// methods shorthand 
const calci = {
    add(a,b) {
        return a + b;
    },
    sub(a,b){
        return a -b;
    }
}
console.log(calci.add(8,4));
console.log(calci.sub(8,4));
console.log(calci.sub);

//<------------------------------------------------"THIS in js"-------------------------------------------------------------------------------------->
// "this" keyword refers to an object that is executing the current piecec of code 
/*{object ki kishi property ka use krna chhahte hai to hamme this ka use krna prta hai kyuki haam directly use nhi kr shkte}
for example :- this codes gives you errors
const students_ = {
name : "anuj",
age : 20,
eng : 70,
maths : 90,
phy : 60,
get avg (){
let avg = (eng + math + phy)/3;
console.log(avg);
}
};
[methods ke inside key ko use krna hai to hamme this ka use krna prega ]
*/

const students9 = {
    name : "anuj",
    age : 20,
    eng : 70,
    maths : 90,
    phy : 60,
    getavg () {
    console.log(this);
    let avg = (this.eng + this.maths + this.phy)/3;
    console.log(avg);
    }
};
console.log(students9.getavg());

// <--------------------------------------------------------try & catch-------------------------------------------------------------------------------------------->
/*

the try statments allows you to define a block of code to be tested for errors while it is being executed 
the catch statment allows you to define a block of code to be executed , if any errors occurs in the try block

*/
console.log("hello");
console.log("hello");
try{
    console.log(x);
}catch(err){
    console.log("caught an error.... a is not defined ");
    console.log(err);
}
console.log("hello");
console.log("hello");
console.log("hello");

//<-------------------------------------------------MISCELLANEOUS TOPICS------------------------------------------------------------------------------------->
/*
[Arrow functions]
const func = (arg1,arg2....) => {function defination}
*/
const divide = (a,b) => {
    console.log(a/b);
}
console.log(divide(9,3));
const cube = (n) => {
    return n*n*n;
}
console.log(cube(9));

/*
(Implicit return)
const func => (arg1 , arg2 ....) => (value)
*/ 
const multipli = (a,b) => (
      a * b
);
console.log(multipli(7,4));

/*
[Set Timeout]
setTimeout(function,timeout)
             |__callback
*/
console.log("hi there !");
let id1 = setTimeout(() => {
    console.log(" india");
} , 4000) ;
console.log("welcome to");
console.log(clearInterval(id1));
/*
[Set Interval]
setInterval(function , timeout)
*/
// setInterval (() =>{
//     console.log("namaste  india ");
// },4000);

 let id = setInterval (() =>{
       console.log("namaste  india ");
    },4000);
console.log(id);
console.log(clearInterval(id));

let id2 = setInterval (() =>{
    console.log("namaste  bharat");
 },4000);
console.log(id);
console.log(clearInterval(id2));

//(this with arrow functions)
const studentsid = {
    name : "anuj",
    marks :65,
    prop : this, // global scope
    getName : function(){
        console.log(this);
        return this.name;
    },
    getMarks : () => {
            console.log(this); // parent scope -> widow
            return this.marks;
    },
};
console.log(studentsid.getName());  // anuj
console.log(studentsid.getMarks());  // window object

// write an arrow function that return the square of a number 'n'
const squareofnum = (n) => {
    return n*n ;
}
console.log(squareofnum(3));

// write a function that prints "hello world" 5 times at intervals of 2s each

// let id0 = setInterval (() =>{
//     console.log("hello world ")
// },2000);

// setTimeout (() =>{
//     clearInterval(id0);
//     console.log("cear interval ran");
// },10000);
/*hoisting :-Normal function definition can be called before
initialisation 
function expression Can’t be called before
initialisation
*/
console.log(su(2,3,4));
function su(a, b, c){
    return a + b + c;
}