const btn = document.getElementById("btn");
const output = document.getElementById("output");

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function loadUser() {
    output.textContent = "Loading...";

    console.log("Fetching user...");

    await delay(2000);

    output.textContent = "Welcome, Anoop!";
    console.log("User loaded.");
}

btn.addEventListener("click", () => {
    console.clear();

    console.log("Button clicked");

    loadUser();

    console.log("UI is still responsive");
});