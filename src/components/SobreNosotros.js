import React from 'react';
import cabeza from '../img/nosotros.png'
import barberia from '../img/barberia.jfif'

const SobreNosotros = () => {
    return (
        <div>
            <section className='section' id='nosotros'>
                <div className='texto'>
                    <div className='titulo'>
                        <h2>SOBRE NOSOTROS</h2>
                        <div className='icon-container'>
                            <img src={cabeza} alt='icono del peluquero' />
                        </div>

                    </div>

                    <div>
                        <p><span> Barcelona Barber Shop </span> nace el año 2013 cuando las barbas sacaban la nariz de manera
                            incipiente de la mano de
                            las nuevas tendencias hipster. Parte de una idea y una tozudez de sus fundadores: relanzar los
                            <span> servicios de barbería masculinos</span>, adaptándolos a los nuevos tiempos y a las necesidades actuales de los clientes,
                            pero manteniendo la esencia de la cura estética personalizada para hombre.</p>

                        <p>La estética de los locales, basada en la <span> clásica barbería americana</span> de los años 50,
                            pero
                            sin renunciar a la
                            <span> raíz mediterránea</span> de la Ciudad de Barcelona.</p>
                        <p>El sistema de <span> reserva</span>, permite asegurar el menor tiempo de espera posible y comodidad
                            en
                            el acceso a los
                            servicios. Tenemos herramientas que permiten hacerlo de manera convencional o <span> online </span>(página Web y App).</p>
                        <p>Finalmente, y conscientes de que la <span> barba o los cortes de pelo </span> son elementos de
                            comunicación personal,
                            seleccionamos para ti los mejores barberos para atenderte ya que en <span> Barcelona Barber Shop
                            </span>, lo más importante
                            eres TU.
                            </p>
                    </div>
                </div>
                <div className='imagen'>
                        <img src={barberia} alt='imagen de la barberia' />
                    </div>
            </section>
        </div>
    )
}

export default SobreNosotros 