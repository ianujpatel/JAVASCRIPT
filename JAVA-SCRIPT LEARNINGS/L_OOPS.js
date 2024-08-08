console.log("*H**E***l****l*****0");
// [OBJECT ORIENTED PROGRAMMING]
// Constructor function and the new operator
// We not Use "Arrow" Function as Constructor 
// Call "Constructor"   function using "new Keyword"

// 1 new {object} created empty initially
// 2 "this" = {object}
// 3 object linked to prototype
// 4 function automattically returns object

let Car1 = function(color,model){
    // instance  Proporties 
    this.color = "color";
    this.model = model;
    //not a good practice
    this.login = function(){
        console.log("login method");
    }
}
/*
Each object created by "constructor" function has an access
to all "methods" present inside that "constructor" ProtoType
*/
Car1.prototype.startEngine = function(){
    console.log("this is a start engine Method");
}

// we can also set "properties to prototype"
Car1.prototype.company = "honda";
let instanceofcar = new Car1("black" , 2023)
let newinstanceofcar = new Car1("purple" , 2024)

console.log(Car1.prototype);
console.log(instanceofcar);
console.log(newinstanceofcar);
instanceofcar.startEngine();
console.log(newinstanceofcar.__proto__) //->> it is same as
console.log(Car1.prototype);
console.log(Car1.prototype.isPrototypeOf(Car1))
// car.prototype is prototype of all object created through the Constructor 
let arrys = [2,3,4,5,6] ; // [] is same as new Array([])
console.log(arrys.__proto__,Array.prototype);
console.log(arrys.__proto__.__proto__);
console.log(arrys);

// ES6 Classes(They Still implement Prototype inheritance behind the scene)
//class Deceleration
class cars {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    newstartEngine(){
        console.log("this is start engine method of car class")
    }
    get _newstartEngine(){
        console.log("this is start engine methods using get")
    }
    set changecolor(color){
        console.log(this.color = color);
    }
    get description(){
        return `Color of Bike is ${this.color} and its model is ${this.model}`
    }
}
let hondas = new cars("red",2022);
console.log(hondas.__proto__);

/*
[Important Points] -->>
Classes are not hoisted ,
classes are also first class citizens (pass as an arguments or returns ) , 
classes are executed in strict mode 
*/

// [SETTERS AND GETERS ] ->> Allows you to define objects Accessors (Computed Properties)
hondas.newstartEngine(); // accessing as a function
hondas. _newstartEngine;// acessing as property
hondas.changecolor = "blue" // set as property
console.log(hondas.description);

/*
[Static Methods] :- static methods(Method whic is not present on constructor)
static method can never inherit to all objects 
"prototype" property but "Constructor itself"
*/

cars.breakmethod = function() {
    console.log("this is break method of car class");
}
cars.breakmethod();

// class inheritance (sub class)

// parent class

class bikes {
    constructor (color,model){
        this.color = color;
        this.model = model;
    }
    startBike(){
        console.log("this is start bikes");
    }
}

// child class
class bycicle extends bikes {
    // Add some new properties and "method as well"
    constructor(color,model,engineCapacity){
        super(color,model) // super is used to call its parent constructor
        this.engineCapacity = engineCapacity
    }
    bycycleMethod(){
        console.log("This is Method of bike class")
    }
}
let newbycicle = new bycicle("black",2023,"1255cc");
let newbycicle1 = new bycicle("purple",2024,"1205cc");
console.log(newbycicle , newbycicle1); 