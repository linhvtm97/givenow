import LocalStorageHelper from './LocalStorageHelper';
import Data from '../constants/Data';

const USER_INFO= Data.userInfo;

export default class {

    static getRole() {
        //Khong ro em set localstorage co cai gi, em sua lai o day
        const user = LocalStorageHelper.getItem(USER_INFO, {});
        return user.role;
    }
}