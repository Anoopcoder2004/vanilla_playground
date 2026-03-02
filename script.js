const form = document.getElementById("registrationForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const strongPasswordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


function validateEmail() {
    const email = emailInput.value.trim();

    if (email === "") {
        showError("Email is required");
        return false;
    }

    if (!emailRegex.test(email)) {
        showError("Invalid email address");
        return false;
    }

    hideError();
    return true;
}

function validatePassword(){
    const password = passwordInput.value.trim();
    if(password === ""){
        showError("Password is required");
        return false;
    
    }
    if(!strongPasswordRegex.test(password)){
        showError("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character");
        return false;
    }
    hideError();
    return true;
}

function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
}

function hideError() {
    error.textContent = "";
    error.classList.add("hidden");
}

emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (username === "" || password === "" || phone === "") {
        alert("Please fill in all the fields");
        return;
    }

    if (!validateEmail() || !validatePassword()) return;

    alert("Form submitted successfully!");
});