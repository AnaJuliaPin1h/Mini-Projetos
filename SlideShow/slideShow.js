'use strict';

const images = [
    { 'id': '1', 'url':'./img/maresias1.png' },
    { 'id': '2', 'url':'./img/alpineoasis1.png' },
    { 'id': '3', 'url':'./img/dark-blue1.png' },
    { 'id': '4', 'url':'./img/gorgeous-dock1.png' },
    { 'id': '5', 'url':'./img/Lago-da-Pampulha.png' },
]

const conteinerItems = document.querySelector('#conteiner-items');

// Esta função recebe as imagens e o container
const loadImages = (images, conteiner) => {
    images.forEach(image => {
        conteiner.innerHTML += `
        <div class='item'>
            <img src='${image.url}'>
        </div>
        `
    })
}

loadImages(images, conteinerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    conteinerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}
const next = () => {
    const lastItem = items[items.length - 1];
    conteinerItems.insertBefore ( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);