


export function validate(input){
    let error = {}
  

   if(!input.name){
    error.name = "falta email digo nombre"
    }
    if(!input.years){
        error.years = "años requerido"
    }
    if(input.pesoMin > input.pesoMax){
        console.log("no puede ser mas grabnde");
        error.pesoMin = "el peso minimo no puede ser mayor maximo"
    }

     if(input.altoMin > input.altoMaxim){
       
        error.altoMin = "la altura minima no puede ser mayor a la maxima"
    }
    return error

   }
  

 