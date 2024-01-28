// access paragraph
let para = document.querySelector(".para")

// now access class
para.getAttribute("class") 

//byusing setAttributes it will overwrite the class
// para.setAttribute("class", "newPara")

// we use classList

para.classList.add("newPara")