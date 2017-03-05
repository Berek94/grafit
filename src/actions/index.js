
import {GET_USERS} from '../constants/constants';

const users = [
    {
        name: 'Vitaliy'
    },
    {
        name: 'Alex'
    },
    {
        name: 'Oleg'
    }
]

export const getUsers = () => {
    return {
        type: GET_USERS,
        payload: users,
    }
}