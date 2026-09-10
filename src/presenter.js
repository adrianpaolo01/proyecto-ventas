import sumar from "./sumador.js";
import Ventas from "./ventas.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const ventasForm = document.querySelector("#formulario-ventas");
const ventasResult = document.querySelector("#resultado-ventas");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

const money = (value) => `$${value.toFixed(2)}`;

ventasForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number(document.querySelector("#cantidad-items").value);
  const precio = Number(document.querySelector("#precio-item").value);
  const estado = document.querySelector("#codigo-estado").value;
  const categoria = document.querySelector("#categoria").value;
  const tipoCliente = document.querySelector("#tipo-cliente").value;
  const peso = Number(document.querySelector("#peso-item").value);
  const ventas = new Ventas();

  try {
    ventas.obtenerCantidadItems(cantidad);
    ventas.obtenerPrecioItem(precio);
    const precioNeto = ventas.obtenerPrecioNeto(cantidad, precio);
    const impuestoEstado = ventas.siglasEstados[estado] * 100;
    const impuestoTotal = ventas.calcularImpuestoTotal(impuestoEstado, categoria);
    const precioConImpuesto = precioNeto + (precioNeto * impuestoTotal) / 100;
    const precioConDescuento = ventas.aplicarDescuento(precioConImpuesto) ?? precioConImpuesto;
    const descuentoOrden = precioConImpuesto - precioConDescuento;
    const descuentoFijo = ventas.obtenerDescuentoFijo(tipoCliente, precioNeto, categoria);
    const costoEnvio = ventas.calcularCostoEnvio(cantidad, peso);
    const total = precioConDescuento - descuentoFijo + costoEnvio;

    ventasResult.innerHTML = `
      <div class="result-row"><span>Precio neto (${cantidad} × ${money(precio)})</span><strong>${money(precioNeto)}</strong></div>
      <div class="result-row"><span>Descuento (${(descuentoOrden + descuentoFijo).toFixed(2)})</span><strong>-${money(descuentoOrden + descuentoFijo)}</strong></div>
      <div class="result-row"><span>Impuesto para ${estado} (${impuestoTotal.toFixed(2)}%)</span><strong>${money(precioNeto * impuestoTotal / 100)}</strong></div>
      <div class="result-row"><span>Envío</span><strong>${money(costoEnvio)}</strong></div>
      <div class="result-row total"><span>Precio total</span><strong>${money(total)}</strong></div>`;
  } catch (error) {
    ventasResult.innerHTML = `<p class="result-placeholder">${error.message}</p>`;
  }
});
