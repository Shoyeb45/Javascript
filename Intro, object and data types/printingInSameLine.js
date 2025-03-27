process.stdout.write("Hello, ");
process.stdout.write("World!\n");

k = [1,2,3];
sum = 0;

for (i of k) {
    sum += i
    process.stdout.write(i + " ");
}
console.log();


let s = 0;
console.log(sum / k.length);

let mn = 1e9;

for (i of k) {
    mn = Math.min(mn, i)
}

console.log(mn);

newArr = [1,4,5,2,4,1,3,123,12,312]
delete(newArr[2])
console.log(newArr);

// Shift method
newArr = [1,4,5,2,4,1,3,123,12,312]
newArr.shift()
console.log(newArr);
console.log(newArr.toString());

// join
console.log(newArr.join("-"));
console.log(newArr.slice(1,4));

// foreach
newArr.forEach(element => {
    element -= 2  // double the items9
});

newArr = newArr.map(ele => 
    ele *= 2
)
process.stdout.write("Hii something nice\n")
console.log(newArr);