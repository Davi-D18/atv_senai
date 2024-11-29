import { atividades } from "../data/atividades.js";

// Função para renderizar os cards dinamicamente
function renderizarCards() {
  const container = document.getElementById("card-container");
  atividades.forEach((atividade) => {
    // Criação do elemento do card
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => (window.location.href = atividade.link);

    // Adicionando o conteúdo ao card
    card.innerHTML = `
      <h2>${atividade.icone} ${atividade.titulo}</h2>
      <p>${atividade.descricao}</p>
      <div class="info">
        <span>📂 Categoria: ${atividade.categoria}</span>
      </div>
    `;

    // Adicionando o card ao container
    container.appendChild(card);
  });
}

// Função para animar os cards quando entram na tela
function animarCards() {
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.5 }
  );

  cards.forEach((card) => observer.observe(card));
}

// Adicionando animação CSS
document.addEventListener("DOMContentLoaded", () => {
  // Chama a função para renderizar os cards
  renderizarCards();
  animarCards();
});
