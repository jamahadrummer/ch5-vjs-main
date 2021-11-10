// Unused Xpanel Config //
//////////////////////////
// const webXpanel = require('@crestron/ch5-webxpanel/dist/cjs/index.js');

// const configuration = {
//     host: '192.168.115.24',
//     ipId: '79'
// };

// if (webXpanel.isActive) {
//     console.log(`WebXPanel version: ${webXpanel.getVersion()}`);
//     console.log(`WebXPanel build date: ${webXpanel.getBuildDate()}`);

//     webXpanel.default.initialize(configuration);
// }
// else {
//     console.log('Skipping WebXPanel since running on touchpanel');
// }


const crComLib = require('../node_modules/@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib.js');

window.crComLib = crComLib;
window.bridgeReceiveIntegerFromNative = crComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = crComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = crComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = crComLib.bridgeReceiveObjectFromNative;

// crComLib.subscribeState('s', '1', (value) => {
//     const elem = document.getElementById('room-name');
//     elem.innerHTML = value;
// });

// crComLib.subscribeState('s', '2', (value) => {
//     const elem = document.getElementById('help-number');
//     elem.innerHTML = value;
// });

// var activeCard = document.getElementById('card-welcome');
// var prevCard;

// function showCard (nextCard) {
//     if (activeCard.id != nextCard) {
//         const popup = document.getElementsByClassName('popup')[0];
//         activeCard.classList.remove('active');

//         if (nextCard.substring(0, 6) == 'popup-') {
//             popup.classList.add('active');
//         }
//         else {
//             popup.classList.remove('active');
//         }

//         prevCard = activeCard;
//         activeCard = document.getElementById(nextCard);
//         activeCard.classList.add('active');

//         const name = activeCard.id.substring(activeCard.id.indexOf('-') + 1);
//         const bottom = document.getElementById('bottom');
//         Array.from(bottom.getElementsByTagName('BUTTON')).forEach((btn) => {
//             if (btn.id == `btn-${name}`) {
//                 btn.classList.add('active');
//             }
//             else {
//                 btn.classList.remove('active');
//             }
//         });
//     }
// }

// function routeSource (n) {
//     crComLib.publishEvent('n', '1', n);
// }

// crComLib.subscribeState('n', '1', (value) => {
//     switch (value) {
//         case 0:
//             showCard('card-welcome');
//             break;
//         case 1:
//             showCard('card-laptop');
//             break;
//         case 2:
//             showCard('card-appletv');
//             break;
//         case 3:
//             showCard('card-pc');
//             break;
//     }
// });

// const btnPC = document.getElementById('btn-pc');

// btnPC.addEventListener('click', (e) => {
//     showCard('card-pc');
//     routeSource(3);
// })

// const btnHelp = document.getElementById('btn-help');
// const btnShutdown = document.getElementById('btn-shutdown');

// btnHelp.addEventListener('click', (e) => showCard('popup-help'));
// btnShutdown.addEventListener('click', (e) => showCard('popup-shutdown'));

// function previousCard() {
//     if (prevCard !== undefined) {
//         showCard(prevCard.id);
//         prevCard = undefined;
//     }
// }

// const btnShutdownShutdown = document.getElementById('btn-shutdown-shutdown');
// btnShutdownShutdown.addEventListener('click', (e) => {
//     showCard('card-welcome');
//     routeSource(0);
// });

// const btnsCancel = Array.from(document.getElementsByClassName('cancel'))
// btnsCancel.forEach((btn) => {
//     btn.addEventListener('click', (e) => previousCard());
// });

// const lblTime = document.getElementById('time');
// const lblDate = document.getElementById('date');

// setInterval(() => {
//     lblTime.innerText = moment().format('h:mm A');
//     lblDate.innerText = moment().format('dddd, MMMM Do, YYYY');
// }, 5000);


// // import * as crComLib from "@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib.js";
// // import { publishEvent } from '/node_modules/@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib.js';
// import { subscribeState } from '@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib';
// import { publishEvent } from '@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib';
// // const crComLib = require('@crestron/ch5-crComLib')
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


crComLib.subscribeState('s', '1', (value) => {
	const elem = document.getElementById('s1');
	elem.innerHTML = value;
	console.log(value);
});

crComLib.subscribeState('s', '2', (value) => {
	const elem = document.getElementById('s2');
	elem.innerHTML = value;
	console.log(value);
});

crComLib.subscribeState('s', '3', (value) => {
	const elem = document.getElementById('s3');
	elem.innerHTML = value;
	console.log(value);
});

crComLib.subscribeState('s', '4', (value) => {
	const elem = document.getElementById('s4');
	elem.innerHTML = value;
	console.log(value);
});

crComLib.subscribeState('s', '5', (value) => {
	const elem = document.getElementById('s5');
	elem.innerHTML = value;
	console.log(value);
});

// function cresRead(num1) {
// 	subscribeState('s', num1, (value) )
// }

function cresInteract(num1) {
	console.log("Button has been Pushed");
	crComLib.publishEvent("b", num1, "true");
	console.log(num1, "High");
	setTimeout(() => {
		crComLib.publishEvent("b", num1, "false");
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