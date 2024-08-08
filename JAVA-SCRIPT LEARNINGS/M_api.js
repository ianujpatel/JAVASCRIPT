//[API] => Application Programming Interface
//[JSON] => javascript Object Notation www.jason.org
// Acessing  Data from JSON
/*
 <1> JASON.parse(data)Method
 To Parse a string data into a js object


 <2> JSON.stringfy(json)Method 
 to parse a js object data into Json


*/

let jsonRes = `{"fact":"The first official cat show in the UK was organised at Crystal Palace in 1871.","length":78}`
console.log(jsonRes);

let validres = JSON.parse(jsonRes);
console.log(validres.fact);

let candidate = {
    name : "anuj",
    marks : 64,
};
console.log(JSON.stringify);

// TESTING API requests 
/*
[tools]
1. hoppscoth
2.postman
*/

//[AJAX] => Asynchronous javascript and xml


// HTTP Verbs 

/*
Example 
.get
.post
.Delete
*/

//[Status Codes]

/*
EXAMPLES
# 200 - OK
# 404 - Not Found
# 400 - Bad Request
# 500 - Internal Server Error 
*/

//Addition-information in URL

/*
Querry Strings 
https://www.google.com/search?q=harry+porter
                        q-> key ,harry -> value 
*/


// HTTP HEADERS
/*
HEADERS additional information supply 
*/

// in past request is sending through xml http request obj

/*
[our first API Request]
in past request is sending through xml http request obj
Using fetch
*/
let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response) =>{
//     console.log(response);
//     response.json().then((data) =>{ // for data redable format
//         console.log(data);
//     });
// }).catch((err) => {
//     console.log("error -" , err);
// });

//Using Fetch With Async And Await
async function getfactz(){
try{
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);

    let resp2 = await fetch(url);
    let data2 = await resp2.json();
    console.log(data2);
}
catch(err){
    console.log("Error-",err);
}
console.log("bye");
}
