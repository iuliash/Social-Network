import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { browserHistory} from 'react-router';

import './App.css'

import reducers from './reducers'
import Menu from './Menu'
import Main from './Main'

class App extends React.Component{ 
    render(){
        return(
            <div>
                <div className="header">
                    <div className="header__logo">
                        <p className="logo__text">Social.Net</p>
                    </div>
                </div>
                <div className="App">
                    <Provider store={createStore(reducers)}>
                        <HashRouter history={browserHistory}>
                            <Menu />
                            <Main />
                        </HashRouter>
                    </Provider>
                </div>
            </div>
        )
    }
}

export default App;