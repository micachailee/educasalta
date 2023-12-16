var cardsArticle = document.getElementById('main-content');

var allData;

fetch('../instituciones.json')
    .then(response => response.json())
    .then(data => {
        allData = data;
        //FilterBy('nombre', 'salesiano');
    })
    .catch(error => console.error('Error al obtener el JSON:', error));

function FilterBy(filter, value) {

    if (allData) {
        cardsArticle.innerHTML = '';
        allData.forEach(function (item) {
            if (filterMatches(item, filter, value)) {
                createNewCard(item);
            }
        });
    }
}

function filterMatches(item, filter, value) {

    var filterFunctions = {
        'nivel': function(item, value) {
            return item.nivel.toLowerCase() === value.toLowerCase();
        },
        'nombre': function(item, value) {
            return item.nombre.toLowerCase().includes(value.toLowerCase());
        },
        'sector': function(item, value) {
            return item.sector.toLowerCase() === value.toLowerCase();
        },
        'modalidad':function(item, value) {
            return item.modalidad.toLowerCase() === value.toLowerCase();
        },
        'zona': function(item, value) {
            return item.zona.toLowerCase() === value.toLowerCase();
        },
    };

    if (filterFunctions[filter]) {
        return filterFunctions[filter](item, value);
    }
    return false;
}


function createNewCard(item){

    var cardSection = document.createElement('section');
    cardSection.classList.add('content-section');

    var contentInfo = document.createElement('div');
    contentInfo.classList.add('content-info');

    var imgInst = document.createElement('img');
    imgInst.src = item.imagen;
    imgInst.alt = 'Imagen de la institucion';

    var titleInst = document.createElement('h3');
    titleInst.innerText = item.nombre;

    var readmButton = document.createElement('button');
    readmButton.classList.add('read-more');
    readmButton.innerText = 'Ver mas';

    contentInfo.appendChild(imgInst);
    contentInfo.appendChild(titleInst);

    cardSection.appendChild(contentInfo);
    cardSection.appendChild(readmButton);

    cardsArticle.appendChild(cardSection);
}

