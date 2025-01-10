const btns = document.getElementsByClassName("movie");

function changeColorOne() {
    btns[0].style.color = "blue";
}
function changeColorTwo() {
    btns[1].style.color = "red";
}

function changeAll() {
    
    document.querySelectorAll(".movie").forEach((btn) => {
        btn.style.color = "red";
        btn.style.fontSize = '40px';
    });
}