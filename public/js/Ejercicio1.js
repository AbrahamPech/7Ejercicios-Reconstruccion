// Función para generar una matriz 5x5 con números aleatorios
function generarMatriz() {
    const filas = 5; // Número de filas
    const columnas = 5; // Número de columnas
    const matriz = [];

    for (let i = 0; i < filas; i++) {
        const fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push(Math.floor(Math.random() * 10)); // Generar números aleatorios entre 0 y 9
        }
        matriz.push(fila);
    }

    return matriz;
}

// Función para contar ceros en cada renglón
function contarCeros() {
    const arreglo = generarMatriz(); // Generar la matriz 5x5 aleatoria

    const resultados = [];

    arreglo.forEach((fila, index) => {
        const cantidadCeros = fila.filter(num => num === 0).length;
        resultados.push(`Renglón ${index + 1}: ${cantidadCeros} cero(s)`);
    });

    // Mostrar la matriz generada en la consola
    console.table(arreglo);

    // Llamada a la función para mostrar los resultados en la página
    displayResultados(resultados);
}

// Función para mostrar los resultados en la página
function displayResultados(resultados) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores
    resultados.forEach(resultado => {
        resultadosDiv.innerHTML += `${resultado}<br>`;
    });
}
