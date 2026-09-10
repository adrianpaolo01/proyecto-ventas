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
}
export default Ventas