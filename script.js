// Crear el mapa centrado en una ubicación inicial (por ejemplo, Madrid)
var map = L.map('map').setView([40.4168, -3.7038], 13); // Coordenadas de Madrid

// Agregar un mapa base (OpenStreetMap en este caso)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Lista de lugares con latitudes, longitudes, nombres y descripciones
var lugares = [
    { lat: 40.4168, lon: -3.7038, nombre: "Madrid", descripcion: "La capital de España." },
    { lat: 41.9028, lon: 12.4964, nombre: "Roma", descripcion: "La ciudad eterna en Italia." },
    { lat: 48.8566, lon: 2.3522, nombre: "París", descripcion: "La ciudad de la luz en Francia." },
    { lat: 34.0522, lon: -118.2437, nombre: "Los Ángeles", descripcion: "La ciudad de las estrellas en USA." }
];

// Iterar sobre el arreglo y agregar un marcador para cada lugar
lugares.forEach(function(lugar) {
    L.marker([lugar.lat, lugar.lon]).addTo(map)
        .bindPopup("<b>" + lugar.nombre + "</b><br>" + lugar.descripcion);
});
