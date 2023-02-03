import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Formulario = (  {guardarGasto, guardarCrearGasto} ) => {

    //  Creacion de los STATES
    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);


    //  Variable agregarGasto
    const agregarGasto = e => {
        e.preventDefault();

        //  Validad
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        //  Construir el Objeto GASTO
        const gasto = {
            nombre, 
            cantidad, 
            id: shortid.generate()
        }

        //  Pasar el gasto al Componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //  Reseteando el Form
        guardarNombre('');
        guardarCantidad(0);
    }


    return (
        <form onSubmit={agregarGasto} >
            <h2>Agrega tus gastos aqui</h2>
            {  error ? <Error mensaje='Ambos campos son obligatorios o presupuesto incorrecto' />  : null  }

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input value={nombre} onChange={e => guardarNombre(e.target.value)} type="text" className="u-full-width" placeholder='Ej. transporte' />
            </div>

            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input value={cantidad} onChange={e => guardarCantidad(parseInt(e.target.value, 10))} type="number" className="u-full-width" placeholder='Ej. 250' />
            </div>

            <button type='submit' className='button-primary u-full-width'>Agregar Gasto</button>
        </form>
    );
}


/*  Documentando Formulario   */
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;