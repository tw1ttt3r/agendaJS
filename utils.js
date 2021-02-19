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
    if(agenda.filter(current => current.nombre[0].toLowerCase() === letra.toLowerCase()).length == 0){
        alert(`No existen coincidencias con la letra ${letra}`);
    }
    else{
        agenda
            .filter(current => current.nombre[0].toLowerCase() === letra.toLowerCase()) // []
            .forEach( contacto => visualizaContacto(contacto));
    }
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
    if(contacto.nombre == '' || contacto.apellido == '' || contacto.correo == ''){
        alert('DATOS INCOMPLETOS.\nREVISA CAMPOS OBLIGATORIOS Y VUELVE A INTENTAR');
    }
    else{
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
    const hijonombre = document.createElement('h1');
    const hijodatos = document.createElement('h4');
    const hijoimagen = document.createElement('img');
    hijonombre.innerHTML = `Nombre: ${contacto.nombre}`;
    if (contacto.img == ''){
        hijoimagen.src = 'https://www.informador.mx/__export/1538962710623/sites/elinformador/img/2018/10/07/chiva_audio_crop1538962710413.jpeg_423682103.jpeg';
    }
    else{
    hijoimagen.src = contacto.img;
    }
    if(contacto.cel == '' && contacto.casa == ''){
        hijodatos.innerHTML = `Contacto: ${contacto.correo}`;
    }
    else if(contacto.cel == '' && contacto.casa != '') {
        hijodatos.innerHTML = `Contacto: ${contacto.casa}`;
    }
    else{
        hijodatos.innerHTML = `Contacto: ${contacto.cel}`;
    };
    padre.appendChild(hijonombre);
    padre.appendChild(hijodatos);
    padre.appendChild(hijoimagen);
    contactos.appendChild(padre);
}

function busquedaInput() {
    const valor = document.querySelector('#cadenaBusqueda').value;
    document.querySelector('#contactos').innerHTML = '';
    if(agenda.filter(current => current.nombre.toLowerCase().includes(valor.toLowerCase())).length == 0){
        alert(`No existen coincidencias para ${valor}`);
    }
    else {
    agenda
    .filter(current => current.nombre.toLowerCase().includes(valor.toLowerCase()))
    .forEach( contacto => visualizaContacto(contacto));
    }
    document.querySelector(`#cadenaBusqueda`).value = ''
}