// reff to HTML
const lblOn  = document.querySelector('#lblOn');
const lblOff = document.querySelector('#lblOff');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    // console.log('conectado');
    lblOff.style.display = 'none';
    lblOn.style.display = '';
});

socket.on('disconnect', () => {
    // console.log('desconectado');
    lblOn.style.display = 'none';
    lblOff.style.display = '';
});

socket.on('enviar-mensaje', (payload) => {
    console.log('!!!!!!', payload);
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    
    const payload = {
        mensaje,
        id: '',
        fecha: new Date().getTime(),
    };

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('desde el server', id);
    });
})