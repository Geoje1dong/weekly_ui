import React from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    overflow-x:hidden;
    font-family: 'Noto Sans KR', sans-serif;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a{
    color:inherit;
    text-decoration:none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }
`;

const WeeklyUiApp = ({ Component, store }) => {
  const prefix = process.env.NODE_ENV === 'production' ? 'https://geoje1dong.github.io/weekly_ui' : '';

  return (
    <Provider store={store}>
      <Head>
        <title>Weekly UI challenge</title>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean" rel="stylesheet" />
      </Head>
      <GlobalStyle/>
      <Component prefix={prefix} />
    </Provider>
  );
};

const configureStore = (initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  );
  const store = createStore(reducer, initialState, enhancer);
  return store;
}



export default withRedux(configureStore)(WeeklyUiApp);