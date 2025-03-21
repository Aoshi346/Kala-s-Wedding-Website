document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('nombreusuario'); // Get the username from the URL

    // Mapear los nombres de usuarios permitidos para diferentes cantidades de invitados
    const plusOneAllowed = ['roberto', 'mirowsky', 'fabi', 'linares','castro', 'zaida', 
        'pulitano', 'rondon', 'prado', 'nico', 'perez', 'humberto', 'grillo', 'prince', 'grecia', 
        'ainara', 'bela', 'peca', 'diaz', 'dipentima', 'larnia', 'french', 'botton','ramos', 'jacobo',
        'uzcategui', 'alejandro', 'mich'];

    const threeGuestsAllowed = ['sascha', 'guillermo', 'escobar', 'jon', 'pulido', 'montesinos']; // Add the usernames that should have 3 guests
    const fiveGuestsAllowed = ['gatenio']; // Add the usernames that should have 5 guests

    // Verificar el tipo de acceso del usuario
    let guestType = 'default';
    if (username) {
        if (fiveGuestsAllowed.includes(username.toLowerCase())) {
            guestType = 'fiveGuests';
        } else if (threeGuestsAllowed.includes(username.toLowerCase())) {
            guestType = 'threeGuests';
        } else if (plusOneAllowed.includes(username.toLowerCase())) {
            guestType = 'plusOne';
        }
    }

    // Definir imagenes para diferentes tipos de acceso
    const images = {
        fiveGuests: {
            small: 'Images/fondo_hero_5guests_small.png',
            big: 'Images/fondo_hero_5guests_big.png'
        },
        threeGuests: {
            small: 'Images/fondo_hero_3guests_small.png',
            big: 'Images/fondo_hero_3guests_big.png'
        },
        plusOne: {
            small: 'Images/fondo_hero_plusone_small.png',
            big: 'Images/fondo_hero_plusone_big.png'
        },
        default: {
            small: 'Images/fondo_hero_1_small.png',
            big: 'Images/fondo_hero_1_big.png'
        }
    };

    // Preload only the relevant images
    const selectedImages = images[guestType];
    const preloadImages = [
        selectedImages.small,
        selectedImages.big
    ];

    // Create and append preload links
    preloadImages.forEach(imageUrl => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageUrl;
        document.head.appendChild(link);
    });

    // Actualizar las imagenes del hero
    const heroImageSmall = document.getElementById('hero-image-small');
    const heroImageBig = document.getElementById('hero-image-big');
    const heroImage = document.getElementById('hero-image');

    if (heroImageSmall && heroImageBig && heroImage) {
        heroImageSmall.srcset = selectedImages.small;
        heroImageBig.srcset = selectedImages.big;
        heroImage.src = selectedImages.big;
    }
});