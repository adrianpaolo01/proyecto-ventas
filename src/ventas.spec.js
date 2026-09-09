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

  it("al ingresar una sigla de estado, debe mostrar el precio final con impuesto", () => {
    let ventas = new Ventas()
    ventas.obtenerCantidadItems(3)
    ventas.obtenerPrecioItem(20)
    ventas.obtenerPrecioNeto(3,20)
    
    expect(ventas.aplicarImpuesto("CA")).toEqual(64.5); 
  });


});

