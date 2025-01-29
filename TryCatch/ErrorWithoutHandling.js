let num = 1;

try {
    console.log(num.toUpperCase());
    
} catch (error) {
    console.log(`${error.name} : ${error?.message}`);
}