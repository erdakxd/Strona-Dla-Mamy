const itemsRepertoire = document.querySelectorAll('.items_repertoire');

function repertoireResize(event){

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

    const styleTarget = event.target.style;
    const imgTarget = event.target.getElementsByTagName("img");
    const headerTarget = event.target.getElementsByTagName("h3");
    const descriptionTarget = event.target.querySelector(".box-description");

    if (event.target.className === 'items_repertoire' && checkTrue(checkGridColumn()) === true){
        styleTarget.gridColumn = "1 / 3 span";
        imgTarget[0].style.maxWidth = "50%";
        headerTarget[0].style.fontSize = "2rem";
        descriptionTarget.style.display = "flex";
        
        console.log('works')
    }
}

addEventListener("click", repertoireResize);