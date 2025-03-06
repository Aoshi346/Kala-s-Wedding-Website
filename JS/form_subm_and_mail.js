document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("8nz9xbrjKXoc9pGh2"); // Initialize EmailJS with your public key

    // Get DOM elements
    const form = document.getElementById('rsvp-form');
    const attendanceSelect = document.getElementById('attendance');
    const plusOneGroup = document.getElementById('plus-one-group');
    const plusOneCheckboxGroup = document.getElementById('plus-one-checkbox-group');
    const plusOneInput = document.getElementById('plus-one');
    const plusOneCheckbox = document.getElementById('plus-one-checkbox');
    const submitButton = document.getElementById('submit-button');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const nameInput = document.getElementById('name');

    // Get name from URL parameter if available
    function getNameFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const nameParam = urlParams.get('name');
        if (nameParam) {
            nameInput.value = nameParam;
        }
    }

    // Show/hide plus one fields based on attendance selection
    function handleAttendanceChange() {
        if (attendanceSelect.value === 'yes') {
            plusOneGroup.style.display = 'block';
            plusOneCheckboxGroup.style.display = 'block';
        } else {
            plusOneGroup.style.display = 'none';
            plusOneCheckboxGroup.style.display = 'none';
            plusOneInput.value = '';
            plusOneCheckbox.checked = false;
        }
    }

    // Handle plus one checkbox
    function handlePlusOneCheckbox() {
        if (plusOneCheckbox.checked) {
            plusOneInput.value = '';
            plusOneInput.disabled = true;
            plusOneGroup.style.display = 'none';
        } else {
            plusOneInput.disabled = false;
            plusOneGroup.style.display = 'block';
        }
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        
        // Validate form
        if (!attendanceSelect.value) {
            alert('Por favor selecciona si asistirás o no.');
            return;
        }

        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        
        // Hide any previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Prepare template parameters
        const templateParams = {
            name: nameInput.value,
            attendance: attendanceSelect.value === 'yes' ? 'Sí, asistiré' : 'No, no podré asistir',
            plus_one: plusOneCheckbox.checked ? 'Sin acompañante' : (plusOneInput.value || 'No especificado')
        };

        // Send email using EmailJS
        emailjs.send(
            'service_b1x2y2f', // Replace with your EmailJS service ID
            'template_lhwzjfu', // Replace with your EmailJS template ID
            templateParams
        ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            successMessage.style.display = 'block';
            
            // Reset form except for name
            attendanceSelect.value = '';
            plusOneInput.value = '';
            plusOneCheckbox.checked = false;
            plusOneGroup.style.display = 'none';
            plusOneCheckboxGroup.style.display = 'none';
            
        }).catch(function(error) {
            console.log('FAILED...', error);
            
            // Show error message
            errorMessage.style.display = 'block';
            
        }).finally(function() {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar';
        });
    }

    // Add event listeners
    getNameFromUrl();
    attendanceSelect.addEventListener('change', handleAttendanceChange);
    plusOneCheckbox.addEventListener('change', handlePlusOneCheckbox);
    form.addEventListener('submit', handleSubmit);
});