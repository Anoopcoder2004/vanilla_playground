const input = document.getElementById("search");
const result = document.getElementById("result");

input.addEventListener("input", handleSearch);

function fakeApi(value) {

    return new Promise(resolve => {

        const delay = Math.random() * 3000;

        setTimeout(() => {

            resolve(value);

        }, delay);

    });

}

async function handleSearch() {

    const value = input.value;

    const response = await fakeApi(value);

    result.textContent = response;

}