const urlParams = new URLSearchParams(window.location.search);
const tituloDePagina = urlParams.get('titulo');
const filtro = urlParams.get('filtro');
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById('descripcion');
const miFrame = document.getElementById("miFrame");
const ubicacion = document.getElementById("ubicacion");
const modalidad = document.getElementById("modalidad");
const otros = document.getElementById("otros");
const contacto = document.getElementById("contacto");
const miimagen = document.getElementById("imagen");

// Usar los datos como sea necesario

function cargarInstituciones(callback) {
    // En este ejemplo, la URL podría ser la ruta local o una URL remota
    fetch('instituciones.json')
      .then(response => response.json())
      .then(data => {
        callback(data);
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });
  }
  
  // Función para obtener una institución por nombre
  function obtenerInstitucionPorNombre(nombreInstitucion, instituciones) {
    return instituciones.find(institucion => institucion.nombre === nombreInstitucion);
  }
  
  // Uso de las funciones
  cargarInstituciones(function(instituciones) {
    const institucionEncontrada = obtenerInstitucionPorNombre(tituloDePagina, instituciones);
  
    if (institucionEncontrada) {
        miimagen.src = institucionEncontrada.imagen;
        titulo.innerHTML= tituloDePagina;
        // Asignar la descripción al elemento HTML
        
        descripcion.textContent = institucionEncontrada.descripcion;
        // Cambiar el atributo src del frame
        miFrame.src = institucionEncontrada.direccion;
        ubicacion.innerHTML="Ubicado en zona <br>"+institucionEncontrada.zona;
        modalidad.innerHTML= institucionEncontrada.modalidad;
        otros.innerHTML= institucionEncontrada.otros;
        contacto.innerHTML= institucionEncontrada.contacto;
    } else {
      console.log('Institución no encontrada');
    }
  });





function mostrarPopup() {
document.getElementById('form').style.display = 'block';
/*document.getElementById('overlay').style.display = 'block';*/
}

function cerrarPopup() {
document.getElementById('form').style.display = 'none';
/*document.getElementById('overlay').style.display = 'none';*/
}
