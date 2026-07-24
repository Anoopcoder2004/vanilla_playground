const status = document.getElementById("status");
const button = document.getElementById("orderBtn");

// Chef
function makePizza(callback) {

    status.innerText = "👨‍🍳 Cooking pizza...";

    setTimeout(() => {

        status.innerText = "🍕 Pizza is ready!";

        callback();

    }, 3000);

}

// Delivery person
function notifyCustomer() {
    alert("🚪 Your pizza has arrived!");
}

button.addEventListener("click", () => {
    makePizza(notifyCustomer);
});