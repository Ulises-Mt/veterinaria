document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('diagnostico-form');
    const tablaRegistros = document.getElementById('tabla-registros');
    const botonDescargar = document.getElementById('boton-descargar');
    const botonMostrar = document.getElementById('boton-mostrar');
    const botonBorrar = document.getElementById('boton-borrar');
    let registros = [];

    // Función para agregar un registro
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombrePaciente = document.getElementById('nombre-paciente').value;
        const diagnostico = document.getElementById('diagnostico').value;
        const tratamiento = document.getElementById('tratamiento').value;
        const observaciones = document.getElementById('observaciones').value;

        const registro = { nombrePaciente, diagnostico, tratamiento, observaciones };
        registros.push(registro);
        formulario.reset();
    });

    // Mostrar registros en la tabla
    botonMostrar.addEventListener('click', () => {
        actualizarTabla();
    });

    // Actualizar tabla
    function actualizarTabla() {
        tablaRegistros.innerHTML = '';
        if (registros.length === 0) {
            const filaVacia = document.createElement('tr');
            filaVacia.innerHTML = `
                <td colspan="4" style="text-align: center;">No hay registros disponibles</td>
            `;
            tablaRegistros.appendChild(filaVacia);
        } else {
            registros.forEach((registro) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${registro.nombrePaciente}</td>
                    <td>${registro.diagnostico}</td>
                    <td>${registro.tratamiento}</td>
                    <td>${registro.observaciones}</td>
                `;
                tablaRegistros.appendChild(fila);
            });
        }
    }

    // Borrar todos los registros
    botonBorrar.addEventListener('click', () => {
        if (confirm("¿Estás seguro de que deseas borrar todos los registros?")) {
            registros = [];
            actualizarTabla();
        }
    });

    // Descargar registros como CSV
    botonDescargar.addEventListener('click', () => {
        const contenidoCSV = "data:text/csv;charset=utf-8,"
            + registros.map(r => Object.values(r).join(",")).join("\n");
        const uriCodificada = encodeURI(contenidoCSV);
        const enlace = document.createElement('a');
        enlace.setAttribute('href', uriCodificada);
        enlace.setAttribute('download', 'registros.csv');
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    });
});
