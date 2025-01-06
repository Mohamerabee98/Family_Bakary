function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}


// Show or hide the button based on scroll position
window.onscroll = function() {
    const backToTop = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Scroll smoothly to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

