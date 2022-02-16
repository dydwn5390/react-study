import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// 스토어 생성
const store = createStore(rootReducer, composeWithDevTools());


// 해당 스토어를 사용할 수 있게 Provider 컴포넌트를 사용하여, store 를 props 로 전달.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
