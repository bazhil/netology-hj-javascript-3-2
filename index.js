'use strict';

const view = document.getElementById('view');
const nav = document.getElementById('nav');
const gallery = nav.getElementsByTagName('a');


for (let image of gallery) {
    image.addEventListener('click', changeImage);
}


function changeImage(event) {
    event.preventDefault(); // отменим переход по ссылке

    for (let image of gallery) {
        image.classList.remove('gallery-current');
    }

    event.currentTarget.classList.add('gallery-current');
    view.src = event.currentTarget.href;
}