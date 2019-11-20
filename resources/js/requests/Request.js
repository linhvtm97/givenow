import axios from 'axios';
import AuthHelper from "../helpers/AuthHelperBackEnd";

function getHeader(header) {
    return header;
}

export default class Request {
    static get(url, header = {}) {
        return axios.get(url, getHeader(header))
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                AuthHelper.checkAuthError(error);
                return error.response.data;
            });
    };

    static post(url, data, header = {}) {
        return axios.post(url, data, getHeader(header))
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                AuthHelper.checkAuthError(error);
                return error.response.data;
            });
    };

    static put(url, formData, header = {}) {
        return axios.put(url, formData, getHeader(header))
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                AuthHelper.checkAuthError(error);
                return error.response.data;
            });
    }

    static delete(url, header = {}) {
        return axios.delete(url, getHeader(header))
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                AuthHelper.checkAuthError(error);
                return error.response.data;
            });
    };
}