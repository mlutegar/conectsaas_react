// services/phpApi.js

// Ajuste a URL conforme a estrutura do seu projeto.
// Se sua API estiver na pasta public/API e o arquivo for index.php, mantenha o caminho abaixo:
const PHP_API_BASE_URL = '/api';

class PHPApi {
    static async getNews() {
        const response = await fetch(`${PHP_API_BASE_URL}/index.php`);
        if (!response.ok) {
            throw new Error('Erro ao buscar dados da API PHP');
        }
        return await response.json();
    }
}

export default PHPApi;
