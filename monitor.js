document.addEventListener('DOMContentLoaded', function () {
    function updateTemperatureBar(temp) {
        // Get the elements
        let bar = document.querySelector(".temp-bar");
        let tempDisplay = document.querySelector("#temperature-value");

        let percent = Math.min(100, (temp / 50) * 100); // Assuming 50°C is max

        // Update the temperature bar width
        bar.style.width = percent + "%";

        // Update the text content of the temperature display
        tempDisplay.textContent = `${temp}° C`; // This updates the text of the temperature
    }

    // Example: Update the temperature to 43°C
    updateTemperatureBar(44); 
});


document.addEventListener('DOMContentLoaded', function () {
    function updateHumidityBar(humidity) {
        // Get the elements
        let bar = document.querySelector(".humidity-bar");
        let humidityDisplay = document.querySelector("#humidity-value");

        // Calculate percentage for the bar width
        let percent = Math.min(100, humidity); // Assuming 100% is max

        // Update the humidity bar width
        bar.style.width = percent + "%";

        // Update the text content of the humidity display
        humidityDisplay.textContent = `${humidity}%`; // This updates the text
    }

    // Example: Update the humidity to 50%
    updateHumidityBar(82);
});



function updateLightIntensity(value) {
    const lightBar = document.getElementById('light-bar');
    
    // Update the width of the light bar based on the intensity (percentage)
    lightBar.style.width = `${value}%`;
    
    // Update the light intensity value displayed below the bar
    document.getElementById('light-value').innerText = value + '%';
}

// Example: Setting light intensity to 75%
let lightIntensity = 50; // Change this to any percentage value
updateLightIntensity(lightIntensity);


document.addEventListener("DOMContentLoaded", function () {
    const densityGauge = document.querySelector(".density-gauge");

    if (densityGauge) { // Ensure the gauge exists
        function setDensityValue(gauge, value) {
            if (value < 0 || value > 1) return;

            gauge.querySelector(".density-gauge__fill").style.transform = `rotate(${value / 2}turn)`;
            gauge.querySelector(".density-gauge__cover").textContent = `${Math.round(value * 100)}%`;
        }

        setDensityValue(densityGauge, 1); 
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const mistToggle = document.getElementById("mist-toggle");
    const fanToggle = document.getElementById("fan-toggle");

    function updateStatus(toggle, label) {
        toggle.addEventListener("change", function () {
            if (this.checked) {
                console.log(`${label} is ON`);
            } else {
                console.log(`${label} is OFF`);
            }
        });
    }

    if (mistToggle) updateStatus(mistToggle, "Mist");
    if (fanToggle) updateStatus(fanToggle, "Fan");
});


document.addEventListener('DOMContentLoaded', function () {
    function updateDensityBar(density) {
        // Get the elements
        let bar = document.querySelector("#density-bar");
        let densityDisplay = document.querySelector("#density-value");

        // Calculate percentage for the bar width (adjust max density as needed)
        let percent = Math.min(100, (density / 100) * 100); // Assuming 100 is the max density

        // Update the density bar width
        bar.style.width = percent + "%";

        // Update the text content of the density display
        densityDisplay.textContent = `${density}%`; // This updates the text of the density
    }

    // Example: Update the density to 0%
    updateDensityBar(0);
});