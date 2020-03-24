const images = document.querySelectorAll('.main-page__header__slider__img');
const imagesArr = Array.from(images);

export const sliderShow = () => {
    changeImage();
}

const changeImage = () => {
    for(let i = 0; i < imagesArr.length; i++) {
        setTimeout(function(){console.log(i)}, 4000);
            
    } 
    
}

/*
 if(j = i){
                imagesArr[j].classList.remove('transparent');
            } else {
                if(!imagesArr[j].classList.contains('transparent')){
                    imagesArr[j].classList.add('transparent');
                }
            }


            
*/



