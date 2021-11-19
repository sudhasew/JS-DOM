(function () {
  const numberButton = document.querySelector("#number");
  const selectButton = document.querySelector("#coin");
  const moneyButton = document.querySelector("#submit");
  moneyButton.addEventListener("click", (event) => {
    for (let i = 0; i < numberButton.value; i++) {
      const div = document.createElement("div");
      div.classList.add("coin");
      div.classList.add(selectButton.value);
      // div.style.borderRadius = "50%";
      // div.style.width = "50px";
      // div.style.height = "50px";
      // div.style.backgroundColor = "gray";
      // div.style.border = "2px solid black";
      // div.style.fontSize = "15px";
      // div.style.display = "flex";
      // div.style.alignItems = "center";
      // div.style.justifyContent = "center";
      div.innerText = `${selectButton.value}`;
      document.body.append(div);
      div.addEventListener("click", (event) => {
        event.target.remove();
      });
    }
  });
})();
