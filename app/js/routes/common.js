
export default {
    init() {
        const menuButton = document.querySelector('.navbar-burger');
        menuButton.addEventListener('click', onClickToggleMenuOverlay);

        function onClickToggleMenuOverlay() {
            const menuOverlay = document.querySelector('.menu-overlay');
            const menuIcon = document.querySelector('.navbar-burger__icon');

            document.documentElement.classList.toggle('noscroll');
            document.querySelector('.main').classList.toggle('noscroll');
            menuIcon.classList.toggle('open');

            if(menuIcon.classList.contains('open')) {
                menuOverlay.scrollTop = 0;
                menuOverlay.style.height = "100%";
            } else {
                menuOverlay.style.height = "0%";
            }
        }
    },
    finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
    },
};
