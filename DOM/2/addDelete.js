// 1.
let Button = document.createElement("button");//creating button
Button.innerText = "Register" //Adding innertext
let h1 = document.querySelector(".yujiNanami")

h1.before(Button);

// 2. 
let text = document.createElement("h3"); // creating h3
text.innerHTML = "<b><i>Javascript notes are also there</i></b>"
text.style.color = "blue"

let Pic = document.querySelector("img"); // accessing img

Pic.after(text)