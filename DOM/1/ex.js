let target1 = document.getElementsByTagName("h1");
console.log(target1);

// Targeting by class name
const target2 = document.getElementsByClassName("c2")
console.dir(target2)
console.log(target2)

// Target by id name
const target3 = document.getElementById("id3")
console.log(target3);
target3.outerText = "We never use this";

// 

const title = document.querySelectorAll("h1");

// Adding class and id
title[1].className = "title2";
title[1].className = "class2"


// Setattribute
title[0].setAttribute("class", "first-title")
title[0].setAttribute("id", "first-id")

title[1].textContent = "What is this? - modified text using textContet";
title[0].innerHTML = "<i><b>Using Inner HTML</b></i>";