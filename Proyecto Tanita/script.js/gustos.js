function mostrarInfo(texto) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("descripcion").innerText = texto;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}