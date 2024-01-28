let Image = document.querySelector("img");
console.log(Image)

// Now let we have to access the alt text of img
let altText = Image.getAttribute("alt")
console.log("alt Attribute of image:",altText)

let heading1 = document.querySelector("h1")
console.log("Attribute of h1:", heading1.getAttribute("name"))

// Set Attribute
heading1.setAttribute("name", "Heading")

// changing alt text of img
Image.setAttribute("alt", "Nanami and Yuji")

// style manipulation

let div = document.querySelector("#notion") //created node
div.style.height = "100px"
div.style.backgroundColor = "cadetblue"
div.style.fontSize = "36px"
