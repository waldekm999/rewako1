const extended = document.querySelector('.extended-no');
const arrow = document.querySelector('.arrow');
const arrowText = document.querySelector('.arrow__text');

export const extending = () => {
    if(extended.classList.contains('extended-no'))
    {
        extended.classList.remove('extended-no');   
        extended.classList.add('extended'); 
        arrow.classList.add('rotated');
        arrowText.textContent = 'Zwiń';  
    } else {
        extended.classList.remove('extended');   
        extended.classList.add('extended-no');  
        arrow.classList.remove('rotated');
        arrowText.textContent = 'Rozwiń';
    }  
}