import React from 'react'
import NavBar from './NavBar'
import { FaPhoneAlt } from 'react-icons/fa';
import { GiScissors } from 'react-icons/gi';
import { FiMail } from 'react-icons/fi';
import { FaMapMarkedAlt } from 'react-icons/fa';

const Contacto = () => {
    return (
        <div>
            <NavBar />
            <div id='contacto-container'>
                <div id='contacto-contenido'>
                    <h2>Contacto</h2>
                    <div className='contacto-divs'>
                        <div className='contacto-div horario'>
                            <div className='icon-div'><GiScissors className='icon' /></div>
                            <h3>Horario</h3>
                            <p>8:00 - 14:00</p>
                            <p>17:00 - 20:00</p>
                        </div>
                        <div className='contacto-div telefono'>
                            <div className='icon-div'><FaPhoneAlt className='icon' /></div>
                            <h3>Teléfono</h3>
                            <p>675 347 987</p>
                        </div>
                        <div className='contacto-div email'>
                            <div className='icon-div'><FiMail className='icon' /></div>
                            <h3>Email</h3>
                            <p>barberiabarcelona@ gmail.com</p>
                        </div>
                        <div className='contacto-div localizacion'>
                            <div className='icon-div'><FaMapMarkedAlt className='icon' /></div>
                            <h3>Localización</h3>
                            <p>Gracia, Barcelona</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Contacto