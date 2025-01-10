(function name(params) {
    const btn = document.querySelector("#submit-btn");
    let times = 0;
    btn.addEventListener("click", (event) => {
        times++;
        document.getElementById("textArea").innerHTML = `Button has been clicked ${times} times`;
    });
})();