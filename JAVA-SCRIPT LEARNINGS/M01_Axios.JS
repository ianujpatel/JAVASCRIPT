console.log("Starting With Axios")

//[AXIOS] :- Libray To Make HTTP Requests //
let url2 = "https://catfact.ninja/fact";
let battn = document.querySelector("#factbutton")
battn.addEventListener("click", async() =>{
    let fact = await gettingfacts();
    let p = document.querySelector("#factresult");
    p.innertext = fact;
});
async function gettingfacts(){
    try{
        let respons = await axios.get(url2);
        console.log(respons.data.fact);
    }
    catch(e){
        console.log("error -" ,e);
    }
}