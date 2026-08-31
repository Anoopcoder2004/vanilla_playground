const freezeBtn = document.getElementById("freezeBtn");
const testBtn = document.getElementById("testBtn");
const output = document.getElementById("output");

freezeBtn.addEventListener("click", () => {

    console.log("Starting expensive operation...");

    let result = 0;

    for (let i = 0; i < 500_000_000; i++) {
        result += Math.sqrt(i);
    }

    output.textContent = result;

    console.log("Finished");
});

testBtn.addEventListener("click", () => {
    console.log("Test button clicked");
});