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

    if (event.target.className === 'items_repertoire' && checkTrue(checkGridColumn()) === true){
        event.target.style.gridColumn = "1 / 3 span"
        console.log('works')
    }
}

addEventListener("click", repertoireResize);