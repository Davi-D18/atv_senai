<?php
// Configurações do banco de dados
$host = 'localhost';
$dbname = 'db_usuario';
$user = 'root';
$pass = '';

try {
    // Conexão com o banco de dados
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verifica se os dados foram enviados
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = password_hash($_POST['senha'], PASSWORD_BCRYPT); // Criptografia da senha

        // Insere os dados na tabela
        $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':senha', $senha);

        // Executa a query
        $stmt->execute();

        $mensagemSucesso = "<p class='success'>Usuário cadastrado com sucesso!</p>";

        $mensagemRedirecionamento = "<p><a href='./index.html'>Cadastrar outro usuário</a></p>";
    }
} catch (PDOException $e) {
    if ($e->getCode() == 23000) { // Código de erro para entrada duplicada

        $mensagemErro = "<p class='error'>Erro: Este e-mail já está cadastrado.</p>";

    } else {
        echo "<p class='error'>Erro na conexão: " . $e->getMessage() . "</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado do Cadastro</title>
    <link rel="stylesheet" href="./php.css">
</head>
<body>
    <div class="loader"></div>
    <div class="container">
        <?php if (isset($mensagemSucesso)) {
    echo $mensagemSucesso;
}
?>
        <?php if (isset($mensagemErro)) {
    echo $mensagemErro;
}
?>
        <?php if (isset($mensagemRedirecionamento)) {
    echo $mensagemRedirecionamento;
}
?>
    </div>
  <script src="../js/index.js"></script>
</body>
</html>

