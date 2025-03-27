// We can write regex in js by starting and ending with '/', then we can write our regex
// Validating email and phone number
function validateInput(phone, email) {
    const regexPhone = /^\d{10}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return  {
        isPhoneValid : regexPhone.test(phone),
        isEmailValid : regexEmail.test(email)
    };
}

console.log(validateInput("1241241413", "dsfa@gmail.com"));
