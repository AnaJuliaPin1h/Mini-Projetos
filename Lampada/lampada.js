// pegar elementos
const on = document.getElementById('on');
const off = document.getElementById('off');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('imagemquebrado') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './Img/imagemacesso.png';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './Img/imagemdesligado.png';
    }
}

function lampBroken() {
    lamp.src = './Img/imagemquebrado.png';
}

// eventos dos botões
on.addEventListener('click', lampOn);
off.addEventListener('click', lampOff);

// eventos do mouse
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);

// duplo clique quebra
lamp.addEventListener('dblclick', lampBroken);
