// Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag

let newButton = document.createElement("button");
newButton.innerText = "click me";
newButton.style.backgroundColor = "red";
newButton.style.color = "while"

//accessing body

let body = document.querySelector('body');
//adding button
body.prepend(newButton);