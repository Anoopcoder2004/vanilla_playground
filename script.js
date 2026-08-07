const users = [
    "Anoop",
    "Rahul",
    "Arjun",
    "Andrew",
    "John",
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "George",
    "Harry",
    "Isabella",
    "Jack"
];

const pageSize = 5;

let currentPage = 1;

const list = document.getElementById("list");

document.getElementById("next").addEventListener("click", nextPage);
document.getElementById("prev").addEventListener("click", prevPage);

render();

function nextPage() {

    currentPage++;

    render();

}

function prevPage() {

    if (currentPage > 1) {
        currentPage--;
    }

    render();

}

function render() {

    currentPage = 1;

    list.innerHTML = "";

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    const pageUsers = users.slice(start, end);

    pageUsers.forEach(user => {
        list.innerHTML += `<li>${user}</li>`;
    });

}