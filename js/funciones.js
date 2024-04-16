function reverseString(str) {
  return str.split('').reverse().join('');
}

function decodificarMensaje(mensaje) {
  let mensajeDecodificado = '';
  for (let i = 0; i < mensaje.length; i++) {
    if (mensaje[i] === '(') {
      let texto = '';
      i++;
      while (mensaje[i] != ')' && i < mensaje.length) {
        texto += mensaje[i];
        i++;
        }
        mensajeDecodificado += reverseString(texto);
      } else {
        mensajeDecodificado += mensaje[i];
      }
  }
  alert(mensajeDecodificado);
}

function mostrarTexto() {
  let mensajeCodificado = document.getElementById('mensajeCodificado').value;
  decodificarMensaje(mensajeCodificado);
}
