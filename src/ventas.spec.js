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


  

  

});

