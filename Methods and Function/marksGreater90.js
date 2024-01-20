let marks = [88, 79, 98, 95, 90]

let GreaterThan90 = marks.filter((val) => {
    return val >= 90 ;
});

console.log("Marks grerater than or equal to 90",GreaterThan90)