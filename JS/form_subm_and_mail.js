document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rsvp-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Handle the form data here
        const formData = new FormData(this);
        const name = formData.get('name');
        const attendance = formData.get('attendance');
        const plusOne = formData.get('plus_one');

        // Prepare the email parameters
        const emailParams = {
            name: name,
            attendance: attendance,
            plus_one: plusOne
        };

        // Send the email using EmailJS
        emailjs.send('service_b1x2y2f', 'template_lhwzjfu', emailParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Formulario enviado con éxito!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Error al enviar el formulario.');
            });
    });
});