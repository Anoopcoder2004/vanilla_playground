var count = 0;

function increment(){
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decrement(){
    count--;
    document.getElementById("counter").innerHTML = count;
}