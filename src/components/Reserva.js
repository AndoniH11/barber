import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import ReservaCompletada from './ReservaCompletada';

class Reserva extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: null,
            nombre: '',
            hora: '',
            telefono: '',
            terminada: false
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        const { nombre, hora, telefono } = this.state

        if (nombre.length > 0 && hora.length > 0 && telefono.length > 0) {
            this.setState({
                terminada: true
            })
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <div id='contacto-container'>
                    <div id='contacto-contenido'>
                        <h2>Reserva</h2>
                        <div className='reserva-contenido'>
                            <div className='reserva-info'>
                                <p>Debido al alto número de clientes a los que atendemos cada día, en Barber Barcelona nos hemos visto obligados a utilizar un sistema de reservas, de manera que pueda ser atendido a la fecha y hora establecidas. Para ello, solamente deberá introducir sus datos en el siguiente formulario y pulsar el botón de reserva.</p>
                                <p>Se recomienda a todos nuestros clientes llegar al local con 5 minutos de antelación. En caso de restrasarse más de 10 minutos la reserva se dará por anulada sin coste alguno.</p>
                            </div>
                            <div className='reserva-form'>
                                <div className='input-container'>
                                    <input type='text' name='nombre' placeholder='Introduce tu nombre...' onChange={(e) => this.handleChange(e)} />
                                    <input type='text' name='telefono' placeholder='Introduce tu telefono...' onChange={(e) => this.handleChange(e)} />
                                    <input type='text' name='hora' placeholder='Introduce la hora...' onChange={(e) => this.handleChange(e)} />
                                    <SingleDatePicker
                                        date={this.state.date}
                                        onDateChange={date => this.setState({ date })}
                                        focused={this.state.focused}
                                        onFocusChange={({ focused }) => this.setState({ focused })}
                                        id='date-picker'
                                        placeholder='Introduce la fecha...'
                                    />
                                </div>
                                <button
                                    className='reserva-button'
                                    onClick={() => this.handleClick()}
                                >Reserva
                            </button>
                            </div>
                        </div>

                    </div>
                    {this.state.terminada ? <ReservaCompletada state={this.state} /> : null}
                </div>
            </div>
        )
    }
}

export default Reserva