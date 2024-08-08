console.log("*******************hello Advanced javascript***********");
/*[CALL STACK]:-ek data structure hai jo track krta hai konshe function ka call chal rha hai*/

function hello(){
    console.log("inside hello fnx");
    console.log("hello");
}

function demo(){
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo();
console.log("done , bye!");

/*[Visualizing the call stack]*/

function one() {
    return 1;
}
function two(){
    return one()+one();
}

function three(){
    let ans = two() + one ();
    console.log(ans); // 3
}
three(); 

//[Break Points] :- used for debugging(deubuging means finding bug)

// [JS is Single Threaded] :- AT one time js only execute one task 
// => synchronus nature
let x = 25;
console.log(x);
let y = 10;
console.log(y);
console.log(x + y);

// => Asynchronus Nature




// setTimeout(function(){
//     console.log("i'm ironMan");
// },2000); // but here two task executing at same time bcs set timeout executing through browser and browser is multithreaded language bcs it's written in c++ and c++ is multithreaded language;

// console.log("hello");




//javascript is synchronus nature but how javascript act as asynchronus nature

//[CALL BACK HELL]

heading = document.querySelector("#MYHELL");

// setTimeout(()=>{
//     heading.style.color = "red";
// },1000);
// setTimeout(() =>{
//     heading.style.color = "orange";
// },2000);
// setTimeout(()=>{
//     heading.style.color = "purple";
// },3000);

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        heading.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
}
// callbackNesting -> callBackHell
changeColor("red" , 1000 ,()=>{
    changeColor("orange",1000,() =>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000);
        });
    });
});

/* Promises :- The Promises objects represents the eventual completion (for failure) of an 
asynchronous operations and its resulting values */

//[Setting up for Promises]

function savetodb(data , sucess , failure){
    let internetSpeed = Math.floor(Math.random()*10)+1
    if(internetSpeed>4){
        sucess();
    }else{
        failure();
    }
}
savetodb(" im ironman",
    () => {
    console.log(" sucess:your data is saved:");
    savetodb("hello world" ,() =>{
        console.log("sucess2: data2saved");
        savetodb("Anuj", () => {
            console.log("sucess3: data3 saved");
        } , () => {
            console.log("failure3:weak connection");
        })
    },() => {
        console.log("failure2: weak connection data not saved ");
    })
},() => {
    console.log("failure : weak connection ,data is not saved");
});



/* [Refactoring with Promises] :-  resolve & reject 
Resolve -> sucess
reject -> failure
*/

function Savetodata(data){
    return new Promise(( resolve , reject) => {
    let InternetSpeeds = Math.floor(Math.random()*10)+1;
    if(InternetSpeeds>4){
        resolve("Sucess  : data was saved");
    }else{
        reject("failure : data was not saved");
    }
    });
}

/*[Promise]
then() & catch()
then -> fullfiled-> sucess;
ctch -> reject->error
*/


// Savetodata("captainAmerica")
// .then(()=>{
//     console.log("promise resolved");
// })
// .catch(() => {
//     console.log("promise rejected");
// });



/*
[Promise Chaining] :- ImprovedVersion
*/
Savetodata("theBillyButcher")
.then(()=>{
    console.log("data1 is saved");
    return Savetodata("helloWorld");
})
.then(() => {
    console.log("data2 is saved");
    return Savetodata("imAnujPatel");
}).then(() =>{
    console.log("data3 is saved");
})
.catch(()=>{
    console.log("promise was rejected");
});

/*
[Results and errors in Promises]
promises are rejected and resolved with some data (valid results or errros);
*/

Savetodata("theBillyButcher")
.then((result)=>{
    console.log("data1 is saved");
    console.log("result of promise ",result)
    return Savetodata("helloWorld");
})
.then((result) => {
    console.log("data2 is saved");
    console.log("result of promise :",result)
    return Savetodata("imAnujPatel");
}).then((result) =>{
    console.log("data3 is saved");
    console.log("result of promise",result)
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("result of promise",error);
});

/*[Refectoring old code]
let's apply promises to our callback hell 
*/



// power = document.querySelector("#POWER");
// function changeColor(color,delay){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             power.style.color = color;
//             resolve("color changed");
//         },delay);
//     });
// }
// changeColor("red",1000)
// .then(() =>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("red color was completed");
// })


