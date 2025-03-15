document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const toggleButton = document.getElementById('toggle-music');
    const musicIcon = toggleButton.querySelector('i');
    
    // Set initial volume
    audio.volume = 0.3;

    // Function to toggle music
    function toggleMusic() {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    musicIcon.classList.remove('fa-music');
                    musicIcon.classList.add('fa-pause');
                    toggleButton.classList.add('playing');
                })
                .catch(error => {
                    console.error('Error playing audio:', error);
                });
        } else {
            audio.pause();
            musicIcon.classList.remove('fa-pause');
            musicIcon.classList.add('fa-music');
            toggleButton.classList.remove('playing');
        }
    }

    // Add click event listener to toggle button
    toggleButton.addEventListener('click', toggleMusic);

    // Handle page visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            audio.pause();
            musicIcon.classList.remove('fa-pause');
            musicIcon.classList.add('fa-music');
            toggleButton.classList.remove('playing');
        }
    });

    // Handle user interaction requirement for autoplay
    function handleFirstInteraction() {
        // Try to play audio on first interaction
        audio.play()
            .then(() => {
                musicIcon.classList.remove('fa-music');
                musicIcon.classList.add('fa-pause');
                toggleButton.classList.add('playing');
            })
            .catch(error => {
                console.error('Error playing audio:', error);
            });
        
        // Remove the event listeners after first interaction
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
    }

    // Add event listeners for first interaction
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
}); 