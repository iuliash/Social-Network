import React from 'react';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import './App.css'

import reducers from './reducers'
import News from './components/NewsFeed/News'

class App extends React.Component{ 
    render(){
        return(
            <div className="App">
                <Provider store={createStore(reducers)}>
                    <News />
                </Provider>
            </div>
        )
    }
}

export default App;