// 2. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.

// combined selecting all the div
let div = document.querySelectorAll(".box")
// Now div variable is array

div[0].innerText = "Hii" // accessing first div
div[1].innerText = "How are you?" // accessing first div
div[2].innerText = "Would you need water?" // accessing first div

// Let's change text
div[0].innerHTML = "<b>Hii</b>" // accessing first div
div[1].innerHTML = "<b>How are you?</b>" // accessing first div
div[2].innerHTML = "<b>Would you need water?</b>" // accessing first div