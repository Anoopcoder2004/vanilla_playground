let count = 0;

const btn = document.getElementById("btn");
const heading = document.getElementById("count");

btn.addEventListener("click", increase);

function increase() {

    updateCount();

    heading.textContent = count;

}

function updateCount() {

    let count = count + 1;

}