<?php
// Permitir requisições de qualquer origem (mude para seu domínio específico em produção)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Se for uma requisição OPTIONS (preflight), apenas responde e sai
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$servername = "localhost";
$username = "conectas_banco";
$password = "5vaWzRq8FRnJ2Dn78Am5";
$dbname = "conectas_banco";

// Conectar ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Capturar dados do formulário
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';

// Validar entrada
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || empty($nome)) {
    die("Email inválido ou nome em branco.");
}

// Inserir no banco de dados
$stmt = $conn->prepare("INSERT INTO Newsletter (nome, email) VALUES (?, ?)");
$stmt->bind_param("ss", $nome, $email);

if ($stmt->execute()) {
    echo "Inscrição realizada com sucesso!";
} else {
    echo "Erro ao cadastrar: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
