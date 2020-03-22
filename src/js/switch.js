const navbarItems = document.querySelectorAll('.navbar__item');
const navbarItemsArr = Array.from(navbarItems);
const navbar = document.querySelector('.navbar');

export const switchMenu = () => {    
    navbarItemsArr.forEach((item) => {
        item.style.display === "none" ? item.style.display = "block" :
        item.style.display = "none"
    });    
    navbar.style.backgroundColor = "#448D76";
}

