function getFinalPrice(){
    let monto = parseFloat(prompt('INGRESAR MONTO PARA CALCULAR CUOTAS'));
    let cantCuotas = parseInt(prompt('INGRESAR LA CANTIDAD DE CUOTAS(3, 6, 9, 12 O 18'));
    let montoPorCuota
    while (montoPorCuota === undefined) {
    switch(cantCuotas){
      case 3:
        montoPorCuota = (((monto * 1.03)/3).toFixed(2))
        break;
      case 6:
        montoPorCuota = (((monto * 1.05)/6).toFixed(2))
        break;
      case 9:
        montoPorCuota = (((monto * 1.1)/9).toFixed(2))
        break;
      case 12:
        montoPorCuota = (((monto * 1.15)/12).toFixed(2))
        break;
      case 18:
        montoPorCuota = (((monto * 1.2)/18).toFixed(2))
        break;
      default:
        alert("LA CANTIDAD DE CUOTaS NO ESTA DISPONIBLE");
    
        cantCuotas = parseInt(prompt('INGRESAR LA CANTIDAD DE CUOTAS(3, 6, 9, 12 O 18'));
      }
    }
    alert(`Para ${cantCuotas} cuotas el precio por cuota es ${montoPorCuota}`)
    }
  
    getFinalPrice()