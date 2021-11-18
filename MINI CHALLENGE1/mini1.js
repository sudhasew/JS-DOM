(function () {
  const colaButton = document.getElementById("cola");
  const peanutsButton = document.getElementById("peanuts");
  const chacolateButton = document.getElementById("chacolateBar");
  const fruitButton = document.getElementById("fruitGummies");
  const h1 = document.querySelector("h1");
  let total = 0;
  colaButton.addEventListener("click", (event) => {
    total += 2;
    updatePage();
  });
  peanutsButton.addEventListener("click", (event) => {
    total += 3;
    updatePage();
  });
  chacolateButton.addEventListener("click", (event) => {
    total += 4;
    updatePage();
  });
  fruitButton.addEventListener("click", (event) => {
    total += 6;
    updatePage();
  });
  function updatePage() {
    h1.innerText = `$${total}.00`;
  }
})();
