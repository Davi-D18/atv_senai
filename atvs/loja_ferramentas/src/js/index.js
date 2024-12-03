const form = document.querySelector("#form-produtos");
const buttonAdicionarProduto = document.querySelector(".adicionar-produto");
const arrayProdutos = [];

buttonAdicionarProduto.addEventListener("click", () => {
  adicionarProduto();
});

function verificacao() {
  const nome = document.querySelector("#nome").value;
  const quantidade = document.querySelector("#quantidade").value;
  const preco = document.querySelector("#preco").value;

  if (nome === "" || quantidade === "" || preco === "") {
    alert("Preencha todos os campos");
    return false;
  }
  document.querySelector(".container-tabela").style.display = "flex";
  return true;
}

function adicionarProduto() {
  if (!verificacao()) {
    return;
  }

  const nome = document.querySelector("#nome").value;
  const quantidade = document.querySelector("#quantidade").value;
  const preco = document.querySelector("#preco").value;

  const tabela = document.querySelector("#tabela-produtos tbody");
  const total = (quantidade * preco).toFixed(2).replace(".", ",");

  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${quantidade}</td>
        <td>R$ ${preco}</td>
        <td>R$ ${total}</td>
        <td>
          <button class="remover-produto">
            <img src="https://cdn-icons-png.flaticon.com/512/5510/5510213.png" alt="Remover produto" />
          </button>
        </td>
      `;

  tabela.appendChild(novaLinha);

  // Armazena os dados no arrayProdutos
  arrayProdutos.push({
    nome: nome,
    quantidade: quantidade,
    preco: preco,
    total: total,
  });

  // Adiciona evento de clique ao botão de remover
  novaLinha.querySelector(".remover-produto").addEventListener("click", () => {
    const index = Array.from(tabela.children).indexOf(novaLinha);
    arrayProdutos.splice(index, 1);
    tabela.removeChild(novaLinha);

    if (tabela.children.length === 0) {
      document.querySelector(".container-tabela").style.display = "none";
    }
  });

  // Limpa os campos após adicionar o produto
  document.querySelector("#nome").value = "";
  document.querySelector("#quantidade").value = "";
  document.querySelector("#preco").value = "";
}

// Ao submeter o formulário
form.addEventListener("submit", (event) => {
  const tabela = document.querySelector("#tabela-produtos tbody");
  if (tabela.children.length === 0) {
    alert("Adicione pelo menos um produto à tabela antes de enviar.");
    event.preventDefault();
    return;
  }

  // Preenche o campo oculto com os dados do array
  const produtosInput = document.querySelector("#produtos-json");
  produtosInput.value = JSON.stringify(arrayProdutos);
});
