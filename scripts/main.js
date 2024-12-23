nickName = prompt ("Dime cual es tu nombre")

// Variables
const btnReservar = document.getElementById('btnReservar');
const resumenDiv = document.getElementById('resumen');
const detalleReserva = document.getElementById('detalleReserva');

// Evento de clic en el botón "Reservar"
btnReservar.addEventListener('click', () => {
    const nombre = document.getElementById('nombre')?.value || "";
    const email = document.getElementById('email')?.value || "";
    const telefono = document.getElementById('telefono')?.value || "";
    const fecha = document.getElementById('fecha')?.value || "";
    const hora = document.getElementById('hora')?.value || "";
    const personas = parseInt(document.getElementById('personas')?.value || "0", 10);

    
    if (!nombre || !email || !telefono || !fecha || !hora || isNaN(personas) || personas < 1) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    // Condicional: Mostrar un mensaje si las personas > 10
    if (personas > 10) {
        alert('¡Nota! Para reservas de más de 10 personas, nos pondremos en contacto contigo.');
    }

    // Ciclo: Generar el resumen de la reserva
    let resumen = `Nombre: ${nombre}\nCorreo: ${email}\nTeléfono: ${telefono}\nFecha: ${fecha}\nHora: ${hora}\nNúmero de personas: ${personas}\n\n`;
    resumen += 'Revisión de detalles:\n';

    for (let i = 1; i <= personas; i++) {
        resumen += `Persona ${i}: Lista\n`;
    }

    // Mostrar el resumen en la página
    detalleReserva.innerText = resumen;
    resumenDiv.style.display = 'block';
});


function calcularPresupuesto() {
    const ingreso = parseFloat(document.getElementById('ingreso').value);
    const gastos = parseFloat(document.getElementById('gastos').value);
    const ahorro = parseFloat(document.getElementById('ahorro').value);

    if (isNaN(ingreso) || isNaN(gastos) || isNaN(ahorro) || ingreso <= 0 || gastos < 0 || ahorro < 0 || ahorro > 100) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const ahorroDeseado = (ingreso * ahorro) / 100;
    const saldoDisponible = ingreso - gastos - ahorroDeseado;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';

    if (saldoDisponible >= 0) {
        resultadoDiv.innerHTML = `
            <p><strong>Resultados:</strong></p>
            <p>Ahorro Deseado: $${ahorroDeseado.toFixed(2)}</p>
            <p>Saldo Disponible después de Ahorro y Gastos: $${saldoDisponible.toFixed(2)}</p>
        `;
    } else {
        resultadoDiv.innerHTML = `
            <p><strong>Resultados:</strong></p>
            <p>Ahorro Deseado: $${ahorroDeseado.toFixed(2)}</p>
            <p style="color: red;">No es posible cubrir los gastos y el ahorro deseado. Falta $${Math.abs(saldoDisponible).toFixed(2)}</p>
        `;
    }
}

function calcularROI() {
    const ganancias = parseFloat(document.getElementById('ganancias').value);
    const inversion = parseFloat(document.getElementById('inversion').value);

    if (isNaN(ganancias) || isNaN(inversion) || inversion <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const roi = ((ganancias - inversion) / inversion) * 100;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';

    resultadoDiv.innerHTML = `
        <p><strong>Resultados:</strong></p>
        <p>Retorno de Inversión (ROI): <strong>${roi.toFixed(2)}%</strong></p>
    `;

    if (roi < 0) {
        resultadoDiv.innerHTML += `<p class="error">El ROI es negativo. La inversión no fue rentable.</p>`;
    }
}
