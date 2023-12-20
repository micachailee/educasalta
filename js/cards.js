import { Institucion } from './institution.js'; 

var cardsArticle = document.getElementById('main-content');
var instituciones;

const filtros = {
    nombre: "",
    zona: "",
    tipo: "",
    sector: "",
    modalidad: "",
};

fetch('instituciones.json')
    .then(response => response.json())
    .then(data => {
        instituciones = data.map(item => new Institucion(item.nombre, item.descripcion, item.imagen, item.direccion, item.zona, item.tipo, item.contacto, item.otros, item.sector, item.modalidad, item.comentarios));
        createElements(instituciones);
    })
    .catch(error => console.error('Error al obtener el JSON:', error));

function FilterBy(institucion, filtros) {
    return Object.entries(filtros).every(([filtro, valor]) => institucion[filtro].toLowerCase().includes(valor.toLowerCase()));
}

function createElements(instituciones) {
    instituciones.forEach(institucion => {
        institucion.active = FilterBy(institucion, filtros);
    });
    const institucionesActivas = instituciones.filter(institucion => institucion.active);
    cardsArticle.innerHTML = '';
    if(institucionesActivas.length === 0){
        var notFindContent = document.createElement('section');
        notFindContent.classList.add('notFindContent');

        var notFindImg = document.createElement('img');
        notFindImg.src = "../img/searchicon.png";
        notFindImg.alt = 'Institucion no encontrada';
        notFindImg.classList.add('notFind-img');

        var notFind = document.createElement('h3');
        notFind.innerText = "No se encontraron resultados";

        notFindContent.appendChild(notFindImg);
        notFindContent.appendChild(notFind)

        cardsArticle.appendChild(notFindContent)
    }else{
        institucionesActivas.forEach(institucion => {
            createNewCard(institucion);
        });
    }
}




function createNewCard(institucion) {
    var cardSection = document.createElement('section');
    cardSection.classList.add('content-section');

    var imgInst = document.createElement('img');
    imgInst.src = institucion.imagen;
    imgInst.alt = 'Imagen de la institución';
    imgInst.classList.add('inst-img');

    var titleInst = document.createElement('h3');
    titleInst.innerText = institucion.nombre;
    
    var contentInfo = document.createElement('div');
    contentInfo.classList.add('content-info');

    var readmButton = document.createElement('button');
    readmButton.classList.add('read-more');
    readmButton.innerText = 'Ver más';
    readmButton.addEventListener('click',function(){
        const siguientePaginaURL = `informacion.html?titulo=${encodeURIComponent(institucion.nombre)}`;
        window.location.href = siguientePaginaURL;
    })

    contentInfo.appendChild(imgInst);
    contentInfo.appendChild(titleInst);

    cardSection.appendChild(contentInfo);
    cardSection.appendChild(readmButton);

    cardsArticle.appendChild(cardSection);
}
//codigo micaela A.
// function createNewCard(institucion) {
//     var cardLink = document.createElement('a');
//     cardLink.href = institucion.direccion;

//     var cardSection = document.createElement('section');
//     cardSection.classList.add('content-section');

//     var imgInst = document.createElement('img');
//     imgInst.src = institucion.imagen;
//     imgInst.alt = 'Imagen de la institución';
//     imgInst.classList.add('inst-img'); // Nueva clase para la imagen

//     var titleInst = document.createElement('h3');
//     titleInst.innerText = institucion.nombre;

//     var readmButton = document.createElement('button');
//     readmButton.classList.add('read-more');
//     readmButton.innerText = 'Ver más';

//     cardSection.appendChild(imgInst);
//     cardSection.appendChild(titleInst);
//     cardSection.appendChild(readmButton);

//     cardLink.appendChild(cardSection);
//     cardsArticle.appendChild(cardLink);
// }

document.getElementById('private-filter').addEventListener('click', function (e) {
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    filtros.sector = e.target.classList.contains('category-button-active') ? 'privado' : '';
    createElements(instituciones);
});

document.getElementById('state-filter').addEventListener('click', function (e) {
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    filtros.sector = e.target.classList.contains('category-button-active') ? 'estatal' : '';
    createElements(instituciones);
});

document.getElementById('om-filter').addEventListener('click', function (e) {
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    filtros.modalidad = e.target.classList.contains('category-button-active') ? 'varones' : '';
    createElements(instituciones);
});

document.getElementById('ow-filter').addEventListener('click', function (e) {
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    filtros.modalidad = e.target.classList.contains('category-button-active') ? 'mujeres' : '';
    createElements(instituciones);
});

document.getElementById('m-filter').addEventListener('click', function (e) {
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    filtros.modalidad = e.target.classList.contains('category-button-active') ? 'mixta' : '';
    createElements(instituciones);
});

document.getElementById('s-filter').addEventListener('click', function (e) {
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    filtros.zona = e.target.classList.contains('category-button-active') ? 'sur' : '';
    createElements(instituciones);
});

document.getElementById('n-filter').addEventListener('click', function (e) {
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    filtros.zona = e.target.classList.contains('category-button-active') ? 'norte' : '';
    createElements(instituciones);
});

document.getElementById('e-filter').addEventListener('click', function (e) {
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    filtros.zona = e.target.classList.contains('category-button-active') ? 'este' : '';
    createElements(instituciones);
});

document.getElementById('o-filter').addEventListener('click', function (e) {
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    filtros.zona = e.target.classList.contains('category-button-active') ? 'oeste' : '';
    createElements(instituciones);
});

document.getElementById('c-filter').addEventListener('click', function (e) {
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    filtros.zona = e.target.classList.contains('category-button-active') ? 'centro' : '';
    createElements(instituciones);
});

document.getElementById('searchInput').addEventListener('input', function () {
    filtros.nombre = searchInput.value.trim().toLowerCase();
    createElements(instituciones);
});