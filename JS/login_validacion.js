function validarUsuario() {
    const usuarioPredef = {
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
        'nico': 'Srta. Nicole Hernandez',
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
        'bottom': 'Sr. Daniel Bottom & Familia',
        'ramos': 'Sr. Sandro Ramos & Familia',
        'jacobo': 'Sr. Jacobo De Leon & Familia',
        'alejandro': 'Sr. Alejandro Uzcategui',
        'uzcategui': 'Sr. Carlos Uzcategui & Srta. Valentina Sandoval',
        'nico': 'Sr. Nicolas Matheou',
        'perez': 'Sr. Aaron Perez',
        'mich': 'Sra. Michelle Benitez & Familia',
        'humberto': 'Sr. Humberto Lamanna',
        'zuleima': 'Sra. Zuleima Mijares',
        'sorlene': 'Sra. Sorlene Mijares',
        'zuleica': 'Sra. Zuleica Mijares',
        'soeli': 'Sra. Soeli Mijares',
        'yorja': 'Sr. Yorja Mijares',
        'montesinos': 'Familia Montesinos Sanchéz', /* 3 invitados */
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