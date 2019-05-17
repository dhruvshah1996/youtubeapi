import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './App';
import mainReducer from './reducers';


ReactDOM.render(
<Provider store={createStore(mainReducer)}>
    <App />
</Provider>,
 document.getElementById('root')
 );