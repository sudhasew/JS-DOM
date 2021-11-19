(function () {
  let total = 0;
  const allButtons = document.querySelectorAll("button");
  document.body.addEventListener("click", (event) => {
    total += parseInt(event.target.value);
    console.log(event.target.value);
    document.querySelector("h1").innerText = `$${total}:00`;
  });
})();
// document.body.addEventListener("click",event=>{
//   console.log()
//})
// function updatePage() {
//   h1.innerText = `$${total}.00`;
// }
// (function () {
//   let total = 0;
//   const allButtons = document.querySelectorAll("button");
//   for (let button of allButtons) {
//     document.body.addEventListener("click", (event) => {
//       console.log(event.target.value);
//       document.querySelector("h1").innerText = `${total}`;
//     });
//   }
// })();
// function updatePage() {
//   h1.innerText = `$${total}.00`;
// }
// colaButton.addEventListener("click", (event) => {
//   total += 2;
//   updatePage();
// });
// peanutsButton.addEventListener("click", (event) => {
//   total += 3;
//   updatePage();
// });
// chacolateButton.addEventListener("click", (event) => {
//   total += 4;
//   updatePage();
// });
// fruitButton.addEventListener("click", (event) => {
//   total += 6;
//   updatePage();
