const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (event) {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    if (username === "" || password === '' || phone === '' || email === "") {
        alert("Please fill in all the fields");
        return;
    }
    alert("Form submitted successfully!")
});