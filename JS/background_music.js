document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const musicControl = document.getElementById('toggle-music');
    const musicIcon = musicControl.querySelector('i');
    
    // Set initial volume
    audio.volume = 0.3;

    // Function to handle music toggle
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

    // Only attach click event to the music control button
    musicControl.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMusic();
    });

    // Function to start playing music
    function startMusic() {
        audio.play()
            .then(() => {
                musicIcon.classList.remove('fa-volume-mute');
                musicIcon.classList.add('fa-music');
                musicControl.classList.add('playing');
            })
            .catch(error => {
                console.log("Autoplay prevented by browser. Please click to play.");
                // Show visual indication that music needs to be started manually
                musicIcon.classList.remove('fa-music');
                musicIcon.classList.add('fa-volume-mute');
                musicControl.classList.remove('playing');
            });
    }

    // Try to start music immediately
    startMusic();

    // Also try to start music on first user interaction with the page
    const startMusicOnce = () => {
        startMusic();
        document.removeEventListener('click', startMusicOnce);
        document.removeEventListener('touchstart', startMusicOnce);
        document.removeEventListener('keydown', startMusicOnce);
    };

    document.addEventListener('click', startMusicOnce);
    document.addEventListener('touchstart', startMusicOnce);
    document.addEventListener('keydown', startMusicOnce);

    // Handle visibility change to pause/resume music
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