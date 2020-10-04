import React from 'react';
import logo from '../img/logo.png';
import NavBar from './NavBar'

class Header extends React.Component {

    render() {
        return (
            <header id='header'>
                <NavBar/>
                <div id='logo'>
                    <img src={logo} alt='Logo de la barbería' />
                </div>
                
            </header>
        )
    }
}

export default Header