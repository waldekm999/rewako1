const html = document.documentElement;
const body = document.body;
const scroller = document.querySelector('.scroller');

export const hideEndShow = () => {
    if(html.scrollTop < 900) {
        scroller.style.visibility = "hidden";
    } else {
        scroller.style.visibility = "visible";
    }   
}

export const toUp = () => {
    let time = setInterval(goUp, 1);

    function goUp() {
        html.scrollTop -= 20;
        body.scrollTop -= 20;

        if (html.scrollTop <= 0) {
            clearInterval(time);
        }
    }
}