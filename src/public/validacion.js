   
    document.addEventListener("DOMContentLoaded", () => {
        const formulario = document.getElementById("formNuevoUsuario");

        formulario.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefono = document.getElementById("telefono").value.trim();

            // Validar campos
            if (!nombre || !email || !telefono) {
                appendAlert('Completa todos los campos','warning');
                return;
            }

            // Validar correo
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                appendAlert('Ingresa un correo valido','warning');
                return;
            }

            // Validar  teléfono
            if (telefono.length != 10) {
                appendAlert('Ingresa un numero de 10 digitos','warning');
                return;
            }

            
            formulario.submit();
        });
    });


    //Alertas de Bootstrap
    function appendAlert(message, type){
        let alertPlaceholder = document.getElementById('alertaBootstrap');
        const wrapper = document.createElement('div');
        alertPlaceholder.innerHTML = "";
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');
        alertPlaceholder.append(wrapper);
        setTimeout(() => {
            wrapper.remove();
        }, 2000);
    }