const button = document.getElementById("load");
const list = document.getElementById("users");

button.addEventListener("click", loadUsers);

async function loadUsers() {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await res.json();

    renderUsers();

}

function renderUsers(users) {

    list.innerHTML = "";

    users.forEach(user => {

        list.innerHTML += `<li>${user.name}</li>`;

    });

}