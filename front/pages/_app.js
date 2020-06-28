import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

// redux 붙이기
import wrapper from '../store/configureStore';

// redux-saga 붙이기
import withReduxSaga from 'next-redux-saga';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head> 
                <title>리엑트 노드버드</title>
            </Head>
            <Component />
        </>
    )
}

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

// export default NodeBird; 하이오더 컴포넌트[HOC](next-redux-wrapper)로 감싸주기
// export default wrapper.withRedux(NodeBird);

// redux-saga 붙이기, withReduxSaga() 감싸기
export default wrapper.withRedux(withReduxSaga(NodeBird));