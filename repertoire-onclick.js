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

    StyleTarget = event.target.style;
    // ImgTarget = event.target.className

    if (event.target.className === 'items_repertoire' && checkTrue(checkGridColumn()) === true){
        StyleTarget.gridColumn = "1 / 3 span";
        // StyleTarget.maxWidth = "50%";
        
        console.log('works')
    }
}

addEventListener("click", repertoireResize);