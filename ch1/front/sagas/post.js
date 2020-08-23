import {all, fork, takeLatest, delay, put, call} from 'redux-saga/effects'
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_MAIN_POSTS_REQUEST } from '../reducers/post'

function addPostAPI(postData){
    return axios.post('/post', postData, {
        withCredentials:true,
    });
};

function loadMainPostsAPI(){
    return axios.get('/posts', {
        withCredentials: true,
    });
};

function* addPost(action){
    try{
        yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data:result.data,
        });
    }catch(e){
        yield put({
            type:ADD_POST_FAILURE,
            error: e,
        });
    }
}

function* loadMainPosts(action){
    try{
        const result = yield call(loadMainPostsAPI);
        yield put({
            type: LOAD_MAIN_POSTS_SUCCESS,
            data: {
                postId: action.data.postId,
            },
        });
    }catch(e){
        yield put({
            type: LOAD_MAIN_POSTS_FAILURE,
            error: e,
        });
    }
};

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchLoadMainPosts(){
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}

export default function* postSaga(){
    yield all([
        fork(watchLoadMainPosts),
        fork(watchAddPost),
    ]);
}