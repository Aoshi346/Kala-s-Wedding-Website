document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment');
    const submitButton = document.getElementById('submit-comment');
    const successMessage = document.getElementById('comment-success');
    const errorMessage = document.getElementById('comment-error');
    const spinnerElement = submitButton.querySelector('.spinner-border');
    const buttonText = submitButton.querySelector('.button-text');

    // Handle form submission
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form
        if (!commentInput.value.trim()) {
            commentForm.classList.add('was-validated');
            return;
        }

        // Disable submit button and show spinner
        submitButton.disabled = true;
        spinnerElement.classList.remove('d-none');
        buttonText.textContent = 'Enviando...';

        // Hide any previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Get username from URL
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('nombreusuario');

        // Create email parameters
        const templateParams = {
            username: username,
            comment: commentInput.value.trim()
        };

        // Send email using EmailJS
        emailjs.send(
            'service_b1x2y2f',  // Service ID
            'template_lz4v6ew',  // Template ID - using the same template as song form for now
            templateParams
        ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            successMessage.style.display = 'block';
            
            // Clear form
            commentInput.value = '';
            commentForm.classList.remove('was-validated');
            
        }).catch(function(error) {
            console.log('FAILED...', error);
            
            // Show error message
            errorMessage.style.display = 'block';
            
        }).finally(function() {
            // Re-enable submit button and hide spinner
            submitButton.disabled = false;
            spinnerElement.classList.add('d-none');
            buttonText.textContent = 'Enviar mensaje';
        });
    });
});
