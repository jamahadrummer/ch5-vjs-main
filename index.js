// import * as crComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";
// import { publishEvent } from '/node_modules/@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
import { subscribeState } from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';
import { publishEvent } from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';
// const crComLib = require('@crestron/ch5-crcomlib')
const join1 = document.getElementById("j1");
const join2 = document.getElementById("j2");
const join3 = document.getElementById("j3");
const join4 = document.getElementById("j4");
const join5 = document.getElementById("j5");
const read1 = document.getElementById("s1");
const read2 = document.getElementById("s2");
const read3 = document.getElementById("s3");
const read4 = document.getElementById("s4");
const read5 = document.getElementById("s5");


// subscribeState('s', '1', (value) => {
// 	const elem = document.getElementById('s1');
// 	elem.innerHTML = value;
// 	console.log(value);
// });

// subscribeState('s', '2', (value) => {
// 	const elem = document.getElementById('s2');
// 	elem.innerHTML = value;
// 	console.log(value);
// });

// subscribeState('s', '3', (value) => {
// 	const elem = document.getElementById('s3');
// 	elem.innerHTML = value;
// 	console.log(value);
// });

// subscribeState('s', '4', (value) => {
// 	const elem = document.getElementById('s4');
// 	elem.innerHTML = value;
// 	console.log(value);
// });

// subscribeState('s', '5', (value) => {
// 	const elem = document.getElementById('s5');
// 	elem.innerHTML = value;
// 	console.log(value);
// });
// function cresRead(num1) {
// 	subscribeState('s', num1, (value) )
// }

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