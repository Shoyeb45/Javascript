let words = ["Hello World", "Good Morning"];

let splittedWords = words.flatMap((word) => {
    return word.split(" ");
})


console.log(splittedWords);

