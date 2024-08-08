// [ASYNC JS] -> async & await keyword

async function greeting1() {
    throw "404 page not found"
    return "hello" ;  // return a promise
}
greeting1()
.then((result) =>{
console.log("promise was resolved");
console.log("result was : ",result);
})
.catch((err) => {
    console.log("promise was rejected with err :",err)
});

let demolect = async() => {
    return 5  // return a promise
}


// AWIT KEYWORDS - {AWAIT  means kishi chiz ka intezar karna}
/*
Pause the execution of it surrounding async function until the promise is settled
(resolved or rejected)
jb haam chhahte hai ek call complete hot to dushri call ush case me hmm await key use krte hai 
*/

function getnos(){
    return new Promise((resolve,reject) =>{
        let nos = Math.floor(Math.random()*10) +1 ;
        console.log(nos);
        resolve();
    },2000);
}
async function demonos() {
    await getnos();
    await getnos();
    await getnos();
}
console.log(demonos());

//[Handling rejection with await keywords]



// let imid = document.querySelector("#imid");
// function changeColor1(color,delay){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             let namber = Math.floor(Math.random()*9)+1;
//             if(namber > 1){
//                 reject("promise rejected");
//             }
//             imid.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed !")
//         },delay);
//     });
// }
// async function demochangecolor(){
//     try{
//         await changeColor1("red",1000);
//         await changeColor1("blue",1000);
//         await changeColor1("purple",1000);
//         await changeColor1("green",1000);
//     } catch(err){
//         console.log("error caught");
//         console.log(err);
//     }
//     let s = 5 ;
//     console.log(s);
//     console.log("new number" , s + 3);
// }

