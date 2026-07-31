const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const status = document.getElementById("status");

// Simulate API call
function login(username, password, callback) {

    status.innerText = "Checking credentials...";

    setTimeout(() => {

        const success =
            username === "anoop" &&
            password === "1234";

        callback(success);

    }, 2000);
}

// Callback function
function handleLogin(result) {

    if (result) {
        status.innerText = "✅ Login Successful";
    } else {
        status.innerText = "❌ Invalid Username or Password";
    }

}

// Button Click
loginBtn.addEventListener("click", () => {

    const username = usernameInput.value;
    const password = passwordInput.value;

    login(username, password, handleLogin);

});