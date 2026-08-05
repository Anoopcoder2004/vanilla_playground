const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {

    navigator.geolocation.getCurrentPosition((position) => {

        output.innerHTML = `
            <h3>Your Location</h3>

            Latitude : ${position.coords.latitude}

            <br><br>

            Longitude : ${position.coords.longitude}
        `;

    });

});