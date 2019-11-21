import LocalStorageHelper from './LocalStorageHelper';
import Route from '../constants/Route';
import Data from '../constants/Data';

const TOKEN_BACKEND = Data.authLocalStorage;

export default class AuthHelperBackEnd {

    static checkAuthError(error) {
        if (error.response.status === 401) {
            AuthHelperBackEnd.removeToken();
            window.location.href = Route.backEnd.auth.login.path;
        }

        if (error.response.status === 403) {
            window.location.href = Route.backEnd.home.index.path;
        }
    }

    static getToken() {
        const auth = LocalStorageHelper.getItem(TOKEN_BACKEND, {});
        if (!auth || !auth.access_token) {
            return null;
        }

        const accessToken = auth.access_token;

        return accessToken;
    };

    static setHeaderToken(token = null) {
        if (token) {
            return { headers: { "Authorization": `Bearer ${token}` } };
        }

        const access_token = this.getToken();

        if (access_token) {
            return { headers: { "Authorization": `Bearer ${access_token}` } };
        } else {
            return {};
        }
    };

    static setToken(auth) {
        if (!auth) {
            return null;
        }

        return LocalStorageHelper.setItem(TOKEN_BACKEND, auth);
    };

    static checkAuth() {
        return !!this.getToken();
    };

    static checkAuthBackEnd() {
        const auth = LocalStorageHelper.getItem(TOKEN_BACKEND, {});
        if (!auth || !auth.accessToken) {
            return null;
        }

        return !!auth.isManager;
    };

    static removeToken() {
        return LocalStorageHelper.removeItem(TOKEN_BACKEND);
    };
}
