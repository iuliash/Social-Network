import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Link} from 'react-router-dom';
import { browserHistory} from 'react-router';

import reducers from './reducers'
import Menu from './Menu'
import Main from './Main'
import Logo from './Logo'

let lastScroll = 0;


class App extends React.Component{ 
    constructor(){
        super();

        this.state = {
            isVisibleMenu: false
        }

        this.menuElement = React.createRef();
        this.logoElement = React.createRef();
        this.header = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = e => {
        let sy = window.scrollY;
        if (sy > lastScroll)
            this.header.current.className = 'header scrollAnimate';  
        else 
            this.header.current.className = 'header';
        lastScroll = sy;
    }

    changeVisibleMenu = () => {
        const isVisible = this.state.isVisibleMenu;
        if (!isVisible) {
            this.logoElement.current.className = 'logo__img logo-open';
            this.setState({isVisibleMenu: !isVisible});
        } else {
            this.menuElement.current.className = 'menu';
            this.logoElement.current.className = 'logo__img';
            setTimeout(() => {
                this.setState({isVisibleMenu: !isVisible})    
            }, 2000)
        } 
    }

    render(){
        const isVisible = this.state.isVisibleMenu;
        return(
            <div>
                <Provider store={createStore(reducers)}>
                    <HashRouter history={browserHistory}>
                        <Logo 
                            visibleMenu={isVisible}
                            changeVisibleMenu = {this.changeVisibleMenu}
                            logoRef = {this.logoElement}
                            headerRef = {this.header}
                        />
                        <div className="App">
                            {isVisible &&  <Menu 
                                changeVisibleMenu = {this.changeVisibleMenu} 
                                menuRef = {this.menuElement}
                            />}
                            <Main />
                        </div>
                    </HashRouter>
                </Provider>
            </div>
        )
    }
}

export default App;