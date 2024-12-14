import { mostrarContainer } from '../../../functions/mostrarContainer.js';
import { mostrarLoader } from '../../../functions/mostrarLoader.js';

document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result');
    const updateForm = document.getElementById('updateUserForm');

    if (updateForm) {
        updateForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const userId = document.getElementById('updateUserId').value;
            const name = document.getElementById('updateName').value;
            const email = document.getElementById('updateEmail').value;
            const age = document.getElementById('updateAge').value;

            fetch(`http://localhost:8080/atv_senai/atvs/api_cadastro/src/api/api.php?id=${userId}`, {
                method: 'PUT',
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
        updateForm.reset();
    }
});
