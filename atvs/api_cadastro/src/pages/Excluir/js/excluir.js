import { mostrarContainer } from '../../../functions/mostrarContainer.js';
import { mostrarLoader } from '../../../functions/mostrarLoader.js';

document.addEventListener('DOMContentLoaded', () => {
    const deleteForm = document.getElementById('deleteUserForm');
    const resultDiv = document.getElementById('result');

    if (deleteForm) {
        deleteForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const userId = document.getElementById('deleteUserId').value;

            fetch(`http://localhost:8080/atv_senai/atvs/api_cadastro/src/api/api.php?id=${userId}`, { method: 'DELETE' })
                .then(response => response.json())
                .then(data => displayResult(data));
        });
    }

    function displayResult(data) {
        mostrarContainer(false);
        mostrarLoader(true);
        setTimeout(() => {
            console.log(data);
            resultDiv.innerHTML = `
                  <pre>${JSON.stringify(data, null, 2)}</pre>
              `;
            mostrarLoader(false);
            mostrarContainer(true);
        }, 1200)
        deleteForm.reset();
    }
});
