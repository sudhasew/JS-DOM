function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  let selectedOption = document.querySelector("#myDropdown");
  let listItems = document.querySelectorAll("li a");
  listItems.forEach(function (item) {
    selectedOption.addEventListener("click", (event) => {
      let selectedValue = event.target.innerText;
      console.log(selectedValue); // this returns clicked li's value
      if (selectedValue === "Numbers") {
        document.getElementById("letters").style.display = "none";
        document.getElementById("numbers").style.display = "block";
      } else if (selectedValue === "Letters") {
        document.getElementById("numbers").style.display = "none";
        document.getElementById("letters").style.display = "block";
      }
    });
  });
}
