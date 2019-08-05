import { error } from './../redux/common/reducer';
import { ResultApiUser } from '../redux/login/types';

export function tokenService(currentUser : ResultApiUser) {

    if (currentUser && currentUser.data) {
        return { 'Authorization': 'Bearer ' + currentUser.data };
    } else {
        return {};
    }
}