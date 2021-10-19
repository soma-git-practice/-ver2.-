'use strict';
let zorn = document.querySelector('.writeZorn');
let fst = document.getElementsByClassName('fst')[0];
let sec = document.getElementsByClassName('sec')[0];
let thi = document.getElementsByClassName('thi')[0];
let fou = document.getElementsByClassName('fou')[0];
let fif = document.getElementsByClassName('fif')[0];
let six = document.getElementsByClassName('six')[0];
let sev = document.getElementsByClassName('sev')[0];
let eig = document.getElementsByClassName('eig')[0];
let nin = document.getElementsByClassName('nin')[0];
let zer = document.getElementsByClassName('zer')[0];
let zer2 = document.getElementsByClassName('zer2')[0];
let dot = document.getElementsByClassName('dot')[0];

let pls = document.getElementsByClassName('pls')[0];
let pul = document.getElementsByClassName('pul')[0];
let mul = document.getElementsByClassName('mul')[0];
let div = document.getElementsByClassName('div')[0];
let equ = document.getElementsByClassName('equ')[0];
let cle = document.getElementsByClassName('cle')[0];

let total = 0; //合計

fst.onclick = function(){
  zorn.value += parseInt(fst.value);
  length += fst.value
}
sec.onclick = function(){
  zorn.value += parseInt(sec.value);
}
thi.onclick = function(){
  zorn.value += parseInt(thi.value);
}
fou.onclick = function(){
  zorn.value += parseInt(fou.value);
}
fif.onclick = function(){
  zorn.value += parseInt(fif.value);
}
six.onclick = function(){
  zorn.value += parseInt(six.value);
}
sev.onclick = function(){
  zorn.value += parseInt(sev.value);
}
eig.onclick = function(){
  zorn.value += parseInt(eig.value);
}
nin.onclick = function(){
  zorn.value += parseInt(nin.value);
}
zer.onclick = function(){
  zorn.value += parseInt(zer.value);
}
zer2.onclick = function(){
  zorn.value *= 100;
}
dot.onclick = function(){
  zorn.value += '.';
}
pls.onclick = function(){
  zorn.value += '+';
}
pul.onclick = function(){
  zorn.value += '-';
}
mul.onclick = function(){
  zorn.value += '×';
}
div.onclick = function(){
  zorn.value += '÷';
}
equ.onclick = function(){
  zorn.value += '=';
}
cle.onclick = function(){
  zorn.value -= zorn.value;
}



