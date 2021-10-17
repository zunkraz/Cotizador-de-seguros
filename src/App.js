import React, {useState, Fragment} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin:0 auto;
  margin-top:0.5rem;
  box-shadow: black 2px 2px 8px;
  border-radius: 0.4rem;
`;

const ContenedorFormulario  = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 0.4rem;

`;

function App() {
  
  const [resumen,guardarResumen] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      year: '',
      plan: '',
    }
  });

  const [cargando,guardarCargando] = useState(false);

  const {datos,cotizacion} = resumen
  
  return (
    <Contenedor>
      <Header 
        titulo='Cotizador de Seguros'
      />
     <ContenedorFormulario>
        <Form 
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : null}
        {!cargando 
        ? <Fragment>
        
          <Resumen 
          datos={datos}
          />
          <Resultado 
            cotizacion={cotizacion}
          />
          </Fragment>
        : null }
       
     </ContenedorFormulario>
    </Contenedor>
  
  );
}

export default App;
