// services/wordpressApi.js
import { getCache, setCache } from '../utils/cache';

const API_BASE_URL = 'https://api.conectasaas.com.br/wp-json/wp/v2';

class WordPressApi {
    /**
     * Tenta buscar os dados da URL a partir do cache.
     * Caso não exista ou esteja expirado, faz o fetch, armazena no cache e retorna os dados.
     *
     * @param {string} url - A URL da requisição.
     * @returns {Promise<any>} - Os dados da resposta.
     */
    static async fetchWithCache(url) {
        // Verifica se há dados no cache
        const cachedData = getCache(url);
        if (cachedData) {
            console.log(`Cache hit para: ${url}`);
            return cachedData;
        }

        console.log(`Cache miss para: ${url}. Fazendo fetch...`);
        const response = await fetch(url);
        const data = await response.json();
        // Armazena a resposta no cache
        setCache(url, data);
        return data;
    }

    // Posts
    static async getPosts(params = {}) {
        const queryParams = new URLSearchParams(params).toString();
        const url = `${API_BASE_URL}/posts?${queryParams}`;
        return await WordPressApi.fetchWithCache(url);
    }

    static async getPostBySlug(slug) {
        const url = `${API_BASE_URL}/posts?slug=${slug}`;
        const posts = await WordPressApi.fetchWithCache(url);
        return posts[0];
    }

    // Categories
    static async getCategories(params = {}) {
        const queryParams = new URLSearchParams(params).toString();
        const url = `${API_BASE_URL}/categories?${queryParams}`;
        return await WordPressApi.fetchWithCache(url);
    }

    static async getCategoryBySlug(slug) {
        const url = `${API_BASE_URL}/categories?slug=${slug}`;
        const categories = await WordPressApi.fetchWithCache(url);
        return categories[0];
    }

    // Authors/Users
    static async getUsers(params = {}) {
        const queryParams = new URLSearchParams(params).toString();
        const url = `${API_BASE_URL}/users?${queryParams}`;
        return await WordPressApi.fetchWithCache(url);
    }

    static async getUserBySlug(slug) {
        const url = `${API_BASE_URL}/users?slug=${slug}`;
        const users = await WordPressApi.fetchWithCache(url);
        return users[0];
    }

    // Media
    static async getMedia(id) {
        const url = `${API_BASE_URL}/media/${id}`;
        return await WordPressApi.fetchWithCache(url);
    }

    // Search
    static async search(query, type = 'posts') {
        const url = `${API_BASE_URL}/${type}?search=${query}`;
        return await WordPressApi.fetchWithCache(url);
    }

    // Utils
    static async getPostWithMedia(post) {
        if (!post.featured_media) {
            return { ...post, imageUrl: '/fallback.jpg' };
        }

        try {
            const mediaData = await this.getMedia(post.featured_media);
            return { ...post, imageUrl: mediaData.source_url };
        } catch {
            console.error('Erro ao carregar imagem do post.');
            return { ...post, imageUrl: '/fallback.jpg' };
        }
    }

    static async getPostsWithMedia(posts) {
        return await Promise.all(posts.map(post => this.getPostWithMedia(post)));
    }
}

export default WordPressApi;
