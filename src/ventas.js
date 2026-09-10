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

    obtenerCostoEnvioPorUnidad(peso){
         if (peso >= 0 && peso <= 10) {
        return 0
    }
      if(peso >= 11 && peso <= 20){
        return 3.5
    }
      if (peso >= 21 && peso <= 40) {
        return 5
    }
     if (peso >= 41 && peso <= 80) {
        return 6
    }

    if (peso >= 81 && peso <= 100) {
        return 6.5
    }

    if (peso >= 101 && peso <= 200) {
        return 8
    }

    if (peso > 200) {
        return 9
    }
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
    }
}
export default Ventas