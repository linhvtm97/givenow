import LocalStorageHelper from './LocalStorageHelper';
import Data from '../constants/Data';

const TOKEN_BACKEND = Data.authLocalStorage;

export default class AuthHelper {

    static checkAuthError(error) {
        if (error.response.status === 401) {
            AuthHelper.removeToken();
            window.location.href = Data.routeSignInBackEnd;
        }

        if (error.response.status === 403) {
            window.location.href = Data.routeHomeBackEnd;
        }
    }

    static getToken() {
        const auth = LocalStorageHelper.getItem(TOKEN_BACKEND, {});
        if (!auth || !auth.accessToken) {
            return null;
        }

        const now = new Date().getTime();
        const expiresTime = auth.expiresTime;

        if (now > expiresTime) {
            return null;
        }

        const accessToken = auth.accessToken;

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

        auth.expiresTime = new Date().getTime() + auth.expiresIn * 1000;
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
