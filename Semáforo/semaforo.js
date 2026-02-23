const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

// Chamando um método de um objeto dinamicamente
const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = ( ) => {
    if (colorIndex < 2 ){
    colorIndex++ 

    } else {
        colorIndex = 0;
    }
    
}


// Criando a função para trocar automaticamente as cores
const changeColor = () => {
    const colors = ['red', 'yellow','green' ]
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId ); // Para o intervalo automático
}

// Objeto que contém as funções para cada cor do semáforo
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = ' ./img/amarelo.png',
    'green': () => img.src = ' ./img/verde.png', 
    'automatic': () => intervalId = setInterval( changeColor, 1000 )  
    // setInterval executa a função changeColor a cada 1 segundo (1000 
}

// Adicionando evento de clique aos botões
buttons.addEventListener('click', trafficLight );