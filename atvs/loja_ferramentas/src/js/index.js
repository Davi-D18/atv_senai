const form = document.querySelector('#form-produtos');
    const buttonAdicionarProduto = document.querySelector('.adicionar-produto');
    const arrayProdutos = [];
  
    buttonAdicionarProduto.addEventListener('click', () => {
      adicionarProduto();
    });
  
    function verificacao() {
      const nome = document.querySelector('#nome').value;
      const quantidade = document.querySelector('#quantidade').value;
      const preco = document.querySelector('#preco').value;
  
      if (nome === '' || quantidade === '' || preco === '') {
        alert('Preencha todos os campos');
        return false;
      }
      return true;
    }
  
    function adicionarProduto() {
      if (!verificacao()) {
        return;
      }
  
      const nome = document.querySelector('#nome').value;
      const quantidade = document.querySelector('#quantidade').value;
      const preco = document.querySelector('#preco').value;
  
      const tabela = document.querySelector('#tabela-produtos tbody');
      const total = (quantidade * preco).toFixed(2).replace('.', ',');
  
      const novaLinha = document.createElement('tr');
      novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${quantidade}</td>
        <td>R$ ${preco}</td>
        <td>R$ ${total}</td>
      `;
  
      tabela.appendChild(novaLinha);
  
      // Limpa os campos após adicionar o produto
      document.querySelector('#nome').value = '';
      document.querySelector('#quantidade').value = '';
      document.querySelector('#preco').value = '';
  
      // Armazena os dados no arrayProdutos
      arrayProdutos.push({
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        total: total
      });
    }
  
    // Ao submeter o formulário
    form.addEventListener('submit', (event) => {
      const tabela = document.querySelector('#tabela-produtos tbody');
      if (tabela.children.length === 0) {
        alert('Adicione pelo menos um produto à tabela antes de enviar.');
        event.preventDefault();
        return;
      }
  
      // Preenche o campo oculto com os dados do array
      const produtosInput = document.querySelector('#produtos-json');
      produtosInput.value = JSON.stringify(arrayProdutos);
    });