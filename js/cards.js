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

fetch('../instituciones.json')
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
    cardsArticle.innerHTML = `<h4>Resultados de Búsqueda</h4>`;
    institucionesActivas.forEach(institucion => {
        console.log(institucion.nombre);
        createNewCard(institucion);
    });
}

function createNewCard(institucion) {
    var cardSection = document.createElement('section');
    cardSection.classList.add('content-section');

    var contentInfo = document.createElement('div');
    contentInfo.classList.add('content-info');

    var imgInst = document.createElement('img');
    imgInst.src = institucion.imagen;
    imgInst.alt = 'Imagen de la institución';

    var titleInst = document.createElement('h3');
    titleInst.innerText = institucion.nombre;

    var readmButton = document.createElement('button');
    readmButton.classList.add('read-more');
    readmButton.innerText = 'Ver más';

    contentInfo.appendChild(imgInst);
    contentInfo.appendChild(titleInst);

    cardSection.appendChild(contentInfo);
    cardSection.appendChild(readmButton);

    cardsArticle.appendChild(cardSection);
}

document.getElementById('private-filter').addEventListener('click', function (e) {
    filtros.sector = 'privado';
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    createElements(instituciones);
});

document.getElementById('state-filter').addEventListener('click', function () {
    filtros.sector = 'estatal';
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    createElements(instituciones);
});

document.getElementById('om-filter').addEventListener('click', function () {
    filtros.modalidad = 'varones';
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    createElements(instituciones);
});

document.getElementById('ow-filter').addEventListener('click', function () {
    filtros.modalidad = 'mujeres';
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    createElements(instituciones);
});

document.getElementById('m-filter').addEventListener('click', function () {
    filtros.modalidad = 'mixta';
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    createElements(instituciones);
});

document.getElementById('s-filter').addEventListener('click', function () {
    filtros.zona = 'sur';
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    createElements(instituciones);
});

document.getElementById('n-filter').addEventListener('click', function () {
    filtros.zona = 'norte';
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    createElements(instituciones);
});

document.getElementById('e-filter').addEventListener('click', function () {
    filtros.zona = 'este';
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    createElements(instituciones);
});

document.getElementById('o-filter').addEventListener('click', function () {
    filtros.zona = 'oeste';
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    createElements(instituciones);
});

document.getElementById('c-filter').addEventListener('click', function () {
    filtros.zona = 'centro';
    e.target.classList.toggle('category-button-active');
    e.target.classList.toggle('category-button');
    createElements(instituciones);
});

document.getElementById('searchInput').addEventListener('input', function () {
    filtros.nombre = searchInput.value.trim().toLowerCase();
    createElements(instituciones);
});