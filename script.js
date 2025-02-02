/*document.addEventListener('DOMContentLoaded', function () {
    function updateBar(barElement, value, maxValue) {
        const percent = Math.min(100, (value / maxValue) * 100);
        barElement.style.width = percent + "%";
    }

    function updateDashboard(data) {
        document.getElementById('temp-value').textContent = `${data.temp}°C`;
        updateBar(document.getElementById('temp-bar'), data.temp, 50);

        document.getElementById('humidity-value').textContent = `${data.humidity}%`;
        updateBar(document.getElementById('humidity-bar'), data.humidity, 100);

        document.getElementById('light-value').textContent = `${data.light}%`;
        updateBar(document.getElementById('light-bar'), data.light, 100);
    }

    function fetchData() {
        fetch('/sensor-data')
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    updateDashboard(data);
                }
            })
            .catch(error => console.error('Error fetching sensor data:', error));
    }

    setInterval(fetchData, 2000); // Fetch data every 2 seconds
});
*/