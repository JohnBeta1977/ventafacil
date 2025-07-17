
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('splash-screen').style.display = 'none', 3000);
});

document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("menu-slider").classList.toggle("active");
});

document.getElementById('compartir-pagina').addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'Ventafacil',
      text: 'Explora y compra fácil con Ventafacil',
      url: window.location.href
    });
  } else {
    alert('Tu navegador no soporta esta función.');
  }
});

function mostrarPopup(titulo, descripcion, imagen, precio) {
  document.getElementById('popup-titulo').innerText = titulo;
  document.getElementById('popup-desc').innerText = descripcion;
  document.getElementById('popup-imagen').src = imagen;
  document.getElementById('popup-precio').innerText = 'Precio: $' + precio;
  document.getElementById('popup-whatsapp').href = `https://wa.me/573205893469?text=Quiero%20este%20producto:%20${titulo}%20-%20$${precio}`;
  document.getElementById('popup').classList.remove('hidden');
}

function cerrarPopup() {
  document.getElementById('popup').classList.add('hidden');
}
