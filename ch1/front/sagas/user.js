import {all, call, put, fork, takeLatest, takeEvery, delay} from 'redux-saga/effects'
import {LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_SUCCESS, LOAD_USER_SUCCESS, LOAD_USER_FAILURE} from '../reducers/user'
import axios from 'axios'
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';

function loginAPI(loginData){
    // 서버에 요청을 보내는 부분
    return axios.post('/login', loginData, {
        withCredentials: true,
    });
}

function logOutAPI(){
    return axios.post('/user/logout', {}, {
        withCredentials: true,
    });
}

function signUpAPI(signUpData){
    return axios.post('http://localhost:3065/api/user/', signUpData);
}

function loadUserAPI(){
    return axios.get('/user/', {
        withCredentials: true,
    });
}

function* login(action){
    try{
        const result = yield call(loginAPI, action.data);
        yield put({ //put은 dispatch와 동일
            type:LOG_IN_SUCCESS,
            data:result.data,
        });
    }catch(e){ //loginAPI 실패
        console.error(e);
        yield put({
            type:LOG_IN_FAILURE,
            error: e,
        });
    }
}

function* logOut(action){
    try{
        yield call(logOutAPI);
        yield put({ //put은 dispatch와 동일
            type:LOG_OUT_SUCCESS,
        });
    }catch(e){ //loginAPI 실패
        console.error(e);
        yield put({
            type:LOG_OUT_FAILURE,
            error: e,
        });
    }
}

function* signUp(action){
    try{
        // yield call(signUpAPI);
        yield call(signUpAPI, action.data);
        yield put({
            type : SIGN_UP_SUCCESS,
        });
    }catch(e){
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        });
    }
}

function* loadUser(){
    try{
        const result = yield call(loadUserAPI);
        yield put({
            type:LOAD_USER_SUCCESS,
        });
    }catch(e){
        console.error(e);
        yield put({
            type:LOAD_USER_FAILURE,
            error:e,
        });
    }
}

function* watchLogin(){
    yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogOut(){
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function* watchLoadUser(){
    yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUser());
}

export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchSignUp),
    ]);
}