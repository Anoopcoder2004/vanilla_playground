const users = ["Anoop","Rahul","Arjun","Andrew"];

const input = document.getElementById("search");
const list = document.getElementById("list");

render(users);

input.addEventListener("input", search);

function search() {

    const value = input.value.toLowerCase();

    const filtered = users.filter(user =>
        user.toLowerCase().includes(value)
    );

    users.length = 0;

    users.push(...filtered);

    render(filtered);

}

function render(data) {

    list.innerHTML = "";

    data.forEach(user => {

        list.innerHTML += `<li>${user}</li>`;

    });

}