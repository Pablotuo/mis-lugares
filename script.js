// Crear el mapa centrado en una ubicación inicial (por ejemplo, Madrid)
var map = L.map('map').setView([40.4168, -3.7038], 3); // Coordenadas de Madrid, zoom de nivel 3 para ver más lugares

// Agregar un mapa base (OpenStreetMap en este caso)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Lista de lugares con latitudes, longitudes, nombres, descripciones y la URL de las imágenes
var lugares = [
    { lat: 40.4168, lon: -3.7038, nombre: "Madrid", descripcion: "La capital de España.", imagen: "https://github.com/Pablotuo/mis-lugares/raw/main/images/20220501_122303.jpg" },
    { lat: 41.9028, lon: 12.4964, nombre: "Roma", descripcion: "La ciudad eterna en Italia.", imagen: "https://github.com/Pablotuo/mis-lugares/raw/main/images/20220501_122303.jpg" },
   
];

// Iterar sobre el arreglo y agregar un marcador para cada lugar
lugares.forEach(function(lugar) {
    L.marker([lugar.lat, lugar.lon]).addTo(map)
        .bindPopup("<b>" + lugar.nombre + "</b><br>" + lugar.descripcion + "<br><img src='" + lugar.imagen + "' alt='" + lugar.nombre + "' style='width:100px; height:auto;'>");
});
