class Ventas{
    cantidadItems = 0;
    precioItem = 0;

    // diccionario de siglas de estados de USA con sus impuestos (10 ejemplos)
    siglasEstados = {
        "CA": 0.075, // 7.5%
        "NY": 0.04, // 4%
        "TX": 0.0625, // 6.25%
        "FL": 0.06, // 6%
        "IL": 0.0625,
        "OH": 0.0575,
        "GA": 0.04,
        "NC": 0.0475,
        "SC": 0.06
    }

    constructor(){
        this.estado = "CA"
    }

    obtenerEstado(){
        return this.estado
    }



    obtenerCantidadItems(cantItems){
          if(cantItems <= 0){
            throw new Error("La cantidad de items no puede ser menor o igual a 0");
        }
        this.cantidadItems = cantItems;
        return this.cantidadItems;
    }

    obtenerPrecioItem(precioItem){
        this.precioItem = precioItem
        return this.precioItem
    }

    obtenerPrecioNeto(cantItems, precioItem){
        let precioNeto = cantItems * precioItem
        return precioNeto
    }

    aplicarImpuesto(sigla){
        let impuesto = this.siglasEstados[sigla]
        let precioNeto = this.obtenerPrecioNeto(this.cantidadItems, this.precioItem)
        let precioFinal = precioNeto + (precioNeto * impuesto)
        return precioFinal
    }

    aplicarDescuento(precioFinal){
        let descuento, precioFinalConDescuento 
        if(precioFinal > 1000 && precioFinal < 3000){
             descuento = precioFinal * 0.03
             precioFinalConDescuento = precioFinal - descuento
        }else if(precioFinal > 3000 && precioFinal < 7000){
             descuento = precioFinal * 0.05
             precioFinalConDescuento = precioFinal - descuento
        }else if(precioFinal >= 7000 && precioFinal < 10000){
             descuento = precioFinal * 0.07
             precioFinalConDescuento = precioFinal - descuento
        }else if(precioFinal >= 10000 && precioFinal < 30000){
                descuento = precioFinal * 0.1
                precioFinalConDescuento = precioFinal - descuento
        }else if(precioFinal >= 30000){
            descuento = precioFinal * 0.15
            precioFinalConDescuento = precioFinal - descuento
        }
        return precioFinalConDescuento

    }




}
export default Ventas