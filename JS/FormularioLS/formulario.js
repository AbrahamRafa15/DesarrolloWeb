function guardarDatos() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const edad = parseFloat(document.getElementById('edad').value);
    const diaFavorito = document.getElementById('diaFavorito').value;
    
    // Crear un objeto con los datos del formulario
    const datosFormulario = {
        nombre: nombre,
        edad: edad,
        diaFavorito: diaFavorito
    };

    // Convertir el objeto a una cadena JSON
    const datosJSON = JSON.stringify(datosFormulario);

    // Guardar la cadena JSON en el Local Storage
    localStorage.setItem('datosFormulario', datosJSON);

    // Opcional: Mostrar un mensaje de confirmación
    alert('Datos guardados en el Local Storage');
}

window.onload = function() {
    // Verificar si hay datos guardados en el Local Storage
    const datosGuardados = localStorage.getItem('datosFormulario');
    if (datosGuardados) {
        // Convertir la cadena JSON de vuelta a un objeto
        const datosFormulario = JSON.parse(datosGuardados);
        
        // Rellenar los campos del formulario con los datos guardados
        document.getElementById('nombre').value = datosFormulario.nombre;
        document.getElementById('edad').value = datosFormulario.edad;
        document.getElementById('diaFavorito').value = datosFormulario.mensaje;

        this.document.getElementById("textoFinal").textContent = `Hola ${datosFormulario.nombre}, veo que tienes ${datosFormulario.edad} años y que tu día favorito es ${datosFormulario.mensaje}.`;
    }
    else{
        this.document.getElementById("textoFinal").textContent = "";
    }

};