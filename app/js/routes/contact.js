
export default {
    init() {
        window.initMap = () => {
            const uluru = {lat: 41.141098, lng: -8.617907};
            const map = new google.maps.Map(document.querySelector('.contact-map'), {zoom: 16, center: uluru});
            const marker = new google.maps.Marker({position: uluru, map: map});
        }
    },
    finalize() {
        // JavaScript to be fired on the home pages, after init
    },
};
