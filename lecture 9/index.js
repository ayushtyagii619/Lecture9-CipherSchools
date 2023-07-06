//normal function
function square(num=4){
    return num*num;
}
console.log(square(5));
{
    var s = 50;
}
function area(){
    let l = 10;
    let b = 20;
    return l*b;
}
console.log(area());

//number
var  l =16;
console.log(typeof l);

//string
var name = "Ayush";
console.log(typeof name);

//obj
var obj = {
    firstName: "ayush",
lastName: "tyagi",
};
console.log(obj);
console.log(obj.firstName);
console.log(obj.lastName);

//obj2

var car= {
    name: "Brezza",
    brand: "Maruti",
    model: 102,
    "model": [101, 102, 103],
    car2 : {
        color: "red",
    }
    
};
 console.log(car);
 console.log(car.name);
 console.log(car.model);
console.log(car.car2.color);
console.log(car["model"][2]);

//shortest program

a=10;
console.log(window.a);
console.log(a);
console.log(this.a);

//lexical environment = local memory + a pointer referencing to the lexical environment to it's parent 


//Temporal Dead zone is the phase b/w the hosting stage
// and till a particular variable is assigned

console.log(p);
var p =10; // change the var to let to eliminate temporal dead zone 

