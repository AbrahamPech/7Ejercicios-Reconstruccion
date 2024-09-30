document.getElementById('calculate').addEventListener('click', function() {
    const cells1 = document.querySelectorAll('#matrix1 .cell');
    const cells2 = document.querySelectorAll('#matrix2 .cell');

    const matrix1 = [
        [parseFloat(cells1[0].value), parseFloat(cells1[1].value)],
        [parseFloat(cells1[2].value), parseFloat(cells1[3].value)]
    ];

    const matrix2 = [
        [parseFloat(cells2[0].value), parseFloat(cells2[1].value)],
        [parseFloat(cells2[2].value), parseFloat(cells2[3].value)]
    ];

    const sum = calculateSum(matrix1, matrix2);
    const diff = calculateDifference(matrix1, matrix2);
    const product = calculateProduct(matrix1, matrix2);
    const division = calculateDivision(matrix1, matrix2);

    displayResults(sum, diff, product, division);
});

function calculateSum(m1, m2) {
    return [
        [m1[0][0] + m2[0][0], m1[0][1] + m2[0][1]],
        [m1[1][0] + m2[1][0], m1[1][1] + m2[1][1]]
    ];
}

function calculateDifference(m1, m2) {
    return [
        [m1[0][0] - m2[0][0], m1[0][1] - m2[0][1]],
        [m1[1][0] - m2[1][0], m1[1][1] - m2[1][1]]
    ];
}

function calculateProduct(m1, m2) {
    return [
        [m1[0][0] * m2[0][0], m1[0][1] * m2[0][1]],
        [m1[1][0] * m2[1][0], m1[1][1] * m2[1][1]]
    ];
}

function calculateDivision(m1, m2) {
    return [
        [m1[0][0] / m2[0][0], m1[0][1] / m2[0][1]],
        [m1[1][0] / m2[1][0], m1[1][1] / m2[1][1]]
    ];
}

function displayResults(sum, diff, product, division) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Suma:</h3>
        ${sum[0][0]} ${sum[0][1]}<br>
        ${sum[1][0]} ${sum[1][1]}<br>
        <h3>Resta:</h3>
        ${diff[0][0]} ${diff[0][1]}<br>
        ${diff[1][0]} ${diff[1][1]}<br>
        <h3>Producto:</h3>
        ${product[0][0]} ${product[0][1]}<br>
        ${product[1][0]} ${product[1][1]}<br>
        <h3>División:</h3>
        ${division[0][0].toFixed(2)} ${division[0][1].toFixed(2)}<br>
        ${division[1][0].toFixed(2)} ${division[1][1].toFixed(2)}<br>
    `;
}
