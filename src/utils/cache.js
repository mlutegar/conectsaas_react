// utils/cache.js

const CACHE_EXPIRATION = 5 * 60 * 1000; // Expiração: 5 minutos

/**
 * Armazena os dados no cache com a chave especificada.
 *
 * @param {string} key - A chave para armazenar os dados.
 * @param {any} data - Os dados a serem armazenados.
 */
export function setCache(key, data) {
    const record = {
        data,
        timestamp: Date.now(),
        expiration: CACHE_EXPIRATION,
    };
    localStorage.setItem(key, JSON.stringify(record));
}

/**
 * Tenta recuperar os dados armazenados com a chave especificada.
 * Se os dados expiraram, remove-os e retorna null.
 *
 * @param {string} key - A chave a ser consultada.
 * @returns {any|null} - Os dados armazenados ou null caso não existam/estejam expirados.
 */
export function getCache(key) {
    const recordStr = localStorage.getItem(key);
    if (!recordStr) return null;
    try {
        const record = JSON.parse(recordStr);
        const now = Date.now();
        if (now - record.timestamp > record.expiration) {
            localStorage.removeItem(key);
            return null;
        }
        return record.data;
    } catch (error) {
        localStorage.removeItem(key);
        return null;
    }
}
