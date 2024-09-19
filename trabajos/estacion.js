function estacion (dia, mes){
    if((mes === 9 && dia >= 21) || (mes === 10) || (mes === 11) || (mes === 12 && dia <= 20)){
        alert('primavera')
    }else if((mes === 12 && dia >= 21) || (mes === 1) || (mes === 2) || (mes === 3 && dia <= 20)){
        alert('verano')
    }else if((mes === 3 && dia >= 21) || (mes === 4) || (mes === 5) || (mes === 6 && dia <= 20)){
        alert('otonio')
    }else if((mes === 6 && dia >= 21) || (mes === 7) || (mes === 8) || (mes === 9 && dia <= 20)){
        alert('invierno')
    }
}

estacion(Number(prompt("Introduce el día (1-31):")), Number(prompt("Introduce el mes (1-12):")))


estacion.len