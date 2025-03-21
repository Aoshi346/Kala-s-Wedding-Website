document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment');
    const submitButton = document.getElementById('submit-comment');
    const successMessage = document.getElementById('comment-success');
    const errorMessage = document.getElementById('comment-error');
    const spinnerElement = submitButton.querySelector('.spinner-border');
    const buttonText = submitButton.querySelector('.button-text');

    // Manejar el envío del formulario
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validar el formulario
        if (!commentInput.value.trim()) {
            commentForm.classList.add('was-validated');
            return;
        }

        // Deshabilitar el botón de envío y mostrar el spinner
        submitButton.disabled = true;
        spinnerElement.classList.remove('d-none');
        buttonText.textContent = 'Enviando...';

        // Ocultar cualquier mensaje anterior
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Obtener el nombre de usuario desde la URL
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('nombreusuario');

        // Crear parámetros de correo electrónico
        const templateParams = {
            username: username,
            comment: commentInput.value.trim()
        };

        // Enviar correo electrónico usando EmailJS
        emailjs.send(
            'service_2okcumj',  // ID del servicio
            'template_hiuzzun',  // ID del template 
            templateParams
        ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            
            successMessage.style.display = 'block';
            
            
            commentInput.value = '';
            commentForm.classList.remove('was-validated');
            
        }).catch(function(error) {
            console.log('FAILED...', error);
            
            
            errorMessage.style.display = 'block';
            
        }).finally(function() {
            // Re-habilitar el botón de envío y ocultar el spinner
            submitButton.disabled = false;
            spinnerElement.classList.add('d-none');
            buttonText.textContent = 'Enviar mensaje';
        });
    });
});
