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

//Code Block From Crestron Professionals Discord
// The amd and cjs module types do not create or expose any global objects or functions.   
// Projects created by advanced JavaScript developers using amd and cjs modules must expose four functions from 
// the Crestron CH5 communications library to allow the control systems communications to be received by the CH5 library. 
// As example for cjs projects, the following code should be executed at startup of the project. 

// import { bridgeReceiveIntegerFromNative, bridgeReceiveBooleanFromNative, bridgeReceiveStringFromNative, bridgeReceiveObjectFromNative } 
//     from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';
// window['bridgeReceiveIntegerFromNative'] = bridgeReceiveIntegerFromNative;
// window['bridgeReceiveBooleanFromNative'] = bridgeReceiveBooleanFromNative;
// window['bridgeReceiveStringFromNative'] = bridgeReceiveStringFromNative;
// window['bridgeReceiveObjectFromNative'] = bridgeReceiveObjectFromNative;

//Necesarry to create a connection with crComLib
window.crComLib = crComLib;
window.bridgeReceiveIntegerFromNative = crComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = crComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = crComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = crComLib.bridgeReceiveObjectFromNative;

// Old import statment attempts
// // import * as crComLib from '@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib.js';
// // import { publishEvent } from '/node_modules/@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib.js';
// import { subscribeState } from '@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib';
// import { publishEvent } from '@crestron/ch5-crComLib/build_bundles/cjs/cr-com-lib';
// // const crComLib = require('@crestron/ch5-crComLib')



//Defined variables for accessing html elements
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
const sub1 = document.getElementById('js1');
const sub2 = document.getElementById('js2');
const sub3 = document.getElementById('js3');
const sub4 = document.getElementById('js4');
const sub5 = document.getElementById('js5');

//Non Functioning Function for digital joins
// let cresInteract = join => {
// 	console.log('Button has been Pushed');
// 	crComLib.publishEvent('b', join, 'true');
// 	console.log(join, 'High');
// 	setTimeout(() => {
// 		crComLib.publishEvent('b', join, 'false');
// 	}, 2000);
// 	console.log(join, 'Low');
// };



//Non Functioning Digital Join Subscriptions
// crComLib.subscribeState('b', '1', (value) => {
// 	console.log(`toggle(${id}) selected(${value})`);
// 	if (value) {
// 		sub1.classList.add('subscribeActive');
// 	}
// 	else {
// 		sub1.classList.remove('subscribeActive');
// 	}
// });

// crComLib.subscribeState('b', '2', (value) => {
// 	console.log(`toggle(${id}) selected(${value})`);
// 	if (value) {
// 		sub1.classList.add('subscribeActive');
// 	}
// 	else {
// 		sub1.classList.remove('subscribeActive');
// 	}
// });

// crComLib.subscribeState('b', '3', (value) => {
// 	console.log(`toggle(${id}) selected(${value})`);
// 	if (value) {
// 		sub1.classList.add('subscribeActive');
// 	}
// 	else {
// 		sub1.classList.remove('subscribeActive');
// 	}
// });


// crComLib.subscribeState('b', '4', (value) => {
// 	console.log(`toggle(${id}) selected(${value})`);
// 	if (value) {
// 		sub4.classList.add('subscribeActive');
// 	}
// 	else {
// 		sub4.classList.remove('subscribeActive');
// 	}
// });

// crComLib.subscribeState('b', '5', (value) => {
// 	console.log(`toggle(${id}) selected(${value})`);
// 	if (value) {
// 		sub5.classList.add('subscribeActive');
// 	}
// 	else {
// 		sub5.classList.remove('subscribeActive');
// 	}
// });


//Working Function for Serial Joins from Control System
function cresRead(num1, elem) {
	crComLib.subscribeState('s', num1, (value) =>
		elem.innerHTML = value);
};

// Functioning OnClick Function
// function onClick1(digitalJoin) {
// 	crComLib.publishEvent('b', digitalJoin, true);
// 	crComLib.publishEvent('b', digitalJoin, false);
// }
// join1.addEventListener('click', onClick1('1'));
// join2.addEventListener('click', onClick1('2'));
// join3.addEventListener('click', onClick1('3'));
// join4.addEventListener('click', onClick1('4'));
// join5.addEventListener('click', onClick1('5'));


//Separate Digital Join Functions
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

//EventListener Declaration for individual digital join functions
join1.addEventListener('click', digiOne);
join2.addEventListener('click', digiTwo);
join3.addEventListener('click', digiThree);
join4.addEventListener('click', digiFour);
join5.addEventListener('click', digiFive);

//Invokation of serial join function above
cresRead('1', read1);
cresRead('2', read2);
cresRead('1', read3);
cresRead('4', read4);
cresRead('5', read5);


//NonFunctional EventListener Declaration for unversal digital join function
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


//////////////////////////////////////////////////////
//Depreciated Code From Previous Tests Other Projects////////////////
//////////////////////////////////////////////////////
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