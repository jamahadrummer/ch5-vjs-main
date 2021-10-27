// import * as crComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";
import { publishEvent } from '/node_modules/@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
const join1 = document.getElementById("j1");
const join2 = document.getElementById("j2");
const join3 = document.getElementById("j3");
const join4 = document.getElementById("j4");
const join5 = document.getElementById("j5");


function cresInteract(num1) {
	console.log("Button has been Pushed");
	publishEvent("b", num1, "true");
	console.log(num1, "High");
	setTimeout(() => {
		publishEvent("b", num1, "false");
	}, 2000);
	console.log(num1, "Low");
};

join1.addEventListener("click", () => {
	cresInteract(1);
	setTimeout(function () {
	}, 1000);

});

join2.addEventListener("click", () => {
	cresInteract(2);
	setTimeout(function () {
	}, 1000);

});
join3.addEventListener("click", () => {
	cresInteract(3);
	setTimeout(function () {
	}, 1000);

});

join4.addEventListener("click", () => {
	cresInteract(4);
	setTimeout(function () {
	}, 1000);

});

join5.addEventListener("click", () => {
	cresInteract(5);
	setTimeout(function () {
	}, 1000);

});