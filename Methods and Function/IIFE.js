// Immediately Invoked Function Expression

(function someFun() {
    // Named IIFE
    console.log("lot of work.........");
})();   // Semi colon here is super important 

// Arrow function 
(() => {
    console.log("Server is running");
})();


// IIFE with parameters
(name = (port) => {
    console.log(`Server is running on http:\\\\localhost:${port}`);
})(4000);
