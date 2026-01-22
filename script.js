document.addEventListener('DOMContentLoaded', () => {

    console.log('🚀 ¡Bienvenido al Blog de Zomeño! Sistema cargado correctamente.');

    const titulo = document.querySelector('h1');

    titulo.style.cursor = 'pointer';

    titulo.addEventListener('click', () => {
        const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        titulo.style.color = colorAleatorio;

        alert('✨ ¡Has descubierto el secreto! Ahora el título tiene un nuevo color.');
    });
});