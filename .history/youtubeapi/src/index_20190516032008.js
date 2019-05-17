import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Axios from 'axios';

import './index.css';
import App from './App';
import reducer from './reducers';


ReactDOM.render(
<Provider store={createStore(reducer)}>
    <App />
</Provider>,
 document.getElementById('root'));