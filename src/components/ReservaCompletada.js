import React from 'react';
import {Link} from 'react-router-dom';

const ReservaCompletada = (props) => {
    const {nombre, hora} = props.state
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    const date = new Date(props.state.date).toLocaleDateString('es-ES', options)
    return(
        <div className='reserva-completada-container'>
            <div className='reserva-completada-contenido'>
                <h2>Reserva</h2>

                <p>Su reserva ha sido completada con éxito. Muchas gracias por confiar en nosotros {nombre}. Le esperamos el día {date} a las {hora} horas.</p>
                <p>Recuerde llegar con 5 minutos de antelación a la cita y si por cualquier motivo no puede llegar, no se olvide de llamar para cancelar la cita. </p>

                <Link to='/'><button className='reserva-button'>INICIO</button></Link>
            </div>
        </div>
    )
}

export default ReservaCompletada