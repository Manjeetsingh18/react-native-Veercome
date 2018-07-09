import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import api from '../../helpers/ApiClient';
import config from '../../config/appconfig';

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const UPDATE = 'UPDATE';
const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
const UPDATE_FAIL = 'UPDATE_FAIL';


const initialState = {
    isLoading: false,
    ErorMessage: undefined,
    data: undefined
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case LOGIN: {
            return { ...state, isLoading: true };
        }

        case LOGIN_SUCCESS: {
            return { ...state, isLoading: false, data: action.result };
        }

        case LOGIN_FAIL: {
            return { ...state, isLoading: false, ErorMessage: 'Login Failed' };
        }

        case UPDATE: {
            return { ...state, isLoading: true };
        }

        case UPDATE_SUCCESS: {
            return { ...state, isLoading: false, data: action.result };
        }

        case UPDATE_FAIL: {
            return { ...state, isLoading: false, ErorMessage: 'Password Updatetion has failed' };
        }

        default:
            return state;
    }
}

//--------------------
// login api call here
//--------------------

export function login(data) {
    return (dispatch, getState) => new Promise((resolve, reject) => {
        dispatch({ type: LOGIN });
        api
            .post('authenticate', data)
            .then((res) => {
                console.log('res ==>>', res);
                if (res.status == 200) {
                    config.AuthToken = res.data.token;
                    dispatch({ type: LOGIN_SUCCESS, result: res });
                }
                resolve(res);
            })
            .catch((err) => {
                console.log('err ==>>', err);
                dispatch({ type: LOGIN_FAIL });
                reject();
            });
    });
}

//------------------------------
// update password api call here
//------------------------------

export function updatePassword(data) {
    return (dispatch, getState) => new Promise((resolve, reject) => {
        dispatch({ type: UPDATE });
        api
            .post('update-password', data)
            .then((res) => {
                dispatch({ type: UPDATE_SUCCESS, result: res });
                resolve(res);
            })
            .catch(() => {
                dispatch({ type: UPDATE_FAIL });
                reject();
            });
    });
}
