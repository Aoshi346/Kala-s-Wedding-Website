document.addEventListener('DOMContentLoaded', function() {
    const mapCeremonia = L.map('mapaceremonia', {
        scrollWheelZoom: false, // Disable scroll zoom
        dragging: false, // Disable dragging
        zoomControl: false // Disable zoom control
    }).setView([10.429008602808144, -66.8080556], 20); // Set initial zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapCeremonia);

    L.marker([10.429008602808144, -66.8080556]).addTo(mapCeremonia)
        .bindPopup('Lugar de la ceremonia')
        .openPopup();

    const mapRecepcion = L.map('maparecepcion', {
        scrollWheelZoom: false, // Disable scroll zoom
        dragging: false, // Disable dragging
        zoomControl: false // Disable zoom control
    }).setView([10.411073496068093, -66.86662120285933], 20); // Set initial zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRecepcion);

    L.marker([10.411073496068093, -66.86662120285933]).addTo(mapRecepcion)
        .bindPopup('Lugar de la recepción')
        .openPopup();
});