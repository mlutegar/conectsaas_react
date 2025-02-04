// services/wordpressApi.js

const API_BASE_URL = 'https://api.conectasaas.com.br/wp-json/wp/v2';

class WordPressApi {
    // Posts
    static async getPosts(params = {}) {
        const queryParams = new URLSearchParams(params).toString();
        const response = await fetch(`${API_BASE_URL}/posts?${queryParams}`);
        return await response.json();
    }

    static async getPostBySlug(slug) {
        const response = await fetch(`${API_BASE_URL}/posts?slug=${slug}`);
        const posts = await response.json();
        return posts[0];
    }

    // Categories
    static async getCategories(params = {}) {
        const queryParams = new URLSearchParams(params).toString();
        const response = await fetch(`${API_BASE_URL}/categories?${queryParams}`);
        return await response.json();
    }

    static async getCategoryBySlug(slug) {
        const response = await fetch(`${API_BASE_URL}/categories?slug=${slug}`);
        const categories = await response.json();
        return categories[0];
    }

    // Authors/Users
    static async getUsers(params = {}) {
        const queryParams = new URLSearchParams(params).toString();
        const response = await fetch(`${API_BASE_URL}/users?${queryParams}`);
        return await response.json();
    }

    static async getUserBySlug(slug) {
        const response = await fetch(`${API_BASE_URL}/users?slug=${slug}`);
        const users = await response.json();
        return users[0];
    }

    // Media
    static async getMedia(id) {
        const response = await fetch(`${API_BASE_URL}/media/${id}`);
        return await response.json();
    }

    // Search
    static async search(query, type = 'posts') {
        const response = await fetch(`${API_BASE_URL}/${type}?search=${query}`);
        return await response.json();
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