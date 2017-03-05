import {GET_USERS} from '../constants/constants';

const initialState = {
    users: [],
    filter: '',
    cities: [],
}

export default function (state = initialState, action) {
    if (action.type === GET_USERS) {
        return {
            ...state,
            users: [
                ...state.users,
                ...action.payload,
            ],
        };
    }
    return state;
}