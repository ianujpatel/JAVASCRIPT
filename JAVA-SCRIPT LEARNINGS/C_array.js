console.log("array ");
console.log("javascript");
//< array > --- linear collection of things 

// array creation 

let  students = ["anuj" , "pallavi" , "sneha" , "jhanvi" ];
console.log(students.length);
console.log(students[0]); // anuj
console.log(students[1]); // pallavi

// mixed array

let info = ["anuj","ram",13,28.9];
console.log(info[0][0]);   // a
console.log(info[0][1]);   //n
console.log(info[0][2]);   // u 
console.log(info[0][3]);   // j
console.log(info[0].length); // 4 -> anuj 
 
// empty array 

let emptyarr = []; // 0
console.log(emptyarr.length);

// array are Mutable. 

let fruits = ["mango" , "apple" , "banana"]; // Array(3) [ "mango", "apple", "banana" ]
console.log(fruits);
fruits[0] = "pineapple"; // mango -----> pineapple 
console.log(fruits); // Array(3) [ "pineapple", "apple", "banana" ]

// arrays  methods .

// <----------------------------------->
// push -> add to end 
// pop -> delete from end & returns it 
// unshift -> add to start
// shift -> delete from start & return it 

// <------------------------------------>

let car = ["audi","bmw","xuv","maruti"];
console.log(car); //Array(4) [ "audi", "bmw", "xuv", "maruti" ]
console.log(car.push("toyota")); // 5
console.log(car); //Array(5) [ "audi", "bmw", "xuv", "maruti", "toyota" ]
console.log(car.pop());  // toyota 
console.log(car); //Array(4) [ "audi", "bmw", "xuv", "maruti" ]
console.log(car.unshift("toyota")); // 5
console.log(car)  // Array(5) [ "toyota", "audi", "bmw", "xuv", "maruti" ]
console.log(car.shift()); // toyota 
console.log(car); // Array(4) [ "audi", "bmw", "xuv", "maruti" ]

// -----------------> practice questions .

let start = ["janurary","july" , "march", " august"];
console.log(start);// --->  Array(4) [ "janurary", "july", "march", " august" ]
console.log(start.shift());  // january
console.log(start);  // ---> // Array(3) [ "july", "march", " august" ]
console.log(start.unshift("june"));  // 4
console.log(start); // Array(4) [ "june", "july", "march", " august" ]
console.log(start.unshift("july"));  // 5
console.log(start);  // Array(5) [ "july", "june", "july", "march", " august" ]

// ---------------------> ARRAY METHODS 

// index()  :- returns index of something  [index found :- return index ; not found :- -1]

let primary = ["red","yellow","blue"];
console.log(primary.indexOf("yellow")); // 1
console.log(primary.indexOf("green")); // -1
console.log(primary.indexOf("YELLOW")); // -1
console.log(primary.indexOf("blue"));  // 2

// includes :- search for  a value 
console.log(primary.includes("green")); // false 
console.log(primary.includes("blue")); // true

// concat : merge 2 arrays 

let cricketer = ["virat", " rohit " , " sikhar", " dhoni "];
let kabbadi = ["padeep narwal", "rahul chaudhary","rohit kumar","manjeet chillar"]
console.log(cricketer.concat(kabbadi)); //[ "virat", " rohit ", " sikhar", " dhoni ", "padeep narwal", "rahul chaudhary", "rohit kumar", "manjeet chillar" ]

// reverse : revrse an arary 
console.log(cricketer.reverse()); // [ " dhoni ", " sikhar", " rohit ", "virat" ]

// slice methods  : copies a portion of an array
let colors = ["red","yellow", "blue","green","magenta"];
console.log(colors.slice()); //Array(5) [ "red", "yellow", "blue", "green", "magenta" ]
console.log(colors.slice(2)); // Array(3) [ "blue", "green", "magenta" ]
console.log(colors.slice(2,4)); //Array [ "blue" ,"green" ] ending excluded
console.log(colors.slice(-2)); // Array [ "green", "magenta" ]

// splice :- removes / replaces / add elements in place 
// -------> splice(start, deletecount , item0....itemN)
let colours9 = ["red", "yellow" ,"blue","orange" , " pink" , "white"];
console.log(colours9.splice(4)); // Array [ " pink", "white" ]
console.log(colours9); //Array(4) [ "red", "yellow", "blue", "orange" ]
console.log(colours9.splice(0,1)); //red
console.log(colours9); // Array(3) [ "yellow", "blue", "orange" ]
console.log(colours9.splice(0,1,"black","gray")); //yellow
console.log(colours9);

// ----<sort :- sort an arrays >
let luxarycar = ["bmw" , "suv" ," toyota" , " ferrari" , "gwagon"];
console.log(luxarycar.sort());

let alphabet =["d", " x" , "z" , "a" , "b", "n" ];
console.log(alphabet.sort()); // A , B , D , N , X , Z

// ------------------------->PRACTICE QUESTIONS 
let  lang = ["html" , "css" ,"javascript" , "python" , "java" ,"c#" , "sql"];
console.log(lang.reverse().indexOf("javascript")); // 4

// array referances(adress in memeory)
console.log([1] == [1]); // false
console.log([] == []);   // false

// constatnt arrays 
const array  = [1, 2 ,3 , 4];
array[0] = 9;
console.log(array); //Array(4) [ 9, 2, 3, 4 ]
const g  = 10;
//g = 9.8;
console.log(g); // errotrt

//nested arrays(multidimensional arrays)
let number = [[1,2] , [3,4] , [5,6]];
console.log(number);
/*  
Array(3) [ (2) […], (2) […], (2) […] ]
​
0: Array [ 1, 2 ]
​
1: Array [ 3, 4 ]
​
2: Array [ 5, 6 ]
​
length: 3
​
<prototype>: Array []
*/
let numbers = [[1,7] , [5,9] , [3,6]];
console.log(numbers);
console.log(numbers.length); //3
console.log(numbers[0]);     //Array [ 1, 7 ]
console.log(numbers[0].length); //2
console.log(numbers[0][0]); //1
console.log(numbers[0][1]);  //7

//<--------------practice questions -------------------------->
let tictactoe =[["x" , null , "o"] ,[null , "x" , null] , ["o" ,null,"x"]];
console.log(tictactoe);
console.log(tictactoe[0][1] = '0');