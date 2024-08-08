//console.log("<...........loops.............>");
//<-------------------------------------------------------FOR LOOPS--------------------------------------------->

//initialization ; condition ; updatations 

for(let i = 1 ; i <=5; i++){
    console.log(i);   // 1 2 3 4 5
}

//Print oddd numvber 1  TO 15
for (let i = 1; i<=15 ; i= i+2){
    console.log(i); 
}
// print even nums 1 to 10
for (let i = 2 ; i<=10 ; i=i+2){
    console.log(i);
}


// <-----------------------------------------------------INFINITE LOOPS ------------------------------------------>
/*
ending condition is not given
*/

// print multiplication table of 5 
for(let i = 5;i<=50;i=i+5){
    console.log(i);
}

// user input 

/*let n = prompt("write your numbers");
n = parseInt(n);
for(let i = n; i<=n*10 ; i= i +n){
    console.log(i);
}*/

// <---------------------------------------------------------NESTED  FOR LOOPS------------------------------------- >

for(let i = 1 ; i<=3; i++) {
  for(let j = 1; j <=3 ; j++){
    console.log(j);
  }
}

//<-----------------------------------------------------------WHILE LOOP--------------------------------------------->
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}
// <-----------------------------------------------------------FAVOURITE MOVIE ---------------------------------------->


/*const favourite = "avtar";
let guess = prompt("enter the name");
while((guess != favourite) && (guess != "quit")){
    console.log("wrong guess");
    guess = prompt("please try again");
}
if(guess == favourite){
    console.log("congrats");
}else{
    console.log("quit");
}
*/
// <-------------------------------------------------------------BREAK KEYWORD-------------------------------------------->
// let count =1;
// while(count <=5){
//     if(count == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("we used break at 3");

//<---------------------------------------------------------------LOOPS WITH ARRAYS---------------------------------------->
console.log("anuj");
let fruits1 = ["apple " ,"mango","litchi","banana"];
for(let i = 0; i<fruits1.length; i++){
    console.log(i,fruits1[i]);// apple ,mango , litchi , banana
}

let fruits2 = ["apple " ,"mango","litchi","banana"];
for(let i = fruits2.length-1; i > 0; i--){
    console.log(i,fruits2[i]);// banan , litchi ,mango,apple
}

//<------------------------------------------------------------------LOOPS WITH NESTED ARRAYS---------------------------------------->
// nested loops with nested arrays 
let heroes = [["ironman" ,"spiderman" , "thor"] ,["superman","wonder - woman" , "flash"]];
for(let i = 0;i<heroes.length;i++){
    console.log(i,heroes[i]);
    for(let j = 0;j<heroes[i].length;j++){
        console.log(`j = ${j} ,${heroes[i][j]}`);
    }
}
let student = [["anuj", 95] , ["pallavi",80] ,["yashavi" , 90]];
for(let i = 0; i<student.length;i++){
    console.log(`info of students #${i}`);
    for(let j=0;j<student[i].length;j++){
        console.log(student[i][j]);
    }
}


//<-----------------------------------------------------------------FOR OF LOOPS------------------------------------------------------------ >
/*
syntax
for(element of collection){
    // do somethings
}
*/

for(i of fruits1){
    console.log(i); // apple banana litchi mango
}

//<-----------------------------------------------------------------NESTED FOR OF LOOPS------------------------------------------------------------ >
for(list of heroes){
    console.log(list);
    /*Array(3) [ "ironman", "spiderman", "thor" ]
    Array(3) [ "superman", "wonder - woman", "flash" ]*/
}
for(list of heroes){
    for(name of list){
        console.log(name);
        /*
        ironman
        spiderman
        thor
        superman
        wonder- woman
        flash
        */
    }
}