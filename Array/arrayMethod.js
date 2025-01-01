let manga = ["JJK", "Jojo", "One piece"]
console.log("Original Array:\n",manga);

//1. push()
console.log("\npush\n")
manga.push("Vagabond", "Kingdom");
console.log("After using push:\n",manga);

//2. pop()
console.log("\nPOP\n")
let deletedArray = manga.pop();
console.log("The delete entry:",deletedArray);
console.log("After using pop:\n",manga);

//3. toString()

console.log("\ntoString\n");
manga.push("Kingdom");
console.log("Array",manga);
console.log("Converted string:\n",manga.toString()); //It will also converts numbers to string

//4. concat()

console.log("\nconcat\n");
let mangaka = ["Gege", "Araki", "Oda", "Inoue"]; 
console.log(manga.concat(mangaka)); //Also we can add  multiple array

let mangaka1 = ["Hara"];
console.log(manga.concat(mangaka, mangaka1));

//5. unshift

console.log("\nunShift\n");

manga.unshift("Berserk");
console.log("After using unshift",manga)

//6. shift

console.log("\nShift\n");

let deletedItem = manga.shift();
console.log(manga);
console.log("Deleted Item:", deletedItem);


//7. slice

console.log("\nSlice\n");

console.log(mangaka.slice(1, 2));
console.log("Original array:\n",mangaka)

// 8. splice
console.log(manga);
console.log("after using splice\n", manga.splice(1,3));
console.log("Original array:\n",manga)
