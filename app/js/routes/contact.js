
export default {
    init() {
        $(".contact-form").submit((e) => {
            e.preventDefault();
            alertify.set('notifier','position', 'top-center');

            $.ajax({
                type: "POST",
                dataType: "json",
                url: $(e.target).attr('action'),
                // data: $(e.target).serialize(),
                success: function(response) {
                    if(response.status == "success"){
                        document.querySelector('.contact-form').reset();
                        alertify.success('Email sent successfully.');
                    }else{
                        alertify.error('Oops, something went wrong. Please try again later.');
                    }
                },
                error: function () {
                    alertify.error('Oops, something went wrong. Please try again later.');
                }
            });
        });
    },
    finalize() {
        // JavaScript to be fired on the home pages, after init
    },
};
