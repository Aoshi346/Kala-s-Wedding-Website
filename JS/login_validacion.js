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
        'nicole': 'Srta. Nicole Hernández',
        'mac': 'Sr. Alejandro Macari',
        'grecia': 'Srta. Grecia Pumar & Sr. Miguel Zajía',
        'ainara': 'Srta. Ainara De Iribar & Sr. Pedro Jaime',
        'escobar': 'Sra. Marlin Escobar & Familia', /*3 invitados */
        'jon': 'Familia De Iribar Viloria', /*3 invitados */
        'barbie': 'Srta. Bárbara Baptista', 
        'andrea': 'Srta. Andrea Valero',
        'cari': 'Sra. Caribay Goacuto',
        'bela': 'Srta. Anabela Vivas & Sr. Daniel Matheus',
        'peca': 'Sr. Pedro Cárdenas & Sra. Anamaria Alliegro',
        'carlos': 'Sr. Carlos Navarro',
        'linares': 'Familia Linares Vazquez', 
        'hova': 'Sr. Hovannes Marsuian',
        'david': 'Sr. David De Abreu',
        'jorge': 'Sr. Jorge González',
        'regulo': 'Sr. Régulo De Pablos',
        'pulido': 'Familia Pulido Mendez', /*3 invitados */
        'castro': 'Sra. Mailyn Castro',
        'zaida': 'Sra. Zaida Toro',
        'pulitano': 'Sr. Giuseppe Pulitano',
        'yholy': 'Sra. Yholymar Roa',
        'yhol': 'Srta. Yholcris Roa',
        'valero': 'Sr. Carlos Valero',
        'majo': 'Srta. María Jose Sánchez',
        'diaz': 'Familia Díaz Barrios',
        'chopite': 'Sra. Vicmer Chópite',
        'rondon': 'Sra. Yanatha Rondón & Familia',
        'rivas': 'Sra. Bellamelys Rivas',
        'dipentima': 'Sr. Walter & Claudia Di Pentima',
        'prado': 'Nayoli Prado',
        'serafini': 'Sr. Gino Serafini',
        'gatenio': 'Familia Gatenio Sayegh', /* 5 invitados */
        'larnia': 'Sra. Angelica Larnia & Familia',
        'french': 'Sra. Virginia French & Familia',
        'botton': 'Sr. Daniel Botton & Familia',
        'ramos': 'Sr. Sandro Ramos & Familia',
        'jacobo': 'Sr. Jacobo De León & Familia',
        'alejandro': 'Sr. Alejandro Uzcategui',
        'uzcategui': 'Sr. Carlos Uzcategui & Srta. Valentina Sandoval',
        'nico': 'Sr. Nicolas Matheou',
        'perez': 'Sr. Aarón Pérez',
        'benitez': 'Sra. Michelle Benítez & Familia',
        'humberto': 'Sr. Humberto Lamanna',
        'montesinos': 'Familia Montesinos Sanchéz', /* 3 invitados */
        'delcorral': 'Sr. Juan Del Corral',
        'maria': 'Sra. María Gisela González',
        'ani': 'Sra. Ani Mendez',
        'gebran': 'Sr. Carlos Gebran'
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