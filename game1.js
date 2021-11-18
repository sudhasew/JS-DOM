(function () {
  const spaceship = document.querySelector(".spaceship");

  document.body.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      if (!spaceship.style.left) {
        spaceship.style.left = 0;
      }

      spaceship.style.left = parseInt(spaceship.style.left) + 30 + "px";
    }
    if (event.key === "ArrowLeft") {
      if (!spaceship.style.left) {
        spaceship.style.left = 0;
      }

      spaceship.style.left = parseInt(spaceship.style.left) - 30 + "px";
    }
    if (event.key === "ArrowUp") {
      if (!spaceship.style.top) {
        spaceship.style.top = 0;
      }

      spaceship.style.top = parseInt(spaceship.style.top) - 30 + "px";
    }
    if (event.key === "ArrowDown") {
      if (!spaceship.style.top) {
        spaceship.style.top = 0;
      }

      spaceship.style.top = parseInt(spaceship.style.top) + 30 + "px";
    }
  });
})();
