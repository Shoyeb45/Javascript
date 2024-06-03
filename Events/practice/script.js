const element = document.querySelectorAll(".star");

function addTag(x) {
    const newTag = document.createElement("h1");
    newTag.innerHTML = `${x} star`;
    document.body.appendChild(newTag);
}   

// element[0].addEventListener("click", () => {
//     const newTag = document.createElement("h1");
//     newTag.innerHTML = `${1} star`;
//     document.body.appendChild(newTag);
    
// });
const newTag = document.createElement("h1");

for(let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", () =>  {
        let x = "";
        for(let j = 0; j <= i; j++) {
            x += "⭐";
        }
        newTag.innerHTML = `<i>${x}${i + 1} star</i>`;
        newTag.style.fontSize = "50px";
        newTag.style.textAlign = "center";
        newTag.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
        document.body.appendChild(newTag);
        // newTag. = "";
    })
}