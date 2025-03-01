document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        document.getElementById('personalized-name').textContent = username;
    }

    // Logica del contador indicando el tiempo que queda para la boda
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const targetDate = new Date('2025-06-21T00:00:00'); // Dia de la boda

    function actualizarConta() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            daysElement.textContent = '0';
            hoursElement.textContent = '0';
            minutesElement.textContent = '0';
            secondsElement.textContent = '0';
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    const countdownInterval = setInterval(actualizarConta, 1000);
    actualizarConta(); // Llamar a la función para que se actualice inmediatamente
});

// Script para el GPS de los mapas

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