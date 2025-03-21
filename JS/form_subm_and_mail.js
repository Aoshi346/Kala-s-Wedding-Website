document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("ejEUVDFQBqoAiKtY1"); // Se inicia el servicio de EmailJS con nuestra key publica

    // Obtenemos los elementos del formulario
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

    // Confirmamos si el usuario puede llevar un plus one
    let isPlusOneAllowed = false;

    // Obtener el nombre del usuario desde la URL si está presente
    function getNameFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const nameParam = urlParams.get('name');
        if (nameParam) {
            nameInput.value = nameParam;
        }
        
        // chequeamos si el usuario puede traer un plus one
        const username = urlParams.get('nombreusuario');
        if (username) {
            const plusOneAllowed = ['roberto', 'mirowsky', 'fabi', 'linares', 'jorge', 'regulo', 'castro', 'zaida', 
                'pulitano', 'rondon', 'prado', 'nico', 'perez', 'humberto']; 
            
            isPlusOneAllowed = plusOneAllowed.includes(username.toLowerCase());
        }
    }

    // Mostramos o escondemos el campo de plus one dependiendo de la respuesta de asistencia
    function handleAttendanceChange() {
        if (attendanceSelect.value === 'yes' && isPlusOneAllowed) {
            plusOneGroup.style.display = 'block';
            plusOneCheckboxGroup.style.display = 'block';
        } else {
            plusOneGroup.style.display = 'none';
            plusOneCheckboxGroup.style.display = 'none';
            plusOneInput.value = '';
            plusOneCheckbox.checked = false;
        }
    }

    // Mostramos o escondemos el campo de plus one dependiendo de si el usuario selecciona la opción de no llevar acompañante
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

    // Enviamos el formulario
    function handleSubmit(e) {
        e.preventDefault();
        
        // Validacion de campos
        if (!attendanceSelect.value) {
            alert('Por favor selecciona si asistirás o no.');
            return;
        }

        // Deshabilitamos el botón de enviar mientras se envía el email
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        
        // ocultamos cualquier mensaje de error o exito previo
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Creamos los parametros del email
        const templateParams = {
            name: nameInput.value,
            attendance: attendanceSelect.value === 'yes' ? 'Sí, asistiré' : 'No, no podré asistir',
            plus_one: plusOneCheckbox.checked ? 'Sin acompañante' : (plusOneInput.value || 'No especificado')
        };

        console.log('Enviando email con los parametros:', templateParams);

        // Enviamos el mail con EmailJS
        emailjs.send(
            'service_2okcumj',  // ID del servicio
            'template_se9gxoi',  // ID de la plantilla del correo
            templateParams
        ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Mostramos mensaje de exito
            successMessage.style.display = 'block';
            
            // Ponemos el formulario en blanco
            attendanceSelect.value = '';
            plusOneInput.value = '';
            plusOneCheckbox.checked = false;
            plusOneGroup.style.display = 'none';
            plusOneCheckboxGroup.style.display = 'none';
            
        }).catch(function(error) {
            console.log('FAILED...', error);
            
            // Mensaje de error
            errorMessage.style.display = 'block';
            
        }).finally(function() {
            // Habilitamos el botón de enviar
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar';
        });
    }

    // añadimos los eventos a los elementos del formulario
    getNameFromUrl();
    attendanceSelect.addEventListener('change', handleAttendanceChange);
    plusOneCheckbox.addEventListener('change', handlePlusOneCheckbox);
    form.addEventListener('submit', handleSubmit);
    
    // Mostramos u ocultamos el campo de plus one dependiendo de la respuesta de asistencia
    handleAttendanceChange();

    // Form del campo de la canción
    const songForm = document.getElementById('song-form');
    const playButton = document.getElementById('play-btn');
    
    // Prevenimos el envío del formulario al presionar el botón de enter
    songForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenimos que la pag. se recargue
    });
    
    playButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (songForm.checkValidity() === false) {
            event.stopPropagation();
            songForm.classList.add('was-validated');
            return;
        }

        const songInput = document.getElementById('song-input').value.trim();
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('nombreusuario'); 

        // Enviamos el Mail
        emailjs.send('service_2okcumj', 'template_hiuzzun', {
            username: username,
            song: songInput
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('song-success-message').style.display = 'block';
            document.getElementById('song-error-message').style.display = 'none';
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('song-success-message').style.display = 'none';
            document.getElementById('song-error-message').style.display = 'block';
        });

        songForm.reset();
        songForm.classList.remove('was-validated');
    });
});