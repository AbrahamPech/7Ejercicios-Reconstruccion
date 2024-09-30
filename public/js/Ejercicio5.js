document.addEventListener('DOMContentLoaded', () => {
    const rows = 5;
    const cols = 10;
    const matrix = generateRandomMatrix(rows, cols);

    displayMatrix(matrix);
    calculateRowResults(matrix);
    calculateColResults(matrix);
});

function generateRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 10) + 1);
        }
        matrix.push(row);
    }
    return matrix;
}

function displayMatrix(matrix) {
    const matrixContainer = document.getElementById('matrixContainer');
    const table = document.createElement('table');

    matrix.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    matrixContainer.appendChild(table);
}

function calculateRowResults(matrix) {
    const rowResults = document.querySelector('#rowResults tbody');
    matrix.forEach(row => {
        const sum = row.reduce((acc, val) => acc + val, 0);
        const avg = (sum / row.length).toFixed(1);

        const tr = document.createElement('tr');
        const sumTd = document.createElement('td');
        const avgTd = document.createElement('td');

        sumTd.textContent = sum;
        avgTd.textContent = avg;

        tr.appendChild(sumTd);
        tr.appendChild(avgTd);
        rowResults.appendChild(tr);
    });
}

function calculateColResults(matrix) {
    const colResults = document.querySelector('#colResults tbody');
    const colSums = new Array(matrix[0].length).fill(0);

    matrix.forEach(row => {
        row.forEach((val, colIndex) => {
            colSums[colIndex] += val;
        });
    });

    const sumRow = document.createElement('tr');
    const avgRow = document.createElement('tr');

    const sumTd = document.createElement('td');
    sumTd.textContent = 'C (Suma)';
    sumRow.appendChild(sumTd);

    colSums.forEach(sum => {
        const td = document.createElement('td');
        td.textContent = sum;
        sumRow.appendChild(td);
    });
            
    const avgTd = document.createElement('td');
    avgTd.textContent = 'D (Promedio)';
    avgRow.appendChild(avgTd);

    colSums.forEach(sum => {
        const avg = (sum / matrix.length).toFixed(1);
        const td = document.createElement('td');
        td.textContent = avg;
        avgRow.appendChild(td);
    });

    colResults.appendChild(sumRow);
    colResults.appendChild(avgRow);
}
