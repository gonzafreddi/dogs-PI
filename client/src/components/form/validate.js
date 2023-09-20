export function validate(input) {
    let error = {};
  
    if (!input.name) {
      error.name = "Nombre requerido";
    }
  
    if (!input.years) {
      error.years = "Años requeridos";
    }
  
    if (!input.altoMaxim || !input.altoMin || !input.pesoMax || !input.pesoMin) {
      error.pesos = "Campo requerido";
    }
  

    if (input.altoMaxim * 1 < input.altoMin *1) {
        error.altoMin = "la altura minima no puede ser mayor al maximo"
    } 
 
  
    if (!input.temperaments || input.temperaments.length === 0) {
      error.temperaments = "Debe seleccionar al menos un temperamento";
    }
  
    if (input.pesoMax * 1 < input.pesoMin *1) {
        error.pesoMin = "el peso minimo no puede ser mayor al maximo"
    }  
    
    return error;
  }
  


// export function validate(input){
//     let error = {}
  

//    if(!input.name){
//     error.name = "Nombre requerido"
//     }
//     if(!input.years){
//         error.years = "años requerido"
//     }
//     if(input.pesoMin >= input.pesoMax){
//         error.pesoMin = "el peso minimo no puede ser mayor maximo"
//     }
//     if(input.pesoMin >= input.pesoMax){
//         error.pesoMin = "el peso minimo no puede ser mayor maximo"
//     }
//      if(input.altoMin > input.altoMaxim){
//         error.altoMin = "la altura minima no puede ser mayor a la maxima"
//     }
//     if(!input.altoMaxim || !input.altoMin || !input.pesoMax || !input.pesoMin){
//         error.pesos = "campo requerido"
//     }
//     if(!input.temperaments || input.temperaments.length === 0)
//     error.temperaments = "Debe seleccionar al menos un temperamento"
//     if(input.pesoMin > input.pesoMax){
//         error.pesoMin = "el peso minimo no puede ser mayor maximo"
//     }
//     return error
//    }
  

 