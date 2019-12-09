import Request from '../Request';
import AuthHelper from '../../helpers/AuthHelperBackEnd';
const API_URL='/api/v1';

export default class {
    static login(formData) {
        const url=`${API_URL}/auth/login`;
        return Request.post(url,formData,AuthHelper.setHeaderToken());
    };

    static register(formData) {
        const url=`${API_URL}/auth/register`;
        return Request.post(url,formData,AuthHelper.setHeaderToken());
    };

    static logout() {
        const url=`${API_URL}/auth/logout`;
        const token=AuthHelper.getToken();
        return Request.post(url,{token},AuthHelper.setHeaderToken());
    };
}
