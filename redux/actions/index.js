import {CHANGE_COUNT} from '../actions/type';

export function changeCount(count) {
    console.log('change count = ' + count);
    return {
        type: CHANGE_COUNT,
        payload: count
    }
}
