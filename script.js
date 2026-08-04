const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    console.clear();

    console.log("1️⃣ Button Clicked");

    setTimeout(() => {
        console.log("5️⃣ setTimeout Callback");
    }, 0);

    Promise.resolve().then(() => {
        console.log("4️⃣ Promise Callback");
    });

    console.log("2️⃣ Synchronous Code");

    console.log("3️⃣ End of Click Event");

});