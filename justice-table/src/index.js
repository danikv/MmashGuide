import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store'

ReactDOM.render(<Router>
    <Provider store={store}> 
        <App store={store}/>
    </Provider> 
</Router>, document.getElementById('root'));
registerServiceWorker();
