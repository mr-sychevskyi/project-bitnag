grecaptcha.ready(function () {
    grecaptcha.execute('6LfQDnkUAAAAANwoRRk3zw8v1Vnr2vSkO_okRKr1', {action: 'verifyToken'})
        .then(function (token) {
            fetch(`https://us-central1-bitnag-web-dev.cloudfunctions.net/recaptcha.php?action=verifyToken&token=${token}`)
                .then(
                    response => response.json()
                ).then(
                    success => console.log(success)
                ).catch(
                    error => console.log(error)
                );
        });
});
