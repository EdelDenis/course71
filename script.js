"use strict"

const box = document.querySelector(".box");

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

const btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    //box.style.height = box.scrollHeight + "px";
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); // - координаті єлемента

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);


console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

// box.scrollTop = 0; - прокрутить элемент вверх скролом

// window.scrollBy(0, 400) - проскролить на 400 пикс вниз (х у)

// window.scrollTo(0 , 400) - проскролить на 400 пикс ОТНОСИТЕЛЬНО САМОГО ВЕРХА