import React, { PureComponent } from 'react';

//  Componente ERROR,    Prop: Mensaje
const Error = (  {mensaje}  ) => (
    <p className='alert alert-danger error'>
        {mensaje}
    </p>
);
export default Error;