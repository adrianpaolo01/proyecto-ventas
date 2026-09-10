class Ventas{
    cantidadItems = 0;
    precioItem = 0;

    // lista
    categorias = [
    {
        nombre: "Alimentos",
        impuesto: 0,
        descuento: 2
    },
    {
        nombre: "Bebidas alcohólicas",
        impuesto: 7,
        descuento: 0
    },
    {
        nombre: "Material de escritorio",
        impuesto: 0,
        descuento: 1.5
    },
    {
        nombre: "Muebles",
        impuesto: 3,
        descuento: 0
    },
    {
        nombre: "Electrónicos",
        impuesto: 4,
        descuento: 1
    },
    {
        nombre: "Vestimenta",
        impuesto: 2,
        descuento: 0
    },
    {
        nombre: "Varios",
        impuesto: 0,
        descuento: 0
    }]

    obtenerCategorias(){
        return this.categorias
    }
    

    // diccionario de siglas de estados de USA con sus impuestos (10 ejemplos)
    siglasEstados = {
         "CA": 0.075,
         "UT": 0.0665,
         "NV": 0.08,
         "TX": 0.0625,
         "AL": 0.04
    }

    constructor(){
        this.estado = "CA"
        // Categorias varios por defecto
        this.categoria = "Varios"
        this.tipoCliente = "Normal"
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
        if(precioItem > 0){
            this.precioItem = precioItem
            return this.precioItem
        }
        throw new Error("No puede ingresar items con valores negativos")
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

    aplicarDescuento(precioFinal){ //refactorizado
        let porcentajeDescuento = 0 
        if (precioFinal >= 30000){ porcentajeDescuento = 0.15 }
        else if (precioFinal >= 10000) { porcentajeDescuento = 0.10 } 
        else if (precioFinal >= 7000) { porcentajeDescuento = 0.07 }
         else if (precioFinal >= 3000) { porcentajeDescuento = 0.05 } 
         else if (precioFinal >= 1000) { porcentajeDescuento = 0.03 } 

         return precioFinal - (precioFinal * porcentajeDescuento)
    }

    obtenerDescuentoCategoria(categoria) {
    // buscar categoría
    let categoriaEncontrada = this.categorias.find(cat => cat.nombre === categoria);
    if (categoriaEncontrada) {
        return categoriaEncontrada.descuento;
    } else {
        throw new Error("Categoría no encontrada");
    }}

    obtenerImpuestoCategoria(categoria){
        let categoriaEncontrada = this.categorias.find(cat => cat.nombre === categoria);
        if(categoriaEncontrada){
            return categoriaEncontrada.impuesto
        } else {
            throw new Error("Impuesto no encotrado")
        }
    }

    calcularImpuestoTotal(impuestoEstado, nombreCategoria){
        let impuestoTotal = impuestoEstado + this.obtenerImpuestoCategoria(nombreCategoria)
        return impuestoTotal
    }

    calcularDescuentoTotal(descuentoEstado, nombreCategoria){
        let descuentoTotal = descuentoEstado + this.obtenerDescuentoCategoria(nombreCategoria)
        return descuentoTotal
    }

    obtenerCostoEnvioPorUnidad(peso){ //refactorizado
       if (peso < 0) { throw new Error("El peso no puede ser negativo") }
        const rangosEnvio = [
            { max: 10, costo: 0 },
            { max: 20, costo: 3.5 },
            { max: 40, costo: 5 },
            { max: 80, costo: 6 },
            { max: 100, costo: 6.5 },
            { max: 200, costo: 8 }, 
            { max: Infinity, costo: 9 } ] 
       const rango = rangosEnvio.find(rango => peso <= rango.max)
        return rango.costo
    }

    calcularCostoEnvio(cantidad, peso) {
        let costoPorUnidad = this.obtenerCostoEnvioPorUnidad(peso)
        return cantidad * costoPorUnidad
    }

    obtenerDescuentoEnvio(tipoCliente){
        if(tipoCliente === "Normal"){
            return 0
        }
        if(tipoCliente === "Recurrente"){
            return 0.05
        }
        if(tipoCliente === "Especial"){
            return 1.5
        }
    }

    obtenerDescuentoFijo(tipoCliente, precioNeto, categoria){
        if (tipoCliente === "Recurrente" && precioNeto > 3000 && categoria === "Alimentos") {
            return 100
        }
        if (tipoCliente === "Especial" && precioNeto > 5000 && categoria === "Electrónicos") {
            return 200
        }
            return 0 
}


}
export default Ventas