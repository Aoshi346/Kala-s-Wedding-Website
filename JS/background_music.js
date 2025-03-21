document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const musicControl = document.getElementById('toggle-music');
    const musicIcon = musicControl.querySelector('i');
    
    // Ponemos el volumen al 30%
    audio.volume = 0.3;

    // Función para manejar el toggle de la música
    function toggleMusic() {
        if (audio.paused) {
            audio.play();
            musicIcon.classList.remove('fa-volume-mute');
            musicIcon.classList.add('fa-music');
            musicControl.classList.add('playing');
        } else {
            audio.pause();
            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-volume-mute');
            musicControl.classList.remove('playing');
        }
    }

    // Solo adjuntamos el evento click al botón de control de música
    musicControl.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMusic();
    });

    // Función para iniciar la reproducción de la música
    function startMusic() {
        audio.play()
            .then(() => {
                musicIcon.classList.remove('fa-volume-mute');
                musicIcon.classList.add('fa-music');
                musicControl.classList.add('playing');
            })
            .catch(error => {
                console.log("Autoplay prevented by browser. Please click to play.");
                // Mostramos una indicación visual de que la música necesita ser iniciada manualmente
                musicIcon.classList.remove('fa-music');
                musicIcon.classList.add('fa-volume-mute');
                musicControl.classList.remove('playing');
            });
    }

    // Intentamos iniciar la música inmediatamente
    startMusic();

    // También intentamos iniciar la música en la primera interacción del usuario con la página
    const startMusicOnce = () => {
        startMusic();
        document.removeEventListener('click', startMusicOnce);
        document.removeEventListener('touchstart', startMusicOnce);
        document.removeEventListener('keydown', startMusicOnce);
    };

    document.addEventListener('click', startMusicOnce);
    document.addEventListener('touchstart', startMusicOnce);
    document.addEventListener('keydown', startMusicOnce);

    // Manejamos el cambio de visibilidad para pausar/reanudar la música
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            audio.pause();
            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-volume-mute');
            musicControl.classList.remove('playing');
        } else if (!audio.paused) {
            audio.play()
                .then(() => {
                    musicIcon.classList.remove('fa-volume-mute');
                    musicIcon.classList.add('fa-music');
                    musicControl.classList.add('playing');
                });
        }
    });
}); 