
function encriptar() {
    var texto = document.getElementById("textoEncriptado").value;
    var textoEncriptado = texto.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes"); 
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}
function desencriptar() {
    var texto = document.getElementById("textoEncriptado").value;
    var textoEncriptado = texto.replace(/enter/img, "e");
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i"); 
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}
function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    alert("El texto se ha copiado al portapapeles");
}














