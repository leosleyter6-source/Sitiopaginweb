// Menú responsive
document.getElementById("btnMenu").addEventListener("click", function() {
    document.querySelector("nav ul").classList.toggle("show");
  });
  
  // Mensaje al enviar formulario
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Pronto te responderemos.");
    this.reset();
  });
  