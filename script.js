var count = 0;

function increment() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decrement() {
    if (count > 0) {
        count--;
        document.getElementById("counter").innerHTML = count;
    }
}