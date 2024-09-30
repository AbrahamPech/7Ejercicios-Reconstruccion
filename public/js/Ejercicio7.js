// Ejercicio 7: Resumen de calificaciones

function resumenCalificaciones() {
    const calificaciones = [
        [5.5, 8.6, 10],
        [8.0, 5.5, 10],
        [9.0, 4.1, 7.8],
        [10, 2.2, 8.1],
        [7.0, 9.2, 7.1],
        [9.0, 4.0, 6.0],
        [6.5, 5.0, 6.0],
        [4.0, 7.0, 4.0],
        [8.0, 9.0, 9.2],
        [10, 8.4, 5.0],
        [9.0, 4.6, 7.5]
    ];

    // Promedio de cada alumno
    const promedios = calificaciones.map(alumno => {
        const suma = alumno.reduce((acc, nota) => acc + nota, 0);
        const promedio = (suma / alumno.length).toFixed(2);
        return promedio;
    });

    // Promedio más alto
    const maxPromedio = Math.max(...promedios.map(prom => parseFloat(prom))).toFixed(2);

    // Promedio más bajo
    const minPromedio = Math.min(...promedios.map(prom => parseFloat(prom))).toFixed(2);

    // Parciales reprobados (< 7.0)
    const reprobadosPorAlumno = calificaciones.map(alumno => {
        return alumno.filter(nota => nota < 7.0).length; // Contar parciales reprobados por alumno
    });

    const totalReprobados = calificaciones.flat().filter(nota => nota < 7.0).length; // Total de parciales reprobados

    // Distribución de calificaciones
    const distribucion = {
        "0 - 4.9": 0,
        "5.0 - 5.9": 0,
        "6.0 - 6.9": 0,
        "7.0 - 7.9": 0,
        "8.0 - 8.9": 0,
        "9.0 - 10": 0
    };

    promedios.forEach(promedio => {
        const numPromedio = parseFloat(promedio);
        if (numPromedio < 5) distribucion["0 - 4.9"]++;
        else if (numPromedio < 6) distribucion["5.0 - 5.9"]++;
        else if (numPromedio < 7) distribucion["6.0 - 6.9"]++;
        else if (numPromedio < 8) distribucion["7.0 - 7.9"]++;
        else if (numPromedio < 9) distribucion["8.0 - 8.9"]++;
        else distribucion["9.0 - 10"]++;
    });

    return {
        promedios,
        maxPromedio: `Promedio más alto: ${maxPromedio}`,
        minPromedio: `Promedio más bajo: ${minPromedio}`,
        totalReprobados: `Total de parciales reprobados: ${totalReprobados}`,
        reprobadosPorAlumno,
        distribucion
    };
}
