var age=17  //var is keyword which is not used nowadays, because it allows us to redeclare the same variable  (ECMA script-2015)  
var age=19  //we've redaclared age variable

let c=9    //let is used for defining variable and it does not allow to redeclare , but we can reassign
c=10
const PI = 3.14; //we can't redaclare or update the idenitifier with this keyword 
let h; // h will be undefined
console.log("Value of pi is",PI);
console.log("Your age is ",age);
console.log(h) 

//For let keyword we can just initilize any variable without assigning value but the same can't be done with const.