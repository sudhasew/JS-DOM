(function () {
  const h1 = document.querySelector("h1");
  setInterval(() => {
    h1.innerText = new Date().toLocaleTimeString();
  }, 1000);
})();
