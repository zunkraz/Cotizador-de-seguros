export function obtenerDiferenciaYear (year){
    
    let currentYear = new Date().getFullYear() - year
    return currentYear;
}

export function diferenciaMarca (str, resultado){
if(str === 'americano'){
    resultado = resultado + resultado*15/100
    return resultado
}else if(str === 'europeo'){
    resultado = resultado + resultado*30/100
    return resultado
}else{
    resultado = resultado + resultado*5/100
    return resultado
}
}

export function diferenciaPlan(plan){
    switch(plan){
        case 'basico':
            return 1.20;
        case 'completo':
            return 1.5;
        default: 
            break;
    }
}

export function primerMayuscula(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}