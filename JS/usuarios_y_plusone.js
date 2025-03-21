document.addEventListener('DOMContentLoaded', function() {
    const guestNames = {
        'candela': 'Sra. Teresa de Sanz',
        'sascha': 'Familia Sanz Romero', /*3 invitados */
        'roberto': 'Sr. Aoshi Blanco',
        'roxy': 'Sra. Carolina Sanz',
        'prince': 'Familia Taveras Prince',
        'mirowsky': 'Sra. Sara Mirowsky',
        'lourdes': 'Sra. Lourdes Grillo & Sr. Felippo Fontana',
        'chela': 'Sr. Simon Mijares',
        'guillermo': 'Familia Mijares Sanchéz', /*3 invitados */
        'grillo': 'Sras. Gabriela Grillo & Diana Gonzalez',
        'nena': 'Sra. Lourdes Grillo Puppo',
        'casale': 'Familia Casale Rojas',
        'loredeishon': 'Srta. Loredana Casale',
        'fabi': 'Srta. Fabiana Bianco',
        'nicole': 'Srta. Nicole Hernandez',
        'mac': 'Sr. Alejandro Macari',
        'grecia': 'Srta. Grecia Pumar & Sr. Miguel Zajía',
        'ainara': 'Srta. Ainara De Iribar & Sr. Pedro Jaime',
        'escobar': 'Sra. Marlin Escobar & Familia', /*3 invitados */
        'jon': 'Familia De Iribar Viloria', /*3 invitados */
        'barbie': 'Srta. Barbara Baptista', 
        'andrea': 'Srta. Andrea Valero',
        'cari': 'Sra. Caribay Goacuto',
        'bela': 'Srta. Anabela Vivas & Sr. Daniel Matheus',
        'peca': 'Sr. Pedro Cardenas & Sra. Anamaria Alliegro',
        'carlos': 'Sr. Carlos Navarro',
        'linares': 'Familia Linares Vazquez', 
        'hova': 'Sr. Hovannes Marsuian',
        'david': 'Sr. David De Abreu',
        'jorge': 'Sr. Jorge Gonzalez',
        'regulo': 'Sr. Regulo De Pablos',
        'pulido': 'Familia Pulido Mendez', /*3 invitados */
        'castro': 'Sra. Mailyn Castro',
        'zaida': 'Sra. Zaida',
        'pulitano': 'Sr. Giuseppe Pulitano',
        'yholy': 'Sra. Yholymar Roa',
        'yhol': 'Srta. Yholcris Roa',
        'valero': 'Sr. Carlos Valero',
        'majo': 'Srta. Maria Jose Sanchez',
        'diaz': 'Familia Diaz Barrios',
        'chopite': 'Sra. Vicmer Chopite',
        'rondon': 'Familia Rondon',
        'rivas': 'Sra. Bellamelys Rivas',
        'dipentima': 'Sr. Walter & Claudia Di Pentima',
        'prado': 'Nayoli Prado',
        'serafini': 'Sr. Gino Serafini',
        'gatenio': 'Familia Gatenio Sayageh', /* 5 invitados */
        'larnia': 'Sra. Angelica Larnia & Familia',
        'french': 'Sra. Virginia French & Familia',
        'botton': 'Sr. Daniel Botton & Familia',
        'ramos': 'Sr. Sandro Ramos & Familia',
        'jacobo': 'Sr. Jacobo De Leon & Familia',
        'alejandro': 'Sr. Alejandro Uzcategui',
        'uzcategui': 'Sr. Carlos Uzcategui & Srta. Valentina Sandoval',
        'nico': 'Sr. Nicolas Matheou',
        'perez': 'Sr. Aaron Perez',
        'benitez': 'Sra. Michelle Benitez & Familia',
        'humberto': 'Sr. Humberto Lamanna',
        'montesinos': 'Familia Montesinos Sanchéz', /* 3 invitados */
    };

    const plusOneAllowed = ['roberto', 'mirowsky', 'fabi', 'linares','castro', 'zaida', 
            'pulitano', 'rondon', 'prado', 'nico', 'perez', 'humberto', 'grillo', 'prince', 'grecia', 
            'ainara', 'bela', 'peca', 'diaz', 'dipentima', 'larnia', 'french', 'botton','ramos', 'jacobo',
            'uzcategui', 'alejandro', 'mich', 'casale']; //Usuarios que pueden llevar acompañante

    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('nombreusuario');
    const personalizedNameElement = document.getElementById('personalized-name');

    if (username && guestNames[username.toLowerCase()]) {
        const fullName = guestNames[username.toLowerCase()];
        personalizedNameElement.textContent = fullName;

        // Ponemos el nombre de usuario en el campo de nombre
        const nameInput = document.getElementById('name');
        if (nameInput) {
            nameInput.value = fullName;
        }

        // Se muestra el box de plus one si el usuario tiene
        const plusOneGroup = document.getElementById('plus-one-group');
        const plusOneCheckboxGroup = document.getElementById('plus-one-checkbox-group');
        if (plusOneAllowed.includes(username.toLowerCase())) {
            if (plusOneGroup && plusOneCheckboxGroup) {
                plusOneGroup.style.display = 'block';
                plusOneCheckboxGroup.style.display = 'block';
            }
        } else {
            if (plusOneGroup && plusOneCheckboxGroup) {
                plusOneGroup.style.display = 'none';
                plusOneCheckboxGroup.style.display = 'none';
            }
        }
    } else {
        personalizedNameElement.textContent = 'Invitado';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('plus-one-checkbox').addEventListener('change', function() {
        var plusOneGroup = document.getElementById('plus-one-group');
        if (this.checked) {
            plusOneGroup.style.display = 'none';
        } else {
            plusOneGroup.style.display = 'block';
        }
    });
});