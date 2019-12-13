import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    category: [],
});

//immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_CATEGORY:
            return state.merge({
                category: action.data
            });
        default:
            return state;
    }
}
