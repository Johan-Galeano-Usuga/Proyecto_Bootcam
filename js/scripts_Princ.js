// Script para el carrusel automático
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carrusel").forEach(carrusel => {
    let imagenes = carrusel.dataset.imagenes.split(",");
    let index = 0;
    let imgElement = document.createElement("img");
    imgElement.src = imagenes[index];
    carrusel.appendChild(imgElement);

    setInterval(() => {
      index = (index + 1) % imagenes.length;
      imgElement.src = imagenes[index];
    }, 2000); // Cambia cada 2 segundos
  });
});
