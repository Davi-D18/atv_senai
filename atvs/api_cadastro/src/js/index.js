import { mostrarContainer } from '../functions/mostrarContainer.js';
import { mostrarLoader } from '../functions/mostrarLoader.js';

document.addEventListener('DOMContentLoaded', () => {
    const createForm = document.getElementById('createUserForm');
    const resultDiv = document.getElementById('result');

    if (createForm) {
        createForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('createName').value;
            const email = document.getElementById('createEmail').value;
            const age = document.getElementById('createAge').value;

            fetch('http://localhost:8080/atv_senai/atvs/api_cadastro/src/api/api.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: name, email: email, idade: age })
            })
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
        createForm.reset();
    }
});
