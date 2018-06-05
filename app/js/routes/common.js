
export default {
    init() {
        const menuButton = document.querySelector('.navbar-burger');
        menuButton.addEventListener('click', onClickToggleMenuOverlay);

        function onClickToggleMenuOverlay() {
            const menuIcon = document.querySelector('.navbar-burger__icon');
            const menuOverlay = document.querySelector('.menu-overlay');

            if(menuIcon.classList.contains('open')) {
                menuIcon.classList.remove('open');
                menuOverlay.style.height = "0%";
            } else {
                menuIcon.classList.add('open');
                menuOverlay.style.height = "100%";
            }
        }
    },
    finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
    },
};
