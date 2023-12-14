var cardsArticle = document.getElementById('main-content');

fetch('../instituciones.json')
.then(response => response.json())
.then(data => {
console.log('Datos del JSON:', data);
data.forEach(function(item) {
    var cardSection = document.createElement('section');
    cardSection.classList.add('content-section');

    var contentInfo = document.createElement('div');
    contentInfo.classList.add('content-info');

    var imgInst = document.createElement('img');
    imgInst.src = item.imagen;
    imgInst.alt = 'Imagen de la institucion';

    var titleInst = document.createElement('h2');
    titleInst.innerText = item.nombre;

    var contentDetail = document.createElement('div');
    contentDetail.classList.add('content-details');

    var readmButton = document.createElement('button');
    readmButton.classList.add('read-more');
    readmButton.innerText = 'Ver mas';

    contentInfo.appendChild(imgInst);
    contentInfo.appendChild(titleInst);

    cardSection.appendChild(contentInfo);
    cardSection.appendChild(contentDetail);
    cardSection.appendChild(readmButton);

    cardsArticle.appendChild(cardSection);
});
})
.catch(error => console.error('Error al obtener el JSON:', error));
