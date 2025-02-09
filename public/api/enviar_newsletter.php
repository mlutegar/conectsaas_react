<?php
$servername = "localhost";
$username = "conectas_banco";
$password = "5vaWzRq8FRnJ2Dn78Am5";
$dbname = "conectas_banco";

// Conectar ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Obter os emails da tabela Newsletter
$sql = "SELECT email FROM Newsletter";
$result = $conn->query($sql);

$emails = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $emails[] = $row['email'];
    }
}

// Fechar conexão com o banco
$conn->close();

// Buscar as últimas 5 notícias do WordPress API
$api_url = "https://api.conectasaas.com.br/wp-json/wp/v2/posts?per_page=5";
$response = file_get_contents($api_url);
$noticias = json_decode($response, true);

// Verificar se existem notícias
if (!$noticias || count($noticias) === 0) {
    die("Nenhuma notícia encontrada para enviar.");
}

// Criar o conteúdo do email
$assunto = "As 5 principais notícias da semana no ConectaSaaS!";
$mensagem = "<html><body>";
$mensagem .= "<h2 style='color: #333;'>📢 As 5 principais notícias da semana no ConectaSaaS!</h2>";
$mensagem .= "<p style='font-size: 16px; color: #666;'>Veja as novidades mais quentes do mundo SaaS.</p>";
$mensagem .= "<hr>";

foreach ($noticias as $noticia) {
    $titulo = $noticia['title']['rendered'];
    $link = $noticia['link'];
    $resumo = isset($noticia['excerpt']['rendered']) ? strip_tags($noticia['excerpt']['rendered']) : "Leia mais...";
    $imagem = "/fallback.jpg"; // Padrão se não tiver imagem

    // Buscar imagem destacada (se disponível)
    if (!empty($noticia['featured_media'])) {
        $media_url = "https://api.conectasaas.com.br/wp-json/wp/v2/media/{$noticia['featured_media']}";
        $media_data = json_decode(file_get_contents($media_url), true);
        if (!empty($media_data['source_url'])) {
            $imagem = $media_data['source_url'];
        }
    }

    // Adicionar cada notícia ao email
    $mensagem .= "<div style='margin-bottom: 20px;'>
        <img src='$imagem' alt='Imagem da notícia' style='max-width: 100%; height: auto; border-radius: 8px;'>
        <h3 style='margin: 10px 0;'><a href='$link' style='color: #007bff; text-decoration: none;'>$titulo</a></h3>
        <p style='color: #555;'>$resumo</p>
        <a href='$link' style='color: #fff; background: #007bff; padding: 8px 12px; text-decoration: none; border-radius: 5px;'>Leia mais</a>
    </div>";
    $mensagem .= "<hr>";
}

$mensagem .= "<p style='text-align: center; color: #999;'>Se não quiser mais receber nossos emails, <a href='#' style='color: red;'>clique aqui para cancelar</a>.</p>";
$mensagem .= "</body></html>";

// Configurar cabeçalhos do email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: ConectaSaaS <newsletter@conectasaas.com.br>" . "\r\n";
$headers .= "Reply-To: contato@conectasaas.com.br" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar emails
foreach ($emails as $email) {
    mail($email, $assunto, $mensagem, $headers);
}

echo "Emails enviados com sucesso!";
?>
