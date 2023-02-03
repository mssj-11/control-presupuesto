import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  //  Defininedo los STATE
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarPregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ creargasto, guardarCrearGasto ] = useState(false);


  //  UseEFFECT - Actualiza el RESTANTE
  useEffect(() => {
    if(creargasto){
      //  Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //  Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //  Resetenado FALSE
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);





  return (
    <div className="container">
      <header><h1>Gasto Semanal</h1>

      <div className='contenido-principal contenido'>
        {/* Cargar condicional de componente - Si se cumple cierta condicion se ejecuta un Componente u el Otro Componnete  */}
        {  mostrarPregunta ?  
        (
          <Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
          />
        )  : 
        (
          <div className="row">
            <div className='one-half column'>
              <Formulario 
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>

            <div className='one-half column'>
              <Listado 
                gastos={gastos}
              />

              <ControlPresupuesto 
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )
        }
        
      </div>

      </header>
    </div>
  );
}

export default App;