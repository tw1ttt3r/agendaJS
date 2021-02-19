const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Todos'];

const formulario = ['nombre', 'apellido', 'cel', 'casa', 'correo', 'alias', 'img'];

const agenda = [];

document.querySelector('#guardar').addEventListener('click', agregaContacto);

function generaBotones() {
    const contenedor = document.querySelectorAll('.botonera')[0];
    alphabet.forEach( letra => {
        const el = document.createElement('button');
        el.innerHTML = letra;
        el.addEventListener('click', () => {
            if (letra === 'Todos') {
                imprimeTodos();
            } else {
                clickBotonesLetras(letra);
            }
        });
        contenedor.appendChild(el);
    });
}

function clickBotonesLetras(letra) {
    document.querySelector('#contactos').innerHTML = '';
    agenda
        .filter(current => current.nombre[0].toLowerCase() === letra.toLowerCase()) // []
        .forEach( contacto => visualizaContacto(contacto));
}

function imprimeTodos() {
    document.querySelector('#contactos').innerHTML = '';
    agenda.forEach( contacto => visualizaContacto(contacto));
}

function agregaContacto() {
    const contacto = {};
    // contacto.nombre = document.querySelector('#nombre').value;
    // contacto.apellido = document.querySelector('#apellido').value;
    // contacto.cel = document.querySelector('#cel').value;
    // contacto.casa = document.querySelector('#casa').value;
    // contacto.correo = document.querySelector('#correo').value;
    // contacto.alias = document.querySelector('#alias').value;
    // contacto.img = document.querySelector('#img').value;
    formulario.forEach( el => contacto[el] = document.querySelector(`#${el}`).value);
    
    // document.querySelector('#nombre').value = '';
    // document.querySelector('#apellido').value = '';
    // document.querySelector('#cel').value = '';
    // document.querySelector('#casa').value = '';
    // document.querySelector('#correo').value = '';
    // document.querySelector('#alias').value = '';
    // document.querySelector('#img').value = '';
    formulario.forEach( el => document.querySelector(`#${el}`).value = '');

    agenda.push(contacto);

    visualizaContacto(contacto);
}

function visualizaContacto(contacto) {
    const contactos = document.querySelector('#contactos')
    // for (let contacto of agenda) {  
        // const padre = document.createElement('div');
        // const hijo = document.createElement('h1');
        // hijo.innerHTML = contacto.nombre;
        // padre.appendChild(hijo);
        // contactos.appendChild(padre);
    // }
    const padre = document.createElement('div');
    const hijo = document.createElement('h1');
    hijo.innerHTML = contacto.nombre;
    padre.appendChild(hijo);
    contactos.appendChild(padre);
}

function busquedaInput() {
    const valor = document.querySelector('#cadenaBusqueda').value;
    document.querySelector('#contactos').innerHTML = '';
    agenda
    .filter(current => current.nombre.toLowerCase() === valor.toLowerCase())
    .forEach( contacto => visualizaContacto(contacto));
    document.querySelector(`#cadenaBusqueda`).value = ''
}