document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const resizeButton = document.getElementById('resizeButton');

    function createGrid(size) {
        container.innerHTML = '';
        const squareSize = 500 / size;
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = '#000';
            });
            container.appendChild(square);
        }
    }

    resizeButton.addEventListener('click', () => {
        let newSize = parseInt(prompt('Unesite novu veličinu mreže (1-100):'));
        if (newSize >= 1 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert('Unesite broj između 1 i 100.');
        }
    });

    createGrid(16);
});
