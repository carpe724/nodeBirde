import { all, fork, call, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';


function logInAPI(data){
// 여기는 제너레이터 함수 아님!
// action.data (login 정보) 가 인자로 전달됨
    return axios.post('/api/login', data);
}

function* logIn(action){
    try {
        // 성공 실패 분기

        // 서버가 없으므로 잠시 주석
        // const result = yield call(logInAPI, action.data);
        // call,fork 함수 실행시 logInAPI에 매게변수를 전달하기 위해 두번째 인자에 action.data로 넣어준다.
        
        yield delay(1000);

        yield put({
            // put 마치 action dispatch
            type: 'LOG_IN_SUCCESS',

            // 서버가 없으므로 잠시 주석
            // data: result.data,
        })
    } catch(err){
        // 성공 실패 분기
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        })
    }
}

function logOutAPI(){
// 여기는 제너레이터 함수 아님!
    return axios.post('/api/logout');
}

function* logOut(){
    try {
        // 성공 실패 분기

        // 서버가 없으므로 잠시 주석
        // const result = yield call(logOutAPI);

        yield delay(1000);

        yield put({
            // put 마치 action dispatch
            type: 'LOG_OUT_SUCCESS',

            // 서버가 없으므로 잠시 주석
            // data: result.data,
        })
    } catch(err){
        // 성공 실패 분기
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        })
    }
}


function addPostAPI(data){
// 여기는 제너레이터 함수 아님!
    return axios.post('/api/post', data);
}

function* addPost(action){
    try {
        // 성공 실패 분기

        // 서버가 없으므로 잠시 주석
        // const result = yield call(addPostAPI, action.data);

        yield delay(1000);

        yield put({
            // put 마치 action dispatch
            type: 'ADD_POST_SUCCESS',

            // 서버가 없으므로 잠시 주석
            // data: result.data,
        })
    } catch(err){
        // 성공 실패 분기
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        })
    }
}

// ----- 비동기 액션 크리에이터, 마치 이벤트 리스너

function* watchLogIn(){
    // yield take('LOG_IN_REQUEST', logIn);
    // take : 'LOG_IN_REQUEST' 이라는 엑션을 기다리겠다.
    // , logIn : 엑션이 실행되면 logIn 함수를 실행.
    // login 함수를 실행하며 'LOG_IN_REQUEST' 의 매개변수에 action.data 가 전달.
    // yield 는 1회 밖에 사용이 안되는데, 
    // 그렇기때문에 while(true)/ takeEvery(계속해서), takeLatest(짧은 시간의/로딩중 여러 요청중 마지막 동작에 대한 "응답"만 처리), takeLeading(첫번째꺼만)
    // 보통은 takeLatest의 다중요청의 경우 서버에서 다중요청에대한 처리를 한번더한다. //디도스 공격 대비
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut(){
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost(){
    yield takeLatest('ADD_POST_REQUEST', addPost);
    // yield throttle('ADD_POST_REQUEST', addPost, 2000);
    // throttle: 2초동안은 딱 한번에 요청만 가능하도록, 프론트 내에서 아에 디도스 공격 방지.
}

export default function* rootSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchAddPost),
    ])
};

// 1. fork, call 제너레이터 함수를 실행한다.
// 2. all 은 이 함수를 동시에 실행해준다.

// * fork 비동기(응답 기다리지 않고 마이웨이) , call 은 동기(응답을 기다림)