import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';
import axios from 'axios';

function addPostAPI(data){
    return axios.post('/api/post', data);
}

function* addPost(action){
    try {
        // 서버가 없으므로 잠시 주석
        // const result = yield call(addPostAPI, action.data);

        yield delay(1000);

        yield put({
            type: 'ADD_POST_SUCCESS',
            // 서버가 없으므로 잠시 주석
            // data: result.data,
        })
    } catch(err){
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        })
    }
}

function* watchAddPost(){
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ])
}