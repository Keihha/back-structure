// reff to HTML
const lblOn  = document.querySelector('#lblOn');
const lblOff = document.querySelector('#lblOff');

const socket = io();

socket.on('connect', () => {
    console.log('conectado');
    lblOff.style.display = 'none';
    lblOn.style.display = '';
});

socket.on('disconnect', () => {
    console.log('desconectado');
    lblOn.style.display = 'none';
    lblOff.style.display = '';
});