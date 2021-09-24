import * as crComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";
const join1 = document.getElementById("j1");
const join2 = document.getElementById("j2");
const join3 = document.getElementById("j3");
const join4 = document.getElementById("j4");
const join5 = document.getElementById("j5");


function cresInteract(num1) {
  console.log("Button has been Pushed");
  crComLib.publishEvent("b", num1, "true");
  console.log(num1, "High");
  setTimeout(() => {
    crComLib.publishEvent("b", num1, "false");
  }, 2000);
  console.log(num1, "Low")
};

join1.addEventListener("click", () => {
  cresInteract("41");
  setTimeout(function () {
    //   pageTurn("localPC.html");
  }, 1000);

});

join2.addEventListener("click", () => {
  cresInteract("41");
  setTimeout(function () {
    //   pageTurn("localPC.html");
  }, 1000);

});
join3.addEventListener("click", () => {
  cresInteract("41");
  setTimeout(function () {
    //   pageTurn("localPC.html");
  }, 1000);

});

join4.addEventListener("click", () => {
  cresInteract("41");
  setTimeout(function () {
    //   pageTurn("localPC.html");
  }, 1000);

});

join5.addEventListener("click", () => {
  cresInteract("41");
  setTimeout(function () {
    //   pageTurn("localPC.html");
  }, 1000);

});