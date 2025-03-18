function validarUsuario() {
    const usuarioPredef = {
        'candela': 'Sra. Teresa de Sanz',
        'sascha': 'Familia Sanz Romero',
        'roberto': 'Sr. Aoshi Blanco',
        'roxy': 'Sra. Carolina Sanz',
        'prince': 'Familia Taveras Prince',
        'mirowsky': 'Sra. Sara Mirowsky',
        'lourdes': 'Sra. Lourdes Grillo & Sr. Felippo Fontana',
        'chela': 'Sr. Simon Mijares',
        'guillermo': 'Familia Mijares Sanchéz',
        'grillo': 'Sras. Gabriela Grillo & Diana Gonzalez',
        'nena': 'Sra. Lourdes Grillo Puppo',
        'gonzalez': 'Sra. Maria Gisela Gonzalez',
        'jesus': 'Sr. Jesus Vicente & Sra. Yajaira Grillo',
        'vicente': 'Sr. Vicente Grillo',
        'loredeishon': 'Familia Casale Rojas',
        'fabi': 'Srta. Fabiana Bianco',
        'nico': 'Srta. Nicole Hernandez',
        'mac': 'Sr. Alejandro Macari',
        'grecia': 'Srta. Grecia Pumar & Sr. Miguel Zajia',
        'ainara': 'Srta. Ainara De Iribar & Sr. Pedro Jaime',
        'escobar': 'Familia Escobar',
        'jon': 'Familia De Iribar',
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
        'pulido': 'Familia Pulido Mendez',
        'castro': 'Sra. Mailyn Castro',
        'zaida': 'Sra. Zaida',
        'pulitano': 'Sr. Giuseppe Pulitano',
        'yholy': 'Sra. Yholymar Roa',
        'fran': 'Sr. Francisco Pinto',
        'valero': 'Sr. Carlos Valero',
        'majo': 'Srta. Maria Jose Sanchez',
        'diaz': 'Familia Diaz Barrios',
        'chopite': 'Sra. Vicmer Chopite',
        'rondon': 'Familia Rondon',
        'rivas': 'Sra. Bellamelys Rivas',
        'dipentima': 'Sr. Walter & Claudia Di Pentima',
        'prado': 'Nayoli Prado',
        'serafini': 'Sr. Gino Serafini',
        'gatenio': 'Familia Gatenio Sayageh',
        'larnia': 'Sra. Angelica Larnia & familia',
        'french': 'Sra. Virginia French & familia',
        'bottom': 'Sr. Daniel Bottom & familia',
        'ramos': 'Sr. Sandro Ramos & familia',
        'jacobo': 'Sr. Jacobo De Leon & familia',
        'alejandro': 'Sr. Alejandro Uzcategui',
        'uzcategui': 'Sr. Carlos Uzcategui & Srta. Valentina Sandoval',
        'nico': 'Sr. Nicolas Matheou',
        'perez': 'Sr. Aaron Perez',
        'mich': 'Sra. Michelle Benitez & familia',
        'humberto': 'Sr. Humberto Lamanna',
        'zuleima': 'Sra. Zuleima Mijares',
        'sorlene': 'Sra. Sorlene Mijares',
        'zuleica': 'Sra. Zuleica Mijares',
        'soeli': 'Sra. Soeli Mijares',
        'yorja': 'Sr. Yorja Mijares',
        'mamaita': 'Sra. Sara Prince',
        'rosita': 'Sra. Rosita Prince',
        'rosnel': 'Sra. Rosnel Prince',
        'chack': 'Sr. Ernesto Davila'
    }; // Listado de los invitados

    const usernameInput = document.getElementById('nombreusuario').value.toLowerCase(); // Obtener el valor del input y convertirlo a minúsculas
    const alertDiv = document.getElementById('alert');

    // Verificar si el usuario ingresado está en la lista de invitados
    if (usuarioPredef[usernameInput]) {
        const displayName = usuarioPredef[usernameInput];
        window.location.href = `body.html?nombreusuario=${encodeURIComponent(usernameInput)}`;
    } else {
        alertDiv.textContent = 'Usuario no válido';
        alertDiv.classList.add('show');
        // De lo contrario, mostrar un mensaje de error
    }
}