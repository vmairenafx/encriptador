var taEncriptar = document.querySelector(".txtarea-encriptar");
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var taDesencriptar = document.querySelector(".txtarea-desencriptar");
var munheco = document.querySelector(".munheco");
var mensaje = document.querySelector(".mensaje");
var text;

Ocultar();
botonEncriptar.addEventListener("click", botonDeEncriptado);
botonDesencriptar.addEventListener("click", botonDeDesencriptado);
botonCopiar.addEventListener("click", botonCopiarTexto);

function Encriptar() {
  if (taDesencriptar.value.includes("e")) {
    taDesencriptar.value = taDesencriptar.value.replaceAll("e", "enter");
  }
  if (taDesencriptar.value.includes("i")) {
    taDesencriptar.value = taDesencriptar.value.replaceAll("i", "imes");
  }
  if (taDesencriptar.value.includes("a")) {
    taDesencriptar.value = taDesencriptar.value.replaceAll("a", "ai");
  }
  if (taDesencriptar.value.includes("o")) {
    taDesencriptar.value = taDesencriptar.value.replaceAll("o", "ober");
  }
  if (taDesencriptar.value.includes("u")) {
    taDesencriptar.value = taDesencriptar.value.replaceAll("u", "ufat");
  }
}

function Desencriptar() {
  if (taDesencriptar.value.includes("enter")) {
    taDesencriptar.value = taDesencriptar.value.replaceAll("enter", "e");
  }
  if (taDesencriptar.value.includes("imes")) {
    taDesencriptar.value = taDesencriptar.value.replaceAll("imes", "i");
  }
  if (taDesencriptar.value.includes("ai")) {
    taDesencriptar.value = taDesencriptar.value.replaceAll("ai", "a");
  }
  if (taDesencriptar.value.includes("ober")) {
    taDesencriptar.value = taDesencriptar.value.replaceAll("ober", "o");
  }
  if (taDesencriptar.value.includes("ufat")) {
    taDesencriptar.value = taDesencriptar.value.replaceAll("ufat", "u");
  }
}

function botonDeEncriptado() {
  text = taEncriptar.value.toLowerCase();
  taDesencriptar.value = text;


  Encriptar();

  if (text.length == 0 || /^\s+$/.test(text)) {
    alert(
      "Escribe una palabra o frase antes de usar el boton de Encriptar/Desencriptar"
    );
    window.location.reload();
  } else {
    munheco.style.display = "none";
    mensaje.style.display = "none";
    taDesencriptar.style.display = "block";
    botonCopiar.style.display = "block";
    botonDesencriptar.disabled = false;
    botonDesencriptar.style.cursor = "pointer";
    taEncriptar.value = "";
  }
}

function botonDeDesencriptado() {
    text = taEncriptar.value.toLowerCase();
    taDesencriptar.value = text;
  
  Desencriptar();

  if (text.length == 0 || /^\s+$/.test(text)) {
    alert(
      "Escribe una palabra o frase antes de usar el boton de Encriptar/Desencriptar"
    );
    window.location.reload();
  } else {
    munheco.style.display = "none";
    mensaje.style.display = "none";
    taDesencriptar.style.display = "block";
    botonCopiar.style.display = "block";
    botonDesencriptar.disabled = false;
    botonDesencriptar.style.cursor = "pointer";
    taEncriptar.value = "";
  }
}

function botonCopiarTexto() {
  taDesencriptar.focus();
  document.execCommand("selectAll");
  document.execCommand("copy");

  botonCopiar.innerHTML = "COPIADO!!!";
  botonCopiar.style.color = "yellow";

  setTimeout(() => (botonCopiar.innerHTML = "Copiar"), 3000);

  setTimeout(() => (botonCopiar.style.color = "white"), 3000);
}

function Ocultar() {
  taDesencriptar.style.display = "none";
  botonCopiar.style.display = "none";
}


