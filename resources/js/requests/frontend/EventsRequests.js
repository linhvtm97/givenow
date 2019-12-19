import Request from '../Request';
import AuthHelper from '../../helpers/AuthHelperFrontEnd';
const API_URL='/api/v1';

export default class {
    static getAll($param='') {
        const url=`${API_URL}/events?filters[]=status,0&sort=end_date,desc&`+$param;
        return Request.get(url,AuthHelper.setHeaderToken());
    };

    static create(formData) {
        const url=`${API_URL}/events`;
        return Request.post(url,formData,AuthHelper.setHeaderToken());
    };

    static update(id,formData) {
        const url=`${API_URL}/events/${id}`;
        return Request.put(url,formData,AuthHelper.setHeaderToken());
    };

    static showByID(id) {
        const url=`${API_URL}/events/${id}`;
        return Request.get(url,AuthHelper.setHeaderToken());
    };

    static deleteByID(id) {
        const url=`${API_URL}/events/${id}`;
        return Request.delete(url,AuthHelper.setHeaderToken());
    };
}
