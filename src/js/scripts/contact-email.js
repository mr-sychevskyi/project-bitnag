$(function () {
    var form = $('.email-form');

    $(form).submit(function (e) {
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            // contentType: "application/json; charset=utf-8",
            // cache: false,
            data: formData,
            dataType: 'json',
        }).done(function(response) {
            $('.email-form__input').val('');
        }).fail(function(data) {
            console.log('error');
        });
    });
});
