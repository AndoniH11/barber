import React from 'react';

const Servicios = () => {
    return(
        <section id='servicios'>
            <div className='titulo'>
                <h2>SERVICIOS</h2>
            </div>

            <div className='descripcion'>
                <div id='cabello'>
                    <h3>Cabello</h3>
                    <div className='servicio'>
                        <h4>LAVAR Y CORTAR</h4>
                        <p>Lavado + Corte a máquina y/o a tijeras con acabado a navaja</p>
                    </div>
                    <div className="precio">
                        <p>14€</p>
                    </div>
                    <div className="servicio">
                        <h4>LAVAR Y PEINAR</h4>
                        <p>Lavado + Peinado como más te guste o dejándote aconsejar por nuestros barberos.</p>
                    </div>
                    <div className="precio">
                        <p>10€</p>
                    </div>
                </div>

                <div id="barba">
                    <h3>BARBA</h3>
                    <div className="servicio servicio-barba">
                        <h4>ARREGLAR BARBA</h4>
                        <p>Definición de la barba con navaja y corte de barba con máquina y/o tijeras.</p>
                    </div>
                    <div className="precio">
                        <p>12€</p>
                    </div>
                    <div className="servicio">
                        <h4>AFEITAR</h4>
                        <p>Afeitado a navaja. Preparación con espuma y toalla caliente acabado con toalla fría y after-shave.</p>
                    </div>
                    <div className="precio">
                        <p>10€</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Servicios