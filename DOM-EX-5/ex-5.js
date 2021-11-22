(function () {
  const buttons = document.querySelectorAll(".tr");
  let randomNumber = Math.floor(Math.random() * buttons.length);
  buttons[randomNumber].id = "it";
  document.querySelector(".table").addEventListener("click", (event) => {
    //console.log("1111", event.target.classList);
    event.target.style.backgroundColor = "green";
    console.log(event.target.id);
    if (event.target.id === "it") {
      event.target.style.backgroundColor = "red";
      buttons.forEach((clickedButton) => {
        if (clickedButton.style.backgroundColor === "green") {
          clickedButton.style.backgroundColor = "yellow";
        }
      });
    }
  });
})();
