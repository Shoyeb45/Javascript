class CustomError extends Error {
    constructor(name, message) {
        super(message);
        this.name = name;
    }
};

const givenMail = "shoyeb@gmail.com";

function register(email, password) {
    if (email == givenMail) {
        throw new CustomError("DuplicateEmail", "Email already exist in database, please choose another email")
    }

    console.log(`Registered succefully with ${email}\nPlease click on the confirmation link sent on your mail`);
    return true;
}


try {
    register("shoyeb@gmai.com", "Shoyeb12");
} catch (error) {
    console.log(`${error.name} : ${error.message}`);
}

