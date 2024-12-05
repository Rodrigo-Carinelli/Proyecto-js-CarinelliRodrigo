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