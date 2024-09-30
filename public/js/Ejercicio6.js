function resumenVentas() {
    const ventas = [
        [5, 16, 10, 12, 24],
        [40, 55, 10, 11, 18],
        [15, 41, 78, 14, 51],
        [35, 22, 81, 15, 12],
        [50, 12, 71, 10, 20],
        [70, 40, 60, 28, 22],
        [50, 50, 50, 36, 25],
        [40, 70, 30, 11, 20],
        [20, 30, 12, 18, 16],
        [10, 40, 32, 13, 16],
        [50, 3, 24, 15, 82],
        [40, 46, 15, 46, 22]
    ];

    // Encontrar la menor venta
    let minVenta = ventas[0][0];
    let minMes = 0, minDia = 0;
    for (let i = 0; i < ventas.length; i++) {
        for (let j = 0; j < ventas[i].length; j++) {
            if (ventas[i][j] < minVenta) {
                minVenta = ventas[i][j];
                minMes = i + 1;
                minDia = j + 1;
            }
        }
    }

    // Encontrar la mayor venta
    let maxVenta = ventas[0][0];
    let maxMes = 0, maxDia = 0;
    for (let i = 0; i < ventas.length; i++) {
        for (let j = 0; j < ventas[i].length; j++) {
            if (ventas[i][j] > maxVenta) {
                maxVenta = ventas[i][j];
                maxMes = i + 1;
                maxDia = j + 1;
            }
        }
    }

    // Calcular venta total
    let totalVentas = 0;
    for (let i = 0; i < ventas.length; i++) {
        for (let j = 0; j < ventas[i].length; j++) {
            totalVentas += ventas[i][j];
        }
    }

    // Venta por día
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const ventasPorDia = diasSemana.map((dia, j) => {
        let totalPorDia = 0;
        for (let i = 0; i < ventas.length; i++) {
            totalPorDia += ventas[i][j];
        }
        return `$${totalPorDia.toFixed(2)}`; // Formatear total por día
    });

    // Mostrar la matriz de ventas en la tabla
    mostrarMatrizVentas(ventas);

    return {
        menorVenta: `Menor venta: ${minVenta}, Mes: ${minMes}, Día: ${minDia}`,
        mayorVenta: `Mayor venta: ${maxVenta}, Mes: ${maxMes}, Día: ${maxDia}`,
        ventaTotal: `Venta total: $${totalVentas.toFixed(2)}`,
        ventaPorDia: ventasPorDia
    };
}

// Mostrar la matriz de ventas en la tabla
function mostrarMatrizVentas(ventas) {
    const tbody = document.getElementById('matrizVentas').getElementsByTagName('tbody')[0];

    for (let i = 0; i < ventas.length; i++) {
        const fila = document.createElement('tr');

        // Agregar el encabezado del mes
        const encabezadoMes = document.createElement('td');
        encabezadoMes.textContent = `Mes ${i + 1}`;
        fila.appendChild(encabezadoMes);

        // Agregar las ventas de cada día
        for (let j = 0; j < ventas[i].length; j++) {
            const celda = document.createElement('td');
            celda.textContent = ventas[i][j];
            fila.appendChild(celda);
        }

        tbody.appendChild(fila);
    }
}

// Mostrar los resultados en la tabla cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const resultados = resumenVentas();

    // Asignar los resultados a la tabla
    document.getElementById('menorVenta').textContent = resultados.menorVenta;
    document.getElementById('mayorVenta').textContent = resultados.mayorVenta;
    document.getElementById('ventaTotal').textContent = resultados.ventaTotal;

    // Asignar ventas por día
    document.getElementById('ventasLunes').textContent = resultados.ventaPorDia[0];
    document.getElementById('ventasMartes').textContent = resultados.ventaPorDia[1];
    document.getElementById('ventasMiercoles').textContent = resultados.ventaPorDia[2];
    document.getElementById('ventasJueves').textContent = resultados.ventaPorDia[3];
    document.getElementById('ventasViernes').textContent = resultados.ventaPorDia[4];
});
