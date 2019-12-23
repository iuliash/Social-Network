import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './App.css'

import reducers from './reducers'
import Menu from './Menu'
import Main from './Main'

class App extends React.Component{ 
    render(){
        return(
            <div className="App">
                <Provider store={createStore(reducers)}>
                    <HashRouter>
                        <Menu />
                        <Main />
                    </HashRouter>
                </Provider>
            </div>
        )
    }
}

export default App;