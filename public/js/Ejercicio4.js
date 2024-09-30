document.getElementById('matrixForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const size = parseInt(document.getElementById('size').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(size) || size <= 0) {
        resultDiv.textContent = 'Por favor, introduce un número entero positivo.';
        return;
    }

    const matrix = createMatrix(size);
    displayMatrix(matrix);
});

function createMatrix(n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        matrix[i][i] = 1;
    }
    return matrix;
}

function displayMatrix(matrix) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Matriz Generada:</h2>';
    
    const pre = document.createElement('pre');
    pre.textContent = matrix.map(row => row.join(' ')).join('\n');
    
    resultDiv.appendChild(pre);
}
