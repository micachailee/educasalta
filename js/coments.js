
function enviarFormulario() {
    var nuevoComentario = document.getElementById('comentarios').value;
    var nuevoCorreo = document.getElementById('correo')

    var idInstitucion = 0; 
   
    var json = 'instituciones.json';
    json[idInstitucion].comentarios.push({
        usuario: nuevoCorreo,  
        star: "",           
        descripcion: nuevoComentario
    });
    document.getElementById('formulario').reset();
}

