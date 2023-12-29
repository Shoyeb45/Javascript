 a = 8;
 b = "6";
// "==" operator - Does not check data type (convers string to number first then compare)
console.log("Relational");
console.log("a == b", a == b); //False
console.log("a != b", a != b);

//Strict equals to and not equals also check data types, and then compare

console.log("a === b", a === b); //True
console.log("a !== b", a !== b);  //False
