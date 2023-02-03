import React from 'react';
import PropTypes from 'prop-types';


//  Componente ERROR,    Prop: Mensaje
const Error = (  {mensaje}  ) => (

    <p className='alert alert-danger error'>
        {mensaje}
    </p>

);


/*  Documentando Error   */
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;