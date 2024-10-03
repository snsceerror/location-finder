// script.js

document.getElementById('getCoords').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&addressdetails=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const location = data[0];
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = `Latitude: ${location.lat}, Longitude: ${location.lon}`;
            } else {
                document.getElementById('result').innerText = 'Location not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerText = 'An error occurred.';
        });
});
