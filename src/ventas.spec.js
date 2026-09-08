import Ventas from "./ventas"

describe( "Ventas",() =>{
    
   it("al ingresar el numero de ventas, debe mostrar el numero de ventas", () => {
    let ventas = new Ventas()
        expect(ventas.obtenerCantidadItems(5)).toEqual(5); 
  });

});

