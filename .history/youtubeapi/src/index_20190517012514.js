import React from 'react';
import ReactDOM from 'react-dom';
/**applyMiddleWare recieves an api for the store  */
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from './App';
import reducer from './reducers';

const storeWithMiddleWare = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
<Provider store={storeWithMiddleWare(reducer)}>
    <App />
</Provider>,
 document.getElementById('root')
 );