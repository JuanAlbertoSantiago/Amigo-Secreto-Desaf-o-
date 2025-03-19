// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById('nombreInput');
    const adicionarBtn = document.getElementById('adicionarBtn');
    const listaNombres = document.getElementById('listaNombres');
    const sortearBtn = document.getElementById('sortearBtn');
    const resultado = document.getElementById('resultado');

    const nombres = [];

    adicionarBtn.addEventListener('click', () => {
        const nombre = nombreInput.value.trim();
        if (nombre) {
            nombres.push(nombre);
            const li = document.createElement('li');
            li.textContent = nombre;
            listaNombres.appendChild(li);
            nombreInput.value = '';
        }
    });

    sortearBtn.addEventListener('click', () => {
        if (nombres.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * nombres.length);
            const amigoSecreto = nombres[indiceAleatorio];
            resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
        } else {
            resultado.textContent = 'No hay nombres en la lista para sortear.';
        }
    });
});