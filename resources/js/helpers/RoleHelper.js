import LocalStorageHelper from './LocalStorageHelper';
import Data from '../constants/Data';

const USER_INFO=Data.userInfo;

export default class {

    static getRole() {
        const auth=LocalStorageHelper.getItem(USER_INFO,{});
        return auth.user.role;
    }
}
