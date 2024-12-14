<?php
header("Content-Type: application/json");
require '../db/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents("php://input"), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE id = ?");
            $stmt->execute([$_GET['id']]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($result ?: ["message" => "Usuário não encontrado."]);
        } else {
            $stmt = $pdo->query("SELECT * FROM usuarios");
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
        }
        break;

    case 'POST':
        $stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, idade) VALUES (?, ?, ?)");
        $stmt->execute([$input['nome'], $input['email'], $input['idade']]);
        echo json_encode(["message" => "Usuário criado com sucesso.", "id" => $pdo->lastInsertId()]);
        break;

    case 'PUT':
        if (isset($_GET['id'])) {
            $stmt = $pdo->prepare("UPDATE usuarios SET nome = ?, email = ?, idade = ? WHERE id = ?");
            $stmt->execute([$input['nome'], $input['email'], $input['idade'], $_GET['id']]);
            echo json_encode(["message" => "Usuário atualizado com sucesso."]);
        } else {
            echo json_encode(["message" => "ID do usuário não fornecido."]);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $stmt = $pdo->prepare("DELETE FROM usuarios WHERE id = ?");
            $stmt->execute([$_GET['id']]);
            echo json_encode(["message" => "Usuário excluído com sucesso."]);
        } else {
            echo json_encode(["message" => "ID do usuário não fornecido."]);
        }
        break;

    default:
        echo json_encode(["message" => "Método não suportado."]);
        break;
}
?>
