
export default {
    init() {
        const navbarBurguer = document.querySelector('.navbar-burger');
        navbarBurguer.addEventListener('click', onClickToggleNavbarBurguerIconAnimation);

        function onClickToggleNavbarBurguerIconAnimation() {
            const navbarBurguerIcon = document.querySelector('.navbar-burger__icon');
            if(navbarBurguerIcon.classList.contains('open')) {
                navbarBurguerIcon.classList.remove('open');
            } else {
                navbarBurguerIcon.classList.add('open');
            }
        }
    },
    finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
    },
};
