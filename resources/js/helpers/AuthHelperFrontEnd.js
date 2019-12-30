import LocalStorageHelper from './LocalStorageHelper';
import Route from '../constants/Route';
import Data from '../constants/Data';

const TOKEN_FRONTEND=Data.authLocalStorage;

export default class AuthHelperFrontEnd {

    static checkAuthError(error) {
        if(error.response.status===401) {
            AuthHelperFrontEnd.removeToken();
            window.location.href=Route.frontEnd.home.index.path;
        }

        if(error.response.status===403) {
            window.location.href=Route.frontEnd.home.index.path;
        }
    }

    static getToken() {
        const auth=LocalStorageHelper.getItem(TOKEN_FRONTEND,{});
        if(!auth||!auth.access_token) {
            return null;
        }

        const accessToken=auth.access_token;

        return accessToken;
    };

    static setHeaderToken(token=null) {
        if(token) {
            return {headers: {"Authorization": `Bearer ${token}`}};
        }

        const access_token=this.getToken();

        if(access_token) {
            return {headers: {"Authorization": `Bearer ${access_token}`}};
        } else {
            return {};
        }
    };

    static setToken(auth) {
        if(!auth) {
            return null;
        }

        return LocalStorageHelper.setItem(TOKEN_FRONTEND,auth);
    };

    static checkAuth() {
        return !!this.getToken();
    };

    static checkAuthFrontEnd() {
        const auth=LocalStorageHelper.getItem(TOKEN_FRONTEND,{});
        if(!auth||!auth.accessToken) {
            return null;
        }

        return !!auth.isManager;
    };

    static removeToken() {
        return LocalStorageHelper.removeItem(TOKEN_FRONTEND);
    };
}
