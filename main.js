// Menu Buttons
let menuMainPage = document.getElementById("menu_main_page");
let menuNews = document.getElementById("menu_news");
let menuRepertoire = document.getElementById("menu_repertoire");
let menuGallery = document.getElementById("menu_gallery");
let menuContact = document.getElementById("menu_contact");

let menuItems = [menuMainPage, menuNews, menuRepertoire, menuGallery, menuContact];

// Content Items
let contentMainPage = document.getElementById("content_main_page");
let contentNews = document.getElementById("content_news");
let contentRepertoire = document.getElementById("content_repertoire");
let contentGallery = document.getElementById("content_gallery");
let contentContact = document.getElementById("content_contact");

let contentItems = [contentMainPage, 
    contentNews, 
    contentRepertoire, 
    contentGallery, 
    contentContact];

// 
let rightContainer = document.getElementById("right_container");
let tittle = document.getElementById("title");
let content = document.getElementById("content");

// Functions
function switchContent(event){
    //Default
    for (let i = 0; i < contentItems.length; i++){ 
        contentItems[i].style.display = "none";
        rightContainer.style.display = "block";
        tittle.style.gridColumn = "2";
        content.style.gridColumn = "2";
    }

    if (event.srcElement === menuItems[0]){
        contentItems[0].style.display = "flex";
    }
    else if (event.srcElement === menuItems[1]){
        contentItems[1].style.display = "flex";
    }
    else if (event.srcElement === menuItems[2]){
        contentItems[2].style.display = "flex";
    }
    else if (event.srcElement === menuItems[3]){
        contentItems[3].style.display = "flex";
        rightContainer.style.display = "none";
        tittle.style.gridColumn = "2 / span 3";
        content.style.gridColumn = "2 / span3";
    }
    else if (event.srcElement === menuItems[4]){
        contentItems[4].style.display = "flex";
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