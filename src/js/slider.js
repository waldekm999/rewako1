const slogans = document.querySelectorAll('.main-page__header__slider__slogan');
const slogansArr = Array.from(slogans);
const slogans2 = document.querySelectorAll('.main-page__header__slider__slogan-2');
const slogans2Arr = Array.from(slogans2);

export const sliderShow = () => {
    console.log("krok1");
    if(!slogansArr[0].classList.contains('transparent')){
        slogansArr[0].classList.add('transparent');
        slogans2Arr[0].classList.add('transparent');
        slogansArr[1].classList.remove('transparent');
        slogans2Arr[1].classList.remove('transparent');
        console.log("krok 2")
    }else{
       if(!slogansArr[1].classList.contains('transparent')){
        slogansArr[1].classList.add('transparent');
        slogans2Arr[1].classList.add('transparent');
        slogansArr[2].classList.remove('transparent');
        slogans2Arr[2].classList.remove('transparent');
        console.log("krok3");
       } else{
        slogansArr[2].classList.add('transparent');
        slogans2Arr[2].classList.add('transparent');
        slogansArr[0].classList.remove('transparent');
        slogans2Arr[0].classList.remove('transparent');
        console.log("krok4");
       }
    }
}


/*

export const sliderShow = () => {
    
    firstChange().then(() => secondChange()).then(() => thirdChange()).then(()=> sliderShow());    
    
}

const firstChange = new Promise(() => {
    setTimeout(function(){
        slogansArr[0].classList.toggle('transparent');
        slogans2Arr[0].classList.toggle('transparent');
        slogansArr[1].classList.toggle('transparent');
        slogans2Arr[1].classList.toggle('transparent');
    }, 4000)
})

const secondChange = new Promise(() => {
    setTimeout(function(){
        slogansArr[1].classList.toggle('transparent');
        slogans2Arr[1].classList.toggle('transparent');
        slogansArr[2].classList.toggle('transparent');
        slogans2Arr[2].classList.toggle('transparent');
    }, 8000)
})

const thirdChange = new Promise(() => {
    setTimeout(function(){
        slogansArr[2].classList.toggle('transparent');
        slogans2Arr[2].classList.toggle('transparent');
        slogansArr[0].classList.toggle('transparent');
        slogans2Arr[0].classList.toggle('transparent');
    }, 12000)
})

*/

/*
export const sliderShow = () => {
    firstChange();
    secondChange();
    thirdChange();
}

const firstChange = () => {
    setTimeout(function(){
        slogansArr[0].classList.toggle('transparent');
        slogans2Arr[0].classList.toggle('transparent');
        slogansArr[1].classList.toggle('transparent');
        slogans2Arr[1].classList.toggle('transparent');
    }, 4000)
}

const secondChange = () => {
    setTimeout(function(){
        slogansArr[1].classList.toggle('transparent');
        slogans2Arr[1].classList.toggle('transparent');
        slogansArr[2].classList.toggle('transparent');
        slogans2Arr[2].classList.toggle('transparent');
    }, 8000)
}

const thirdChange = () => {
    setTimeout(function(){
        slogansArr[2].classList.toggle('transparent');
        slogans2Arr[2].classList.toggle('transparent');
        slogansArr[0].classList.toggle('transparent');
        slogans2Arr[0].classList.toggle('transparent');
    }, 12000)
}
*/













/*
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
*/

/*
 if(j = i){
                imagesArr[j].classList.remove('transparent');
            } else {
                if(!imagesArr[j].classList.contains('transparent')){
                    imagesArr[j].classList.add('transparent');
                }
            }


            
*/



