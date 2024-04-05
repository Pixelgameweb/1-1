let texts = ['text1', 'текст2', 'ТЕКСТ3'];

let slider = document.querySelector('#slider');
const leftControl = document.querySelector('#left');
const rightControl = document.querySelector('#right');


let i = 0;

slider.textContent = texts[0];

rightControl.addEventListener("click", (e) => {
    e.preventDefault();
    i++;
if(i == texts.length){
    i = 0;
}
    slider.textContent = texts[i];
})

leftControl.addEventListener("click", (e) => {
    e.preventDefault();
    i--;
    if(i < 0){
        i = texts.length - 1;
    }
    slider.textContent = texts[i];
})