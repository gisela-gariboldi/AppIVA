var numero = prompt("Ingrese un número")
document.getElementById("boton").onclick = iva;
function iva(numero) {
    iva = numero * 1.21;
    alert("El número con IVA es " +iva);
}
iva (numero);

