import React from 'react';
import Header from './Header';
import SobreNosotros from './SobreNosotros';
import Servicios from './Servicios';
import Galeria from './Galeria';

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <SobreNosotros />
                <Servicios />
                <Galeria />
            </div>
        </div>
    )
}

export default Home