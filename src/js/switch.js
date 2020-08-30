const navbarItems = document.querySelectorAll('.navbar__item');
const navbarItemsArr = Array.from(navbarItems);
const navbar = document.querySelector('.navbar');
const switchIcon = document.querySelectorAll('.switch__icon');
const switchIconArr = Array.from(switchIcon);
const logoGreen = document.querySelector('.logo__green')
const logoWhite = document.querySelector('.logo__white')

export const switchMenu = () => {    
    console.log("jestem");
    navbarItemsArr.forEach((item) => {                
        item.style.display === "none" ? item.style.display = "block" :
        item.style.display = "none"
    });        
    navbar.classList.toggle('green');    
    switchIconArr.forEach((icon) => icon.classList.toggle('display-off'));
    logoGreen.style.display === "none" ? logoGreen.style.display = "block" :
    logoGreen.style.display = "none";
    logoWhite.style.display === "none" ? logoWhite.style.display = "block" :
    logoWhite.style.display = "none"

}

