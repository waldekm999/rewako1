const html = document.documentElement;
const body = document.body;
const navItem = document.querySelector('.navbar__item');

const scroller = document.querySelector('.scroller');
const map = document.querySelector('.map');
const navbar = document.querySelector('.navbar');

export const hideEndShow = () => {
    if(html.scrollTop < 1000) {
        scroller.style.visibility = "hidden";
        map.style.visibility = "hidden";       
        if(window.innerWidth > 760) 
        navbar.style.backgroundColor = "";
    } else {
        scroller.style.visibility = "visible";
        map.style.visibility = "visible";          
        if(window.innerWidth > 760)    
        navbar.style.backgroundColor = "#448D76";
    }   
    
}

export const toUp = () => {
    let time = setInterval(goUp, 1);

    function goUp() {
        html.scrollTop -= 30;
        body.scrollTop -= 30;

        if (html.scrollTop <= 0) {
            clearInterval(time);
        }
    }
}