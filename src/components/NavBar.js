import React from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'

class NavBar extends React.Component {

    state = {
        toggle: false,
    }

    handleClick = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render(){
        return (
            <div id='cabecera'>
                <nav id='menu'>
                    <GiHamburgerMenu className='burger-menu' onClick={() => this.handleClick()}/>
                    <ul className={ this.state.toggle ? '' : 'oculto'}>
                    <GiHamburgerMenu 
                        className={this.state.toggle ? 'burger' : 'burger-menu'}
                        onClick={() => this.handleClick()}
                    />
                        <Link className='link' to='/' onClick={() => this.handleClick()}><li>Inicio</li></Link>
                        <Link className='link' to='/reserva' onClick={() => this.handleClick()}><li>Haz tu reserva</li></Link>
                        <Link className='link' to='/contacto' onClick={() => this.handleClick()}><li>Contacto</li></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar