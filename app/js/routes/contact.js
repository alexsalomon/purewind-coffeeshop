
export default {
    init() {
        $(".contact-form").submit((e) => {
            e.preventDefault();

            $.ajax({
                type: "POST",
                dataType: "json",
                url: $(e.target).attr('action'),
                data: $(e.target).serialize(),
                success: function(response) {
                    if(response.status == "success"){
                        alert('Email sent successfully.');
                    }else{
                        alert('Oops, something went wrong. Please try again later.');
                    }
                }
            });
        });
    },
    finalize() {
        // JavaScript to be fired on the home pages, after init
    },
};
