
// clear statement code 
document.getElementById("clearStatement").onclick = function () {

    document.getElementById("originalStatement").innerText = "";
};

// clear output result
document.getElementById("clear-output").onclick = function () {
    document.getElementById("outputResult").innerHTML = "";
}


// Concatenate some strings

document.getElementById("concatenation").onclick = function () {
    let str1 = prompt("Enter the first string:");
    if (str1 === null || str1 === "") {
        alert("You must enter a name!");
        return;
    }

    let str2 = prompt("Enter the second string:");
    if (str2 === null || str2 === "") {
        alert("You must enter a string!");
        return;
    }
    let result = str1 + " " + str2;
    document.getElementById("outputResult").innerHTML = result;
};

// ask-name

document.getElementById("ask-name").onclick = function () {

    let name = prompt("what is your name?");
    if (name === null || name === "") {
        alert("You must enter a name!");
        return;
    }

    document.getElementById("outputResult").innerHTML = "Hello " + name + "!";
    document.getElementById("originalStatement").innerText = "Hello " + name + "!";
}


// comparison-operators

document.getElementById("comparison-operators").onclick = function () {
    let num1 = parseFloat(prompt("Enter the first number:"));
    if (isNaN(num1)) {
        alert("You must enter a valid number!");
        return;
    }

    // we can also use + sign to convert string to number
    let num2 = +prompt("Enter the second number:");
    if (isNaN(num2)) {
        alert("You must enter a valid number!");
        return;
    }

    let result = "";
    if (num1 > num2) {
        result = `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        result = `${num1} is less than ${num2}`;
    } else {
        result = `${num1} is equal to ${num2}`;
    }

    document.getElementById("outputResult").innerHTML = result;
}


// if-else-if

document.getElementById("if-else-if").onclick = function () {
    let age = parseInt(prompt("Enter your age:"));
    if (isNaN(age) || age < 0) {
        alert("You must enter a valid age!");
        return;
    }

    let result = "";
    if (age < 13) {
        result = "You are a child.";
    } else if (age < 20) {
        result = "You are a teenager.";
    } else if (age < 65) {
        result = "You are an adult.";
    } else {
        result = "You are a senior citizen.";
    }

    document.getElementById("outputResult").innerHTML = result;
}


// testing-sets-of-conditions

document.getElementById("testing-sets-of-conditions").onclick = function () {
    let score = parseFloat(prompt("Enter your score:"));
    if (isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a valid score between 0 and 100!");
        return;
    }

    let result = "";
    if (score >= 90) {
        result = "You got an A!";
    } else if (score >= 80) {
        result = "You got a B!";
    } else if (score >= 70) {
        result = "You got a C!";
    } else if (score >= 60) {
        result = "You got a D!";
    } else {
        result = "You got an F!";
    }

    document.getElementById("outputResult").innerHTML = result;
}


// if-statement-nested

document.getElementById("if-statement-nested").onclick = function () {
    let age = parseInt(prompt("Enter your age:"));
    if (isNaN(age) || age < 0) {
        alert("You must enter a valid age!");
        return;
    }

    let result = "";
    if (age < 18) {
        result = "You are a minor.";
    } else {
        let hasLicense = confirm("Do you have a driving license?");
        if (hasLicense) {
            result = "You are an adult with a driving license.";
        } else {
            result = "You are an adult without a driving license.";
        }
    }

    document.getElementById("outputResult").innerHTML = result;
}


// login

document.getElementById("login").onclick = function () {
    let username = prompt("Enter your username:");
    if (username === null || username === "") {
        alert("You must enter a username!");
        return;
    }

    let password = prompt("Enter your password:");
    if (password === null || password === "") {
        alert("You must enter a password!");
        return;
    }

    // For simplicity, let's assume the correct credentials are "user" and "pass"
    if (username === "user" && password === "pass") {
        document.getElementById("outputResult").innerHTML = "Login successful!";
    } else {
        document.getElementById("outputResult").innerHTML = "Login failed. Please try again.";
    }
}