document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rsvp-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Handle the form data here
        const formData = new FormData(this);
        const name = formData.get('name');
        const attendance = formData.get('attendance');
        const plusOne = formData.get('plus_one');

        // You can send the form data to your server or handle it as needed
        console.log('Name:', name);
        console.log('Attendance:', attendance);
        console.log('Plus One:', plusOne);

        // Optionally, show a success message or perform other actions
        alert('Sus respuestas se han enviado con éxito!');
    });
});