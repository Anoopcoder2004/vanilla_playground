const output = document.getElementById("output");
const startBtn = document.getElementById("startBtn");

function print(message) {
    output.innerHTML += `<p>${message}</p>`;
}

function login(callback) {
    print("Logging in...");

    setTimeout(() => {
        print("✅ Logged in");
        callback();
    }, 1000);
}

function getProfile(callback) {
    print("Fetching profile...");

    setTimeout(() => {
        print("✅ Profile fetched");
        callback();
    }, 1000);
}

function getPosts(callback) {
    print("Fetching posts...");

    setTimeout(() => {
        print("✅ Posts fetched");
        callback();
    }, 1000);
}

function displayPosts(callback) {
    print("Displaying posts...");

    setTimeout(() => {
        print("✅ Posts displayed");
        callback();
    }, 1000);
}

startBtn.addEventListener("click", () => {

    output.innerHTML = "";

    login(() => {

        getProfile(() => {

            getPosts(() => {

                displayPosts(() => {

                    print("🎉 All tasks completed!");

                });

            });

        });

    });

});