
//imports ----------------------------------------------
import {hideEndShow, toUp} from './js/scroller';
import {extending} from './js/extending';

//DOM --------------------------------------------------
const scroller = document.querySelector('.scroller');
const extend = document.querySelector('.btn-extending');

//events ------------------------------------------------
document.addEventListener('scroll', hideEndShow);
scroller.addEventListener('click', toUp );
extend.addEventListener('click', extending);


/*
import { message, messageDOM } from './js/message';
import info from './data/title.txt';

import addImage from './js/image';

import Creator from './js/creator';

message(info);
messageDOM(info);
addImage('h1');

const e1 = new Creator();
e1.addBgc('red')
const e2 = new Creator();
e2.addBgc('blue')
const e3 = new Creator();
e3.addBgc();
e3.showColor()

let promise = new Promise(function (resolve, reject) { resolve("ok") });
*/



import './sass/main.scss';


