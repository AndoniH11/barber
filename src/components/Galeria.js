import React from 'react';
import logo from '../img/camara.png';
import Fotos from './Fotos'
import {fotos} from '../data'


const Galeria = () => {
    return (
        <section id="galeria">
            <div className="titulo">
                <h2>GALERIA</h2>
                <img src={logo} alt="" />
            </div>
            <div id='fotos'>
                {fotos.map((foto) => {
                    return(
                        <Fotos key={foto.id} foto={foto}/>
                    )
                })}
            </div>
            
        </section>
    )
}

export default Galeria 