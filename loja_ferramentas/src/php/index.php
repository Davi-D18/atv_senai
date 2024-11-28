<?php
  if (isset($_POST['produtos'])) {
    // Recupera os dados enviados
    $produtos = json_decode($_POST['produtos'], true);  // Decodifica o JSON
    $totalGeral = 0;
    
    foreach ($produtos as $produto) {
      // Calcula o total para cada produto
      $total = (int)$produto['quantidade'] * (float)$produto['preco'];
      $totalGeral += $total;
    }
  }
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultados</title>
  <link rel="stylesheet" href="./php.css">
</head>
<body>
  <section class="resultados">
    <h1>Resultado</h1>

    <table>
      <tr>
        <th>Produto</th>
        <th>Quantidade</th>
        <th>Preço</th>
        <th>Total</th>
      </tr>

      <?php if (isset($produtos)): ?>
        <!-- Exibe os dados de cada produto -->
        <?php foreach ($produtos as $produto): ?>
          <tr>
            <td><?=$produto['nome']?></td>
            <td><?=$produto['quantidade']?></td>
            <td>R$ <?=$produto['preco']?></td>
            <td>R$ <?=$produto['total']?></td>
          </tr>
        <?php endforeach; ?>
      <?php endif; ?>

    </table>

    <section class="resultado-total">
      <p><strong>Total Geral: R$ <?=$totalGeral?></strong></p>
    </section>
  </section>
</body>
</html>
