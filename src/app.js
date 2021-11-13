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

// // import * as crComLib from '@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib.js';
// // import { publishEvent } from '/node_modules/@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib.js';
// import { subscribeState } from '@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib';
// import { publishEvent } from '@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib';
// // const crComLib = require('@crestron/ch5-crComLib')
const join1 = document.getElementById('j1');
const join2 = document.getElementById('j2');
const join3 = document.getElementById('j3');
const join4 = document.getElementById('j4');
const join5 = document.getElementById('j5');
const read1 = document.getElementById('s1');
const read2 = document.getElementById('s2');
const read3 = document.getElementById('s3');
const read4 = document.getElementById('s4');
const read5 = document.getElementById('s5');


// function cresInteract(num1) {
// 	console.log('Button has been Pushed');
// 	crComLib.publishEvent('b', num1, 'true');
// 	console.log(num1, 'High');
// 	setTimeout(() => {
// 		crComLib.publishEvent('b', num1, 'false');
// 	}, 2000);
// 	console.log(num1, 'Low');
// };

crComLib.subscribeState('b', '1', (value) => {
	console.log(`toggle(${id}) selected(${value})`);
	if (value) {
		join1.classList.add('s1-selected');
	}
	else {
		join1.classList.remove('s1-selected');
	}
});





function cresRead(num1, elem) {
	crComLib.subscribeState('s', num1, (value) =>
		elem.innerHTML = value);
};


function onClick1(digitalJoin) {
	crComLib.publishEvent('b', digitalJoin, true);
	crComLib.publishEvent('b', digitalJoin, false);
}
join1.addEventListener('click', onClick1('1'));
join2.addEventListener('click', onClick1('2'));
join3.addEventListener('click', onClick1('3'));
join4.addEventListener('click', onClick1('4'));
// join5.addEventListener('click', onClick('5'));

function digiOne(ev) {
	crComLib.publishEvent('b', '1', true);
	crComLib.publishEvent('b', '1', false);
}

function digiTwo(ev) {
	crComLib.publishEvent('b', '2', true);
	crComLib.publishEvent('b', '2', false);
}

function digiThree(ev) {
	crComLib.publishEvent('b', '3', true);
	crComLib.publishEvent('b', '3', false);
}

function digiFour(ev) {
	crComLib.publishEvent('b', '4', true);
	crComLib.publishEvent('b', '4', false);
}

function digiFive(ev) {
	crComLib.publishEvent('b', '5', true);
	crComLib.publishEvent('b', '5', false);
}

join1.addEventListener('click', digiOne);
join2.addEventListener('click', digiTwo);
join3.addEventListener('click', digiThree);
join4.addEventListener('click', digiFour);
join5.addEventListener('click', digiFive);


cresRead('1', read1);
cresRead('2', read2);
cresRead('1', read3);
cresRead('4', read4);
cresRead('5', read5);

// join1.addEventListener('click', () => {
// 	cresInteract('1');
// 	setTimeout(function () {
// 	}, 1000);

// });

// join2.addEventListener('click', () => {
// 	cresInteract('2');
// 	setTimeout(function () {
// 	}, 1000);

// });
// join3.addEventListener('click', () => {
// 	cresInteract('3');
// 	setTimeout(function () {
// 	}, 1000);

// });

// join4.addEventListener('click', () => {
// 	cresInteract('4');
// 	setTimeout(function () {
// 	}, 1000);

// });

// join5.addEventListener('click', () => {
// 	cresInteract('5');
// 	setTimeout(function () {
// 	}, 1000);

// });




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

// crComLib.subscribeState('s', '1', (value) => {
// 	const elem = document.getElementById('s1');
// 	elem.innerHTML = value;
// 	console.log(value);
// });

// crComLib.subscribeState('s', '2', (value) => {
// 	const elem = document.getElementById('s2');
// 	elem.innerHTML = value;
// 	console.log(value);
// });

// crComLib.subscribeState('s', '3', (value) => {
// 	const elem = document.getElementById('s3');
// 	elem.innerHTML = value;
// 	console.log(value);
// });

// crComLib.subscribeState('s', '4', (value) => {
// 	const elem = document.getElementById('s4');
// 	elem.innerHTML = value;
// 	console.log(value);
// });

// crComLib.subscribeState('s', '5', (value) => {
// 	const elem = document.getElementById('s5');
// 	elem.innerHTML = value;
// 	console.log(value);
// });