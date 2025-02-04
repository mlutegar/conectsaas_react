<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once 'config.php';

try {
    $query = "SELECT * FROM wp_newsletter";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result, JSON_PRETTY_PRINT);
} catch (PDOException $e) {
    echo json_encode(["error" => "Erro ao buscar dados: " . $e->getMessage()]);
}
?>
