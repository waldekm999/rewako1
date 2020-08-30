const html = document.documentElement;
const body = document.body;
const navItem = document.querySelector('.navbar__item');

const scroller = document.querySelector('.scroller');
const map = document.querySelector('.map');
const navbar = document.querySelector('.navbar');

const logoGreen = document.querySelector('.logo__green')
const logoWhite = document.querySelector('.logo__white')

export const hideEndShow = () => {
    if(html.scrollTop < 1000) {
        scroller.style.visibility = "hidden";
        if(map){
        map.style.visibility = "hidden";  
        }             
        //if(window.innerWidth > 760) 
        navbar.style.backgroundColor = "";
        logoWhite.style.display = "none";
        logoGreen.style.display = "";
    } else {
        scroller.style.visibility = "visible";
        if(map){
        map.style.visibility = "visible";
        }
        //if(window.innerWidth > 760)    
        navbar.style.backgroundColor = "#448D76";
        logoWhite.style.display = "block";
        logoGreen.style.display = "none";
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