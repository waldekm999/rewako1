const navbarItems = document.querySelectorAll('.navbar__item');
const navbarItemsArr = Array.from(navbarItems);
const navbar = document.querySelector('.navbar');
const switchIcon = document.querySelectorAll('.switch__icon');
const switchIconArr = Array.from(switchIcon);

export const switchMenu = () => {    
         
    navbarItemsArr.forEach((item) => {                
        item.style.display === "none" ? item.style.display = "block" :
        item.style.display = "none"
    });        
    navbar.classList.toggle('green');    
    switchIconArr.forEach((icon) => icon.classList.toggle('display-off'));

}

