import Ventas from "./ventas"

describe( "Ventas",() =>{
    
   it("al ingresar el cantidad de items, debe mostrar el cantidad de items", () => {
    let ventas = new Ventas()
        expect(ventas.obtenerCantidadItems(5)).toEqual(5); 
  });

  it("al ingresar el precio del item, debe mostrar precio ingresado", () => {
    let ventas = new Ventas()
        expect(ventas.obtenerPrecioItem(10)).toEqual(10); 
  });
  
  it("al ingresar el precio y cantidad de items, debe mostrar el precio neto", () => {
    let ventas = new Ventas()
        expect(ventas.obtenerPrecioNeto(5,2)).toEqual(10); 
  });

  it("al ingresar el precio y cantidad de items, debe mostrar el precio neto", () => {
    let ventas = new Ventas()
        expect(ventas.obtenerPrecioNeto(5,2)).toEqual(10); 
  });

  it("validar que la cantidad de items sea mayor de 0", () => {
    let ventas = new Ventas()
        expect(() => ventas.obtenerCantidadItems(0)).toThrow("La cantidad de items no puede ser menor o igual a 0");
  });
  
  // Codigos de estados
  it("al ingresar la sigla CA, debe mostrar el precio final con impuesto", () => {
    let ventas = new Ventas()
    ventas.obtenerCantidadItems(3)
    ventas.obtenerPrecioItem(20)
    ventas.obtenerPrecioNeto(3,20)
    
    expect(ventas.aplicarImpuesto("CA")).toEqual(64.5); 
  });

  it("si no se selecciona un estado, California es el estado por defecto", () => {
    let ventas = new Ventas()

    expect(ventas.obtenerEstado()).toEqual("CA")
})

  // Descuentos
  it("al hacer una compra mayor a 1000 y menor a 3000, se aplica un descuento del 3%", () => {
    let ventas = new Ventas()
    ventas.obtenerCantidadItems(100)
    ventas.obtenerPrecioItem(20)
    ventas.obtenerPrecioNeto(100,20)
    expect(ventas.aplicarDescuento(2000)).toEqual(1940); 
  });

  it("al hacer una compra mayor a 3000 y menor a 7000, se aplica un descuento del 5%", () => {
    let ventas = new Ventas()
    ventas.obtenerCantidadItems(100)
    ventas.obtenerPrecioItem(40)
    ventas.obtenerPrecioNeto(100,40)
    expect(ventas.aplicarDescuento(4000)).toEqual(3800); 
  });
  
  it("al hacer una compra mayor a 7000 y menor a 10000, se aplica un descuento del 7%", () => {
    let ventas = new Ventas()
    ventas.obtenerCantidadItems(200)
    ventas.obtenerPrecioItem(40)
    ventas.obtenerPrecioNeto(200,40)
    expect(ventas.aplicarDescuento(8000)).toEqual(7440); 
  });

  it("al hacer una compra mayor a 10000 y menor a 30000, se aplica un descuento del 10%", () => {
    let ventas = new Ventas()
    ventas.obtenerCantidadItems(300)
    ventas.obtenerPrecioItem(40)
    ventas.obtenerPrecioNeto(300,40)
    expect(ventas.aplicarDescuento(12000)).toEqual(10800); 
  });

  it("al hacer una compra mayor o igual a 30000, se aplica un descuento del 15%", () => {
    let ventas = new Ventas()
    ventas.obtenerCantidadItems(500)
    ventas.obtenerPrecioItem(60)
    ventas.obtenerPrecioNeto(500,60)
    expect(ventas.aplicarDescuento(30000)).toEqual(25500); 
  });

  //Categorias de alimentos

  it("debe tener la categoría Alimentos", () => {
    let ventas = new Ventas()
    let categorias = ventas.obtenerCategorias()
    expect(categorias).toContainEqual({
        nombre: "Alimentos",
        impuesto: 0,
        descuento: 2
    })

  });
  
   it("categoria Varios por defecto", () => {
    let ventas = new Ventas()
    expect(ventas.categoria).toEqual("Varios");
  });

  it("Alimentos debe tener un descuento adicional del 2%", () => {
    let ventas = new Ventas()

    expect(ventas.obtenerDescuentoCategoria("Alimentos")).toEqual(2)
})

it("Bebidas alcohólicas no debe tener descuento adicional", () => {
    let ventas = new Ventas()

    expect(ventas.obtenerDescuentoCategoria("Bebidas alcohólicas")).toEqual(0)
})

it("Bebidas alcohólicas debe tener un impuesto adicional del 7%", () => {
    let ventas = new Ventas()

    expect(ventas.obtenerImpuestoCategoria("Bebidas alcohólicas")).toEqual(7)
})

it("el impuesto de Electrónicos debe sumarse al impuesto del estado", () => {
    let ventas = new Ventas()

    expect(ventas.calcularImpuestoTotal(8.25, "Electrónicos")).toEqual(12.25)
})

it("el descuento de Alimentos debe sumarse al descuento de la orden", () => {
    let ventas = new Ventas()

    expect(ventas.calcularDescuentoTotal(5, "Alimentos")).toEqual(7)
})

// Tests de peso volumetrico
it("si el peso volumétrico está entre 0 y 10, el costo de envío es 0", () => {
    let ventas = new Ventas()

    expect(ventas.obtenerCostoEnvioPorUnidad(5)).toEqual(0)
})

it("si el peso volumétrico está entre 21 y 40, el costo de envío es 5", () => {
    let ventas = new Ventas()

    expect(ventas.obtenerCostoEnvioPorUnidad(30)).toEqual(5)
})

it("si el peso volumétrico es mayor a 200, el costo de envío es 9", () => {
    let ventas = new Ventas()

    expect(ventas.obtenerCostoEnvioPorUnidad(250)).toEqual(9)
})

// costo total de envio segun cantidad

it("10 unidades con peso volumétrico de 15 deben tener un costo de envío de 35", () => {
    let ventas = new Ventas()

    expect(ventas.calcularCostoEnvio(10, 15)).toEqual(35)
})

it("5 unidades con peso volumétrico de 30 deben tener un costo de envío de 25", () => {
    let ventas = new Ventas()

    expect(ventas.calcularCostoEnvio(5, 30)).toEqual(25)
})

// Descuento de envio segun el tipo del cliente
it("el cliente Normal debe tener 0% de descuento en el envío", () => {
    let ventas = new Ventas()

    expect(ventas.obtenerDescuentoEnvio("Normal")).toEqual(0)
})

it("el cliente Recurrente debe tener 0.5% de descuento en el envío", () => {
    let ventas = new Ventas()

    expect(ventas.obtenerDescuentoEnvio("Recurrente")).toEqual(0.05)
})


});

