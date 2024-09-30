document.getElementById('generate').addEventListener('click', function() {
    const size = parseInt(document.getElementById('size').value);
    const matrixContainer = document.getElementById('matrixContainer');
    matrixContainer.innerHTML = '';

    if (size < 3) {
        alert('El tamaño del cuadrado mágico debe ser al menos 3x3.');
        return;
    }

    const table = document.createElement('table');
    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'number';
            input.classList.add('cell');
            input.placeholder = '0';  // Placeholder para sugerir que pongan un número
            input.required = true;
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    matrixContainer.appendChild(table);
});

document.getElementById('check').addEventListener('click', function() {
    const size = parseInt(document.getElementById('size').value);
    const cells = document.querySelectorAll('.cell');
    const matrix = [];
    let index = 0;

    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            const value = parseInt(cells[index].value);
            if (isNaN(value)) {
                alert('Todos los campos deben tener números válidos.');
                return;
            }
            row.push(value);
            index++;
        }
        matrix.push(row);
    }

    const result = isMagicSquare(matrix);
    document.getElementById('result').innerText = result.message;
});

// Función que verifica si es un cuadrado mágico
function isMagicSquare(matrix) {
    const size = matrix.length;
    const magicConstant = (size * (size * size + 1)) / 2;

    // Sumas de filas
    for (let i = 0; i < size; i++) {
        const rowSum = matrix[i].reduce((a, b) => a + b, 0);
        if (rowSum !== magicConstant) {
            return { isMagic: false, message: 'No es un cuadrado mágico.' };
        }
    }

    // Sumas de columnas
    for (let j = 0; j < size; j++) {
        let colSum = 0;
        for (let i = 0; i < size; i++) {
            colSum += matrix[i][j];
        }
        if (colSum !== magicConstant) {
            return { isMagic: false, message: 'No es un cuadrado mágico.' };
        }
    }

    // Suma de la diagonal principal
    let diagSum1 = 0;
    for (let i = 0; i < size; i++) {
        diagSum1 += matrix[i][i];
    }
    if (diagSum1 !== magicConstant) {
        return { isMagic: false, message: 'No es un cuadrado mágico.' };
    }

    // Suma de la diagonal secundaria
    let diagSum2 = 0;
    for (let i = 0; i < size; i++) {
        diagSum2 += matrix[i][size - 1 - i];
    }
    if (diagSum2 !== magicConstant) {
        return { isMagic: false, message: 'No es un cuadrado mágico.' };
    }

    return { isMagic: true, message: `Es un cuadrado mágico. La constante mágica es ${magicConstant}.` };
}
