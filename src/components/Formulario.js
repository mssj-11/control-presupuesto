import React, { useState } from 'react';


const Formulario = () => {
    return (
        <form>
            <h2>Agrega tus gastos aqui</h2>

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder='Ej. transporte' />
            </div>

            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input type="number" className="u-full-width" placeholder='Ej. 250' />
            </div>

            <button type='submit' className='button-primary u-full-width'>Agregar Gasto</button>
        </form>
    );
}


export default Formulario;