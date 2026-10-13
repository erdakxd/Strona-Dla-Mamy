const itemsRepertoire = document.querySelectorAll('.items_repertoire');

function repertoireResize(event, previousTarget){

    function checkGridColumn(){
        arrayCheckTrue = [];
        for (let i = 0; i < itemsRepertoire.length; i++){
            arrayCheckTrue.push(window.getComputedStyle(itemsRepertoire[i]).gridColumn === "auto");
        }
        return arrayCheckTrue
    }

    function checkTrue(arrayCheckTrue){
        return arrayCheckTrue.every(Boolean);
    }

    // Current Target
    const styleTarget = event.target.style;
    const imgTarget = event.target.getElementsByTagName("img");
    const headerTarget = event.target.getElementsByTagName("h3");
    const descriptionTarget = event.target.querySelector(".box-description");


    if (event.target === previousTarget && styleTarget.gridColumn === "1 / span 3"){
        previousTarget.style.gridColumn = "auto";
        previousTarget.getElementsByTagName("img")[0].style.maxWidth = "";
        previousTarget.getElementsByTagName("h3")[0].style.fontSize = "0.7rem";
        previousTarget.querySelector(".box-description").style.display = "none";
    }
    else if (event.target.className === 'items_repertoire' && checkTrue(checkGridColumn()) === true){
        styleTarget.gridColumn = "1 / span 3";
        imgTarget[0].style.maxWidth = "50%";
        headerTarget[0].style.fontSize = "2rem";
        descriptionTarget.style.display = "flex";
    }
    else if (event.target.className === 'items_repertoire' && checkTrue(checkGridColumn()) !== true) {
        
        previousTarget.style.gridColumn = "auto";
        previousTarget.getElementsByTagName("img")[0].style.maxWidth = "";
        previousTarget.getElementsByTagName("h3")[0].style.fontSize = "0.7rem";
        previousTarget.querySelector(".box-description").style.display = "none";

        styleTarget.gridColumn = "1 / span 3";
        imgTarget[0].style.maxWidth = "50%";
        headerTarget[0].style.fontSize = "2rem";
        descriptionTarget.style.display = "flex";
    }
    // else{
    //     console.log(1)
    // }

    return event.target
}

let previousTarget = null
addEventListener("click", (event)=> {
    previousTarget = repertoireResize(event, previousTarget)
    });