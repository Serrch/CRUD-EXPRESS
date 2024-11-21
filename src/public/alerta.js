
    document.addEventListener('DOMContentLoaded', function () {
        const alertaBootstrap = document.getElementById('alertaBootstrap');
        if (alertaBootstrap) {
            const message = '<%= message %>';
            const type = '<%= type %>';
            if (message && type) {
                appendAlert(message, type);
            }
        }
    });

    function appendAlert(message, type) {
        let alertPlaceholder = document.getElementById('alertaBootstrap');
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        alertPlaceholder.append(wrapper);
        setTimeout(() => {
            wrapper.remove();
        }, 3000); // Desaparece después de 3 segundos
    }
