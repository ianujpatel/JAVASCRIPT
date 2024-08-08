console.log("**********************array_methods*************************");

/*[forEach method]
arr.forEach(some function defination or name );
*/
let arr = [1,2,3,4,5];

function print(el) {
    console.log(el);
}
arr.forEach(print);

//or

arr.forEach(function(el){
    console.log(el)
});
console.log(" by using arrow functions ")
arr.forEach((el) =>{
    console.log(el)
});

let arr_ = [{
    name_1 :"anam",
    grade : "A+",
    city : "lalganj",
},
{
    name_2 : "avni",
    grade : "A",
    city : "Patna",
},
{
    name_3 : "pallavi",
    grade : "o+",
    city : "muzaffarpur",
}];

arr_.forEach((studentinfo) =>{
    console.log(studentinfo);
})
arr_.forEach((studentinfo) =>{
    console.log(studentinfo.grade);
})

/*
[Map]
let new arr = arr.map(some function defination or name );
*/

let numb = [ 1, 2,3,4];
let double1 = numb.map(function(el){
    return el * 2 ;
});

console.log(double1);

let studentsresult = [{
    name_1 :"anam",
    marks : 95,
    city : "lalganj",
},
{
    name_2 : "avni",
    marks : 90,
    city : "Patna",
},
{
    name_3 : "pallavi",
    marks : 98,
    city : "muzaffarpur",
}];

let gpa = studentsresult.map((el) =>{
    return el.marks/10;
})
console.log(gpa);

/*
[filter]
let newArr = arr.filter(some function defination or name );
*/

let newNumbers = [2,4,1,5,6,2,7,8,9];
let neweven = newNumbers.filter ((newNum) =>(newNum % 2 == 0));
console.log(neweven);

let evennos = newNumbers.map((newNum) =>(newNum % 2 == 0));
console.log(evennos);

/*
[every]
Return true if every elements of array gives true for some function . else return false 
arr.every(sum function defination or name );
[1,2,3,4].every((el) =>{
    el % 2 == 0;
});
*/
let every = [1,2,3,4].every((el) =>{
    el % 2 == 0;
});
 let every1 = [2,4].every((el) =>{
    el % 2 == 0;
});
console.log(every);
console.log(every1);

/*
[some]
Returns true if some elements of array give true for some functions . else returns false
arr.some(some function defination or name );
*/

let some1 = [1,2,3,4].some ((el) => (el % 2 == 0));
console.log(some1);
let some2 = [1,3].some ((el) => (el % 2 == 0));
console.log(some2);

/*
[reduce]
reduces the array to a single value 
arr.reduce(reduce function with 2 veriable for (accumulator,element));
*/

let reduces = [1,2,3,4].reduce((res,el) => (res + el));
console.log(reduces);

// finding Maximum in an array 
let arr1 = [2,3,4,5,3,7,8,1,2];

let max1 = arr1.reduce((max, el)=>{
        if(max < el){
            return el;
        }
        else {
            return max ;
        }
});
console.log(max1);

// check if number in our array are multiple of 10 or not 
let numinarray = [10,20,35,45,5];
let multiof10 = numinarray.every((el)=>
    el % 10 == 0
);
console.log(multiof10);
// create a function to find the min in array
let numinarr = [,2,3,1,4,6,9];
let minarray = numinarr.reduce((min , el) =>{
    if(min > el){
        return el
    }else {
        return min
    }
});
console.log(minarray);

/*

[Default Parameters]

giving a default value to arguments
SYNTAX :-
function func( a,b = 2){
  //do something
}
*/

function sum7(a,b = 4){
       return  a + b ;
}
console.log(sum7(1,2));
console.log(sum7(1));

function sum3(a =2 , b){
    return  a + b ;
}
console.log(sum3(1)); // nan because b = undefined 
console.log(sum3(1,2)); // 3

/*
[SPREAD]

expands an iterable into multiple values 
iterable :- array , string
function func (...arr){
    // do something
}
*/
console.log(..."mynameisAnuj");
let arrays = [1,2,3,4,5,6,7];  // m y n a m e i s A n u j
console.log(...arrays); // 1 2 3 4 5 6 7
let nos = [1,2,3,4,5,6,7,8,9,10,-9,-8];
let minnos = Math.min(...nos);
console.log(minnos);

// SPREAD with arrays literals 
let arry = [1,2,3,4,5];
let newarry = [...arry];
console.log(newarry);  // Array(5) [ 1, 2, 3, 4, 5 ]

/*
[REST]
Allow a function to take indefinite number of arguments and bundle them in an array
*/
function sumofnos(...args){
    for(let i =0;i < args.length;i++){
        console.log("you give us:",args[i]);
    }
    }
sumofnos(1,3,4,5,6,7);

function minno(){
    console.log(arguments);
    console.log(arguments.length);
    // console.log(arguments.push(1)); we cannot use array methods here like[push,every,pop,]
}
minno(1,2,3,4);

/*
this will give errors
function sumn(){
    return arguments.reduce((sumn , el) => sumn + el);   
}*/

function sumn(... args){ // using rest 
    return args.reduce((sumn , el) => sumn + el);   
}
console.log(sumn(1,2,3,4));

function minum (msg,... args){
    console.log(msg);
    return args.reduce((min,el) => {
        if(min > el){
            return el
        }else {
            return min
        }
});
}
console.log(minum("hello ", 10,12,13,14,9));// hello 9
console.log(minum( 10,12,13,14,9));  // 10 9

/*
[Destructuring] => arrays 
Storing values of array into multiple variables
*/

/*Without destructuring
let names = ["tony","bruce","steve","peter"];
let winner = names[0];
let runnerup = names[1];
let secondrunnerup = names[2];
let looser = names[3];
console.log(winner,runnerup, secondrunnerup,looser);*/

let names = ["tony","bruce","steve","peter","abc","def","ghi","jkl"];
let [winner , runnerup , secondrunnerup,looser] = names;
console.log(winner,runnerup, secondrunnerup,looser); // tony bruce steve peter

/*let [winner , runnerup , secondrunnerup, ...looser] = names;
 console.log(winner,runnerup, secondrunnerup,looser); tony bruce steve 
Array(5) [ "peter", "abc", "def", "ghi", "jkl" ] */


/*
[Destructuring] => Objects 
Storing values of array into multiple variables
*/

/*Without destructuring
const stu = {
    name : "anuj",
    age : 21,
    class : 14,
    subjects : ["english","dsa","maths","science"],
    username : "anuj@123",
    password : "abcd",
};
let username = stu.username;
console.log(username);
let password = stu.password;
console.log(password); */

const stu = {
    name : "anuj",
    age : 21,
    class : 14,
    subjects : ["english","dsa","maths","science"],
    username : "anuj@123",
    password : "abcd",
};
let {username,password} = stu;
console.log(username);
console.log(password);
let {username:user,password : secret , city = "mumbai"} = stu;
console.log(user);
console.log(secret);
console.log(city);