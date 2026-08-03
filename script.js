function practice1() {
    try {
        console.log(userName);
    } catch (error) {
        console.log("Error Caught!");
        console.log(error.message);
    }

    console.log("----------------");
}

function practice2() {
    function divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }

        return a / b;
    }

    try {
        console.log(divide(20, 0));
    } catch (error) {
        console.log(error.message);
    }

    console.log("----------------");
}

function practice3() {
    try {
        let age = "abc";

        if (isNaN(age)) {
            throw new Error("Age must be a number.");
        }

        console.log(age);

    } catch (error) {
        console.log(error.message);
    }

    console.log("----------------");
}

function practice4() {
    let json = "{name:'Anoop'}";

    try {
        let data = JSON.parse(json);
        console.log(data);
    } catch (error) {
        console.log("Invalid JSON");
        console.log(error.message);
    }

    console.log("----------------");
}

function practice5() {
    try {
        console.log("Inside try");

        throw new Error("Something went wrong!");

    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Finally always executes.");
    }

    console.log("----------------");
}