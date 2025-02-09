<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Configurações do Banco de Dados
$servername = "localhost";
$username = "conectas_banco";
$password = "5vaWzRq8FRnJ2Dn78Am5";
$dbname = "conectas_banco";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Erro na conexão com o banco de dados: " . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 🔹 Salvar um novo comentário
    $post_id = $_POST['postId'] ?? null;
    $nome = $_POST['nome'] ?? '';
    $sobrenome = $_POST['sobrenome'] ?? '';
    $mensagem = $_POST['mensagem'] ?? '';

    if (!$post_id || empty($nome) || empty($sobrenome) || empty($mensagem)) {
        die(json_encode(["error" => "Preencha todos os campos."]));
    }

    $stmt = $conn->prepare("INSERT INTO comentarios (post_id, nome, sobrenome, mensagem) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("isss", $post_id, $nome, $sobrenome, $mensagem);
    if ($stmt->execute()) {
        echo json_encode(["success" => "Comentário enviado com sucesso!"]);
    } else {
        echo json_encode(["error" => "Erro ao salvar comentário."]);
    }
    $stmt->close();
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // 🔹 Buscar comentários por `postId`
    $post_id = $_GET['postId'] ?? null;
    if (!$post_id) {
        die(json_encode(["error" => "ID da postagem não fornecido."]));
    }

    $sql = "SELECT id, nome, sobrenome, mensagem, data_criacao FROM comentarios WHERE post_id = ? ORDER BY data_criacao DESC";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $post_id);
    $stmt->execute();
    $result = $stmt->get_result();

    $comentarios = [];
    while ($row = $result->fetch_assoc()) {
        $comentarios[] = [
            "id" => $row["id"],
            "nome" => $row["nome"] . " " . $row["sobrenome"],
            "mensagem" => $row["mensagem"],
            "data" => date("d/m/Y H:i", strtotime($row["data_criacao"]))
        ];
    }

    echo json_encode($comentarios);
    $stmt->close();
}

$conn->close();
?>
