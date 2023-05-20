// leafletjs      
const map = L.map('map').setView([0, 0], 5);
const myIcon = L.icon({
    iconUrl: 'images/International_Space_Station.png',
    iconSize: [70, 52],
    iconAnchor: [25, 16]
});
const marker = L.marker([0, 0], {icon: myIcon}).addTo(map);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


// wheretheiss
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {latitude, longitude} = data; // this changes 'data.latitude' to just 'latitude' etc.

    marker.setLatLng([latitude, longitude]);
    map.setView([latitude, longitude]);

    document.getElementById("lat").textContent = latitude.toFixed(2);
    document.getElementById("lon").textContent = longitude.toFixed(2);
};

getISS();
setInterval(getISS, 1000);