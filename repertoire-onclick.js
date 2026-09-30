const itemsRepertoire = document.querySelectorAll('.items_repertoire');

function repertoireResize(event){

    function checkGridColumn(){
        for (let i = 0; i < itemsRepertoire.length; i++){
            console.log(window.getComputedStyle(itemsRepertoire[i]));
        }
    }
    checkGridColumn()

    if (event.target.className === 'items_repertoire' && checkGridColumn === true){
        event.target.style.gridColumn = "1 / 3 span"
        console.log('works')
    }
}

addEventListener("click", repertoireResize);