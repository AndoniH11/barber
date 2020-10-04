import React from 'react';
import Home from './components/Home';
import Contacto from './components/Contacto';
import Reserva from './components/Reserva';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/contacto' component={Contacto}/>
                <Route exact path='/reserva' component={Reserva}/>
            </Switch>

        </BrowserRouter>
    )
}

export default App