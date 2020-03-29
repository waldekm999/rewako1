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


