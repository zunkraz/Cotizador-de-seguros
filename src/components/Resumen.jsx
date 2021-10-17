import React from 'react'
import styled from '@emotion/styled';
import {primerMayuscula} from '../helper'
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align:center;
    background-color: #00838f;
    color: white;
    margin-top: 1rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;

`;
const ContenedorUl = styled.ul`
    list-style-type: none;
`;


const Resumen = ({datos}) => {
    if(datos.marca === '' || datos.year === '' || datos.plan === '') return null;
    return ( 
    <ContenedorResumen>
       <h2>Resumen de cotizacion</h2>
       <ContenedorUl>
           <li>Marca: {primerMayuscula(datos.marca)}</li>
           <li>Plan: {primerMayuscula(datos.plan)}</li>
           <li>Año del auto: {datos.year}</li>
       </ContenedorUl>
    </ContenedorResumen>
     );
}
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
export default Resumen;