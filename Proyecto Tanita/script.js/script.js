    function verificar() {
      const claveCorrecta = "soylamujermaspreciosadelmundo";   // CAMBIA ESTA CONTRASEÑA
      const claveIngresada = document.getElementById("soylamujermaspreciosadelmundo").value;

      if (claveIngresada === claveCorrecta) {
        window.location.href = "Principal.html"; // página de destino
      } else {
        document.getElementById("error").textContent =
          "Contraseña incorrecta";
      }
    }
