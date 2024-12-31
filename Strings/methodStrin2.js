let a = "My name is Shoyeb Ansari";

// 1. substr
console.log(a.substr(0, 4));
console.log(a.substr(0,5));

// 2. substring
console.log(a.substring(1, 4));
console.log(a.substring(1, 5));

// 3. includes()
console.log(a.includes("Shoyeb"));
console.log(a.includes("shoyeb"));

// 4. replace()
console.log(a.replace("Shoyeb Ansari", "Prakhar Sahu"));

// 5. lastindexOf()
console.log(a.lastIndexOf("Sho"));

// 6. startsWith()
console.log(a.startsWith("My"));

// 6. endsWith()
console.log(a.endsWith("ar"));

// 7. match()
console.log(a.match("Shoyeb"));

// 8. repeat()
console.log("Hii ".repeat(8));

