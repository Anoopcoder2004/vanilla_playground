const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const result = document.getElementById("result");
const button = document.getElementById("calculate");

button.addEventListener("click", calculate);

function calculate() {

    let price = Number(priceInput.value);
    let quantity = Number(quantityInput.value);

    let total = multiply(price, quantity);

    result.textContent = `Total: ₹${total}`;

}

function multiply(price, quantity) {

    return price + quantity;

}