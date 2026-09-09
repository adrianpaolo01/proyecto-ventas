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


    obtenerCantidadItems(cantItems){
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

    


}
export default Ventas