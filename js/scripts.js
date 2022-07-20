'use strict'

const $btn = document.querySelector('.button-card');
const $idAdvice = document.querySelector('.title-card');
const $textAdvice = document.querySelector('.text-card');



$btn.addEventListener('click', changeAdvice);

async function changeAdvice () {

    const url = `https://api.adviceslip.com/advice`;
    const dataAdvice = await fetch(url);
    const response = await dataAdvice.json();

    const newAdvice = response.slip.advice;
    const newIdAdvice = response.slip.id;

    $idAdvice.innerText = `ADVICE #${newIdAdvice}`;
    $textAdvice.innerText = `${newAdvice}`;
  
}




