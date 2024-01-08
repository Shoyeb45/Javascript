let arr = [1, 5, 6 , 9, 10, 11, 89];

console.log("Deleted element",arr.splice(1, 2 , 10, 14));  //From index 1 it will delete two elements and eill replace with 10 14
//So
console.log("After using arr.splice(1, 2 , 10, 14) :\n",arr);
//new  [1, 10, 14, 9, 10, 11, 89]
//1. Adding element
//adding 6 in place of 14
arr.splice(2, 0, 6);
console.log(arr);

//Delete element
//new [1, 10,  6, 14, 9, 10, 11, 89]
//we have to delete 6
arr.splice(2, 1);
console.log(arr);
console.log("Length after deleting element:",arr.length);

//Replacing element
//new [1, 10, 14, 9, 10, 11, 89]

//To replace 89 with -9
arr.splice(6, 1, -9);
console.log(arr);
