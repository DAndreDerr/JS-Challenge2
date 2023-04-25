// Functions

// create a function called Adder is going to take 3 arguments

function adder(x, y, z) { 
    // created a function named adder with parameters x, y, z
    return x + y + z;
}

function multiply(a, b, c){
    // created a function named multiply that returns multiplied output
    return a * b * c;
}

// console.log(adder(1, 2, 3));
// console.log(multiply(10, 20, 30));


// Create a Function called "isString" that takes 3 arguments (x, y, z)

function isString(x, y, z) {
//isString checks if each argument is a string using our Typeof keyword 
// if each argument is a string it will note that 
    if (typeof x === "string" && typeof y === "string" && typeof z === "string"){
        console.log("yep they all strings")
    } else {
        console.log("Mane these are NOT all strings")
    }
 // if anyone of them is NOT a string it will also note that
}

// isString("string", "string", "string");
// isString("scoobydoo", 27, "ahhhh");


// Vowel checker Example

function vowelChecker(x) {
// vowel checker will grab the first letter (character).......
    let firstChar = x.toLowerCase().charAt(0)

// then checks if that first letter is a vowel

    if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
        console.log("omg the first letter is a vowel :)");
    } else {
        console.log("AYY this don't start with no vowel >:(");
    }
}

vowelChecker("booo");
vowelChecker("ahhh");
