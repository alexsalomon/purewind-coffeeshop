
export default {
    init() {
        $('.contact-form').parsley({
            requiredMessage: "Oops, this field cannot be empty",
            typeMessage: "Oops, this seems to be an invalid email address"
        });

        window.Parsley.on('field:error', function() {
            this.$element.closest('.control').addClass('error');
        });
        window.Parsley.on('field:success', function() {
            this.$element.closest('.control').removeClass('error');
        });

        $(".contact-form").submit((e) => {
            e.preventDefault();
            alertify.set('notifier','position', 'top-center');

            $.ajax({
                type: "POST",
                dataType: "json",
                url: $(e.target).attr('action'),
                data: $(e.target).serialize(),
                success: function(response) {
                    if(response.status == "success") {
                        alertify.success('Email sent!');
                    }else{
                        alertify.error('Oops, something went wrong. Please, try again later.');
                    }
                },
                error: function () {
                    alertify.error('Oops, something went wrong. Please, try again later.');
                },
                complete: function () {
                    document.querySelector('.contact-form').reset();
                    $('.contact-form').parsley().reset();
                }
            });
        });
    },
    finalize() {
        // JavaScript to be fired on the home pages, after init
    },
};
