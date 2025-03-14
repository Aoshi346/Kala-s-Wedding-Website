document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('nombreusuario'); // Get the username from the URL

    // Map usernames allowed for plus one
    const plusOneAllowed = ['roberto', 'mirowsky', 'fabi', 'linares', 'jorge', 'regulo', 'castro', 'zaida', 
        'pulitano', 'rondon', 'prado', 'nico', 'perez', 'humberto'];

    // Check if the user has a plus one
    const isPlusOneAllowed = username && plusOneAllowed.includes(username.toLowerCase());

    // Define images for users with and without a plus one
    const images = {
        withPlusOne: {
            small: 'Images/fondo_hero_plusone_small.png',
            big: 'Images/fondo_hero_plusone_big.png'
        },
        default: {
            small: 'Images/fondo_hero_1_small.png',
            big: 'Images/fondo_hero_1_big.png'
        }
    };

    // Select the appropriate images
    const selectedImages = isPlusOneAllowed ? images.withPlusOne : images.default;

    // Update the hero image elements
    const heroImageSmall = document.getElementById('hero-image-small');
    const heroImageBig = document.getElementById('hero-image-big');
    const heroImage = document.getElementById('hero-image');

    heroImageSmall.srcset = selectedImages.small;
    heroImageBig.srcset = selectedImages.big;
    heroImage.src = selectedImages.big;
});