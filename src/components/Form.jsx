import React, {useState} from 'react'
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, diferenciaMarca, diferenciaPlan } from '../helper';
import PropTypes from 'prop-types';

const Campo = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex:0 0 100px
`;

const Select = styled.select`
    display:block;
    width:100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
    border-radius: 0.2rem;

    &:focus{
        outline: none;
    }
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;
const Boton = styled.button`
background-color: #00838F;
font-size: 16px;
width: 100%;
padding: 1rem;
color: white;
text-transform: uppercase;
font-weight: bold;
border:none;
transition: background-color 0.3s ease;
border-radius: 0.4rem;
letter-spacing: 2px;

&:hover{
    cursor:pointer;
    background-color: #26C6DA;
}
`;

const Error = styled.div`
background-color: red;
color: white;
padding: 1rem;
width: 100%;
text-align: center;
margin-bottom: 1rem;
`;


const Form = ({guardarResumen, guardarCargando}) => {

const [error, guardarError] = useState(false)
const [datos,guardarDatos] = useState({
    marca: '',
    year: '',
    plan: ''
});
// Extraer los valores del state
const {marca, year, plan} = datos

//Leer los datos del formulario y colocarlos en el state

const obtenerInformacion = e => {
    guardarDatos({
        ...datos,
        [e.target.name] : e.target.value
    })
}
const handleSubmit = e => {
    e.preventDefault();
    if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
        guardarError(true);
        return
    }
    guardarError(false);

    let resultado = 2000;
    //obtener la diferencia de años
   const diferencia = obtenerDiferenciaYear(year)
   
   
    //por cada año hay que restar el 3%

    resultado -= ((diferencia*3) * resultado) / 100;

    //americano 15 asiatico 5% europeo 30%
   resultado =  diferenciaMarca(marca, resultado)
    
    //basico aumenta 20% completo 50% 
    resultado = parseFloat(resultado*diferenciaPlan(plan)).toFixed(2);
   
    guardarCargando(true);

    setTimeout(() => {
        guardarCargando(false)
        
        guardarResumen({
            cotizacion:Number(resultado),
            datos
        })
    } , 3000);
    
}

    return ( 
       <form onSubmit={handleSubmit}>

           { error && <Error>Todos los campos son obligatorios</Error> }
           <Campo>
           <Label htmlFor="marca">Marca</Label>
           <Select 
           name="marca"
           value={marca}
           onChange={obtenerInformacion}
           >
               <option value="">-- Seleccione --</option>
               <option value="americano">Americano</option>
               <option value="europeo">Europeo</option>
               <option value="asiatico">Asiático</option>
           </Select>
           </Campo>

            <Campo>
           <Label htmlFor="año">Año</Label>
           <Select 
           name="year"
           value={year}
           onChange={obtenerInformacion}
           >
                <option value="">-- Seleccione --</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
           </Select>
            </Campo>

           <Campo>
                <Label htmlFor="Plan">Plan</Label>
                <InputRadio 
                type="radio"
                name="plan"
                value='basico'
                onChange={obtenerInformacion}
                checked={plan === 'basico'}
                /> Básico
                 <InputRadio 
                type="radio"
                name="plan"
                value='completo'
                onChange={obtenerInformacion}
                checked={plan === 'completo'}
                /> Completo
           </Campo>

           <Boton type='submit'>Cotizar</Boton>
       </form> 
     );
}

Form.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}
export default Form;