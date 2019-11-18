export default class {

    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    static getItem(key, defaultValue) {
        try {
            const value = JSON.parse(localStorage.getItem(key));
            return value ? value : defaultValue ? defaultValue : null;
        } catch (err) {
            localStorage.removeItem(key);
            return defaultValue;
        }
    }

    static removeItem(key) {
        localStorage.removeItem(key);
        return true;
    };
}