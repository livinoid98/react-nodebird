import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import AppLayout from '../components/AppLayout'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import rootSaga from '../sagas/index'

const NodeBird = ({Component}) => {
    return(
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </>
    );
};

NodeBird.propTypes = {
    Component : PropTypes.node,
    store : PropTypes.object,
};

const sagaMiddleware = createSagaMiddleware();
export default withRedux((initialState, options) => {
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
})(NodeBird);