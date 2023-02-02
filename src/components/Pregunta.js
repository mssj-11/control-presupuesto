import React, { Fragment, useState } from 'react';
import Error from './Error';


const Pregunta = (  {guardarPresupuesto, guardarRestante}  ) => {

    //  Definiendo los STATE
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);


    //  FUNCIONES
    //  Funcion definirPresupuesto - Leera el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) );
    }

    //  Enviara el Presupuesto definido
    const agregarPresupuesto = e => {
        e.preventDefault();

        //  Validacion
        if(cantidad < 1 || isNaN( cantidad )){
            guardarError(true);
            return;
        }

        //  Si sobrepasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }



    return(
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {  error ? <Error mensaje="El presupuesto es incorrecto" /> : null }

            <form onSubmit={agregarPresupuesto} >
                <input type="number" onChange={definirPresupuesto} className='u-full-width' placeholder='Ingresa tu presupuesto' />
                <input type="submit" value="Definir Presupuesto" className='button-primary u-full-width' />
            </form>
        </Fragment>
    );
}


export default Pregunta;