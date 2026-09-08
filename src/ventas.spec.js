import Ventas from "./ventas"

describe( "Ventas",() =>{
    
   it("al ingresar el numero de ventas, debe mostrar el numero de ventas", () => {
    let ventas = new Ventas()
        expect(ventas.obtenerCantidadItems(5)).toEqual(5); 
  });

  it("al ingresar el precio del item, debe mostrar precio ingresado", () => {
    let ventas = new Ventas()
        expect(ventas.obtenerPrecioItem(10)).toEqual(10); 
  });
  
});

