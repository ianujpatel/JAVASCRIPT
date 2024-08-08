console.log("******************DOM EVENTS***************************");
/*
[DOM EVENTS] :- Events are signals that somethings has occured.(user inputs / actions)
onclick (when an elements is clicked);
onmouseenter (when mouse enters an element);
*/
let btns = document.querySelectorAll('button');
console.log(btns);
btns.onclick = function () {
    console.log("button was clicked");
}

function sayhello(){
    console.log("hello")
}
btns.onclick = sayhello;

for(btn of btns){
  btn.onclick = sayhello; // sayhello() => not use this only use => sayhello
  btn.onmouseenter = function (){
    console.log("you entered a button");
  };
    // console.dir(btn); 
}

//[EVENT LISTENERS] // multiple function works

// btn.addEventListener("click" , function (){
//     console.log("buttonclicked");
// });

function saname(){
    alert("anuj");
}
function saynamaste(){
    alert("namaste");
}

for(bttn of btns) {
    // bttn.addEventListener("click",saynamaste);
    // bttn.addEventListener("click",saname);
    bttn.addEventListener("dblclick" , function(){
        console.log("you doble clicked");
    })
};

// function saname(){
//     alert("anuj");
// }
// function saynamaste(){
//     alert("namaste");
// }


// generate random color

let btn6 = document.querySelector('#gbutton');

btn6.addEventListener("click" ,function(){
    let h3 = document.querySelector("h3");
    let randomcolor = getrandomcolor();
    h3.innerText = randomcolor;

    let boxcolor = document.querySelector('#chgcolor');
    boxcolor.style.backgroundColor = randomcolor;

    console.log("color updated")
})


function getrandomcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;
}


let p = document.querySelector("h4");
p.addEventListener("click" , function() {
    console.log("paragraph was clicked");
});


/*
[this] :- in Event Listeners
When 'This' is used in a callback of event handler of something , it refers to that somethings 
*/

let butt = document.querySelector("#specialbutton");
butt.addEventListener("click",function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "red";
})

/*
[Keyword Events]
*/

let inp = document.querySelector("input");
inp.addEventListener("keydown" , function(){
    console.log("key was pressed");
})

let inp1 = document.querySelector("input");
inp1.addEventListener("keydown" , function(event){
    console.log(event);
    console.log("code =",event.code);
    console.log("key =",event.key);
})
// form events

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//    // console.log("submitted");
//     // extracting Form data 
//     let username = document.querySelector("#user");
//     let passwordofuser = document.querySelector("#password");
//     //console.dir(username);
//     console.log(username.value);
//     //console.dir(passwordofuser);
//     console.log(passwordofuser.value);
//     //anotherMethods of accessing username and passwordofuser
//     //console.dir(form);
//     console.dir(form.elements);
//     let userN = this.elements[0]; // form.elements[0]
//     let passU = this.elements[1];
// })

/*
[MoreEvents]
changeEvent :-the change event occurs when the value of an elements has been changed(only works on <input> , <textArea> and
 <select> elements).

inputEvents :- The input Events fires when the value of an <input> <select> ,or <textarea> elements has been changed
*/
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
 event.preventDefault(); 
    })
let users = document.querySelector("#user")
users.addEventListener("change", function(){
    console.log("input changed");
    console.log("finalvalue = " , this.value)
})

users.addEventListener("change", function(){
    console.log("input  event");
    console.log("finalvalue = " , this.value)
})



