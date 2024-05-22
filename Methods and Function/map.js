let number = [12, -9, 11, 10]

let newNumber = number.map((val) => {  //Created new array
    return (val + 8);  //returned array which will going to become new array element
});
console.log(newNumber)

const newArray = number.map( (num) => num * 3)
console.log(newArray);

