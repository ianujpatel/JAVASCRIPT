console.log("hello objects");
/*
objects to store keyed collection & complex entities
propert => (key, value)pair
object are a collection of properties 
*/
//<----------------------------------------------------------CREATING OBJECT LITERALS ---------------------------------------------------------->
let profile = {
    name : "anuj",
    age :20 ,
    city : "bihar"
};
console.log(profile);
const item = {
    price : 100,
    discount : 50,
    colours34 : ["red","blue"]
};
console.log(item);
//<--------------------------------------------------------CREATING A POST------------------------------------------------------------------------------->
const post = {
    username : "@anuj patel",
    content : "i am a frontend engineer",
    likes : 110,
    repost : 8,
    tags : ["@shardha" , "@disha"]
};
console.log(post);
//<----------------------------------------------------GET VALUES---------------------------------------------------------------------------------->
console.log(post["content"]); //i am a frontend engineer
console.log(post["likes"]); //11o
//[another method]
console.log(post.content); // i am a frontend engineer
console.log(post.likes); // 110
/*
    JS automatically convert objects keys to strings
    even if we made the number as a key , the number will be converted to string.
*/
const obj = {
    1 : "a",
    2 : "c",
    true : "d",
    null : "e",
    undefined : "f",
};
console.log(obj);
//<-----------------------------------------------------ADD UPDATE VALUES--------------------------------------------------------------------------->
const stud = {
    name1 : "anuj kumar",
    age2 : 20,
    grade : "A",
    city : "patna"
    
};
console.log(stud);
console.log(stud.city="delhi"); //------------> value update 
console.log(stud); // city name is changed patna to delhi
console.log(stud.gender = "male"); // value update 
console.log(stud); // key gender and value male are created in stud objects
console.log(stud.grade =["a","b","c"]);
console.log(stud);
// for delete
console.log(delete stud.city); 
console.log(stud);// stud city is deleted
//<------------------------------------------------------OBJECT OF OBJECT----------------------------------------------------------------------------->
// storing information of multiple students{nesting}
const classinfo ={
    anam : {
        grade : "A+",
        city : "lalganj",
    },
    avni :{
        grade : "A",
        city : "Patna",
    },
    pallavi:{
        grade : "o+",
        city : "muzaffarpur",
    }

};
console.log(classinfo);
console.log(classinfo.anam);
console.log(classinfo.avni);
console.log(classinfo.pallavi);
console.log(classinfo.pallavi.city);
console.log(classinfo.pallavi.city = "barahmpura");
console.log(classinfo.pallavi);
//<----------------------------------------------------------ARRAY OF OBJECTS------------------------------------------------------------------------>
const studinfo = [
    {
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
    }
]

console.log(studinfo);
console.log(studinfo[0]);
console.log(studinfo[1].name_2);
console.log(studinfo[2].grade);
console.log(studinfo[2].expression = "verycute");
console.log(studinfo);
//<---------------------------------------------------------------MATH OBJECTS------------------------------------------------------------------------------------>
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(12));
console.log(Math.abs(-12));
console.log(Math.abs(-12.5));
console.log(Math.pow(2,5));
// floor ---------------->nearest smallest int value 
console.log(Math.floor(5.5));
console.log(Math.floor(5.9999999999));
console.log(Math.floor(-5.5));
console.log(Math.floor(-5));
// ceil ---------------------->nearest larger value
console.log(Math.ceil(5));
console.log(Math.ceil(5.5));
console.log(Math.ceil(-5));
console.log(Math.ceil(5.4));
console.log(Math.ceil(-5.7));
// math.random ---------------->gives value from 0 to 1 {1 excluded}
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//<----------------------------------------------------<RANDOM INTEGERS----------------------------------------------------------->

// FROM 1 TO 10
console.log(Math.random());
console.log(Math.floor(Math.random()*10)); //9
console.log(Math.floor(Math.random()*10)); //8
//from 1 to 100
console.log(Math.floor(Math.random()*100));//34
console.log(Math.floor(Math.random()*1000));//541
// but its never equal to 1 and 10 so we add +1
console.log(Math.floor(Math.random()*10)+1);// in +1 case we did'nt get 0
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

// QUESTION :- Generate a random number between 1 to 100
console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*100)+1);

// QUESTION :- Generate a random number from 1 to 100
console.log(Math.floor(Math.random()*5)+1);
console.log(Math.floor(Math.random()*5)+1);
console.log(Math.floor(Math.random()*5)+1);
console.log(Math.floor(Math.random()*5)+1);
//QUESTION :- Generate a random number from 20 to  25
console.log(Math.floor(Math.random()*5)+20); // this part generate only 20, 21 ,22 , 23 24 ,logic :-[20 + (1,2,3,4)]
console.log(Math.floor(Math.random()*5)+21); // this part generate only 20, 21 ,22 , 23 24 ,25 ,logic :-[20 + (1,2,3,4 ,5)]