document.addEventListener("DOMContentLoaded", function() {
    // Set the username from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        document.getElementById('name').value = username;
        document.getElementById('comment-username').value = username;
    }

    // Navbar hide/show on scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");

    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    const handleScroll = debounce(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            navbar.classList.add("navbar-hidden");
        } else {
            // Scroll up
            navbar.classList.remove("navbar-hidden");
        }
        lastScrollTop = scrollTop;
    });

    window.addEventListener("scroll", handleScroll);
});