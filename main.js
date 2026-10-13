// Menu Buttons
const menuMainPage = document.getElementById("menu_main_page");
const menuNews = document.getElementById("menu_news");
const menuRepertoire = document.getElementById("menu_repertoire");
const menuGallery = document.getElementById("menu_gallery");
const menuContact = document.getElementById("menu_contact");

const menuItems = [menuMainPage, menuNews, menuRepertoire, menuGallery, menuContact];

// Content Items
const contentMainPage = document.getElementById("content_main_page");
const contentNews = document.getElementById("content_news");
const contentRepertoire = document.getElementById("content_repertoire");
const contentGallery = document.getElementById("content_gallery");
const contentContact = document.getElementById("content_contact");

const contentItems = [contentMainPage, 
    contentNews, 
    contentRepertoire, 
    contentGallery, 
    contentContact];

// 
const rightContainer = document.getElementById("right_container");
const title = document.getElementById("title");
const content = document.getElementById("content");
const hTitle = document.getElementById("main_title");

// Functions
function switchContent(event){
    //Default
    if (window.matchMedia("(min-width: 1280px)").matches){

        for (let i = 0; i < contentItems.length; i++){ 
            contentItems[i].style.display = "none";
            rightContainer.style.display = "block";
            title.style.gridColumn = "2";
            content.style.gridColumn = "2";
        }
    }

    else{
        
        for (let i = 0; i < contentItems.length; i++){ 
            contentItems[i].style.display = "none";
            title.style.gridColumn = "2";
            content.style.gridColumn = "2";
        }
    }

    if (event.srcElement === menuItems[0]){
        contentItems[0].style.display = "flex";
        hTitle.innerHTML = "Lalkowa Scena dla Dzieci";
    }
    else if (event.srcElement === menuItems[1]){
        contentItems[1].style.display = "flex";
        hTitle.innerHTML = "Aktualności";
    }
    else if (event.srcElement === menuItems[2]){
        contentItems[2].style.display = "flex";
        hTitle.innerHTML = "Repertuar";
    }
    else if (event.srcElement === menuItems[3]){
        contentItems[3].style.display = "flex";
        rightContainer.style.display = "none";
        title.style.gridColumn = "2 / span 3";
        content.style.gridColumn = "2 / span 3";
        hTitle.innerHTML = "Galeria";
    }
    else if (event.srcElement === menuItems[4]){
        contentItems[4].style.display = "flex";
        hTitle.innerHTML = "Kontakt";
    }
}

menuItems[0].addEventListener("click", (event) =>{
    switchContent(event);
});
menuItems[1].addEventListener("click", (event) =>{
    switchContent(event);
});
menuItems[2].addEventListener("click", (event) =>{
    switchContent(event);
});
menuItems[3].addEventListener("click", (event) =>{
    switchContent(event);
});
menuItems[4].addEventListener("click", (event) =>{
    switchContent(event);
});