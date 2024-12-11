<?php
$server = 'localhost:3300';
$user = 'root';
$pass = ''; // Usar o Xamp que não tem senha por padrão
$db = 'prova_pratica';

$message = ''; // Variável para armazenar mensagens de sucesso ou erro

try {
    // Conectar ao banco de dados MySQL via PDO
    $pdo = new PDO("mysql:host=$server;dbname=$db", "$user", "$pass");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verificar se os dados foram enviados via POST
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $nome = $_POST['nome'];
        $idade = $_POST['idade'];
        $email = $_POST['email'];
        
        // Inserir os dados na tabela usuarios
        $stmt = $pdo->prepare("INSERT INTO usuarios (nome, idade, email) VALUES (:nome, :idade, :email)");
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':idade', $idade);
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        // Definir mensagem de sucesso
        $message = "<div class='message success'><strong>Usuário inserido com sucesso!</strong><br>Nome: $nome<br>Idade: $idade<br>E-mail: $email</div>";
    }
} catch (PDOException $e) {
    // Definir mensagem de erro
    $message = "<div class='message error'>Erro: " . $e->getMessage() . "</div>";
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado do Cadastro</title>
    <link rel="stylesheet" href="./style/inserir_usuario.css">
    <link rel="stylesheet" href="../styles/global.css">
</head>
<body>
    <header>
        <h1>Resultado do Cadastro</h1>
    </header>

    <div class="container-loader"></div>

    <div class="container">
        <h2>Resultado do Cadastro:</h2>
        
        <?php echo $message; // Exibe a mensagem de sucesso ou erro ?>

        <a href="../../index.html" class="btn">Voltar</a>
    </div>

    <footer>
        <p>&copy; 2024 Cadastro de Usuário - Todos os direitos reservados</p>
    </footer>

    <script src="./js/index.js"></script>
</body>
</html>
