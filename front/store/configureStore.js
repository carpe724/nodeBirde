import { createWrapper, STOREKEY } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

// redux-saga 붙이기
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';


const configureStore = () => {
    // redux-saga 붙이기
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares)) // 배포용은 중앙 데이터 히스토리를 숨기고 메모리를 아끼기위해 devtool off
    : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);

    // redux-saga 붙이기
    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
}

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
    // redux 에러를 표시해주어 개발시 용의한 옵션
});

export default wrapper;