import React from 'react';

const Fotos = (props) => {
    return (
        <div className="cortes" id={props.foto.id}>
            <img src={props.foto.url} alt="" />
        </div>
    )
}

export default Fotos