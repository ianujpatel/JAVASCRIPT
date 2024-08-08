console.log("****************************DOM**********************************");

/*
DOM(documents objects models)
the dom represnts a documents with a logical tree 
it allows us to manipulate / change webpage contents (html , elemnts ).

*/
console.log(document.URL); //http://127.0.0.1:5500/
/*
=> getting HTML elements / using quarryselectors /all
=> quarysellector return "first elements" that match css selectors
=> to get all method we use quarysellectorall
*/
// access elemnts with quarryselectors
let resultedElements = document.querySelectorAll('p')
console.log(resultedElements); //NodeList [ p, p ]

resultedElements.forEach(elements =>{
    console.log(elements);
});

// access elements with class 
let elementsbyclass = document.querySelector('.coderdost');
console.log(elementsbyclass); // <h2 class="coderdost">

// access elements with id 
let elementsbyid = document.querySelector('#coders');
console.log(elementsbyid); // <h3 id="coders">

// others way to get htmls elements by tagName
let tagNameelements = document.getElementsByTagName('p');
console.log(tagNameelements); // HTMLCollection { 0: p, 1: p, length: 2 }

// other way to get html elemnts by classNames

let classnames = document.getElementsByClassName('coderdost');
console.log(classnames); // HTMLCollection { 0: h2.coderdost, length: 1 }

// get elemets by id 


let elementsbyidnames = document.getElementById('coders')
console.log(elementsbyidnames);

// updating and changing content

/*innerText :- it ignore spaces
retrive and set content in plain text 
*/
let heading = document.querySelector('h1');
console.log(heading);
console.log(heading.innerText); // good morning Anuj

/*innerHtml:- it does not ignore spaces
retrive and set content in HTML formate 
*/

console.log(heading.innerHTML); 

// set content by innerText 
let content = document.querySelector('.content');

content.innerText = "<p> great coders </p>" //<p> great coders </p>

// set content by innerhtml
 
content.innerHTML = "<p> great coders </p>"// great coders 

content.innerHTML = "<p> great coders </p>"

// getting and setting attribute of elements

//<get elements>
let coderdostlink = document.querySelector('a');
console.log(coderdostlink.getAttribute('href')); //https://youtu.be/lGmRnu--iU8?si=JHmKYGjmrZJdjerN

//<setelements>
coderdostlink.setAttribute('href',"https://youtu.be/NJwRQgsu1Q8?si=Cc9HG9DaKSUexxro");
console.log(coderdostlink.getAttribute('href'));//https://youtu.be/NJwRQgsu1Q8?si=Cc9HG9DaKSUexxro
coderdostlink.innerText = "promiseinjavascript";

// Adding the style
let headings = document.querySelector('h1');
headings.style.backgroundColor ="yellow";

// add remove and replace class of elemnts

// <add the class>
heading.classList.add('newclass');

//<remove the class>
heading.classList.remove("newclass");

//<replace the class>

heading.classList.replace("main","newclass");

// Parent , child , siblings elements
let parentElement = document.querySelector('.contents')
// all children of parent
console.log(parentElement); // <div class="content"
console.log(parentElement.children); // HTMLCollection { 0: p, length: 1 }
console.log(Array.from(parentElement.children));  // it converts html collection from array

Array.from(parentElement.children).forEach(function(element9){
    element9.classList.add("coders1")})

// child elements 

let childElements =document.querySelector('h6');
console.log(childElements.parentElement);

// siblings elements
console.log(childElements.nextElementSibling);
console.log(childElements.nextElementSibling.previousElementSibling);
