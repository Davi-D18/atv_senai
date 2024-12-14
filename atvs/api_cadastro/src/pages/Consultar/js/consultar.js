import { mostrarContainer } from '../../../functions/mostrarContainer.js';
import { mostrarLoader } from '../../../functions/mostrarLoader.js';

document.addEventListener('DOMContentLoaded', () => {
    const getForm = document.getElementById('getUserForm');
    const resultDiv = document.getElementById('result');

    if (getForm) {
        getForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const userId = document.getElementById('getUserId').value;

            fetch(`http://localhost:8080/atv_senai/atvs/api_cadastro/src/api/api.php?id=${userId}`)
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
        getForm.reset();
    }
});
