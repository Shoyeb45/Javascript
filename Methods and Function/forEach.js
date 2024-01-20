let arr = [12, 45, 90, 19]

arr.forEach( function add2(ele){ //ele will be for each and every element of array, and take input from the arr
    console.log(ele+2)
});

//By using arrow function

let city = ["Bangalore", "Ahemdabad", "Jaipur", "Gandhinagar"]

city.forEach(val => {
    console.log(val+","+ "India");
});

city.forEach((val, idx, arr) =>{
    console.log("The element",idx+1,"is",val,"in an array",arr);
});