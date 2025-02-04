<?php
// Configurações do banco de dados
define('DB_HOST', 'localhost');  // Altere se necessário
define('DB_NAME', 'conectas_banco');
define('DB_USER', 'conectas_banco');
define('DB_PASS', '5vaWzRq8FRnJ2Dn78Am5');

try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8", DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["error" => "Erro ao conectar ao banco de dados: " . $e->getMessage()]);
    exit;
}
?>
