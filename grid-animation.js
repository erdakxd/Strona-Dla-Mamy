const gridContainer = document.querySelector('.grid');
const animateOptions = {
    duration: 1000,
    easing: 'linear',


    onStart: (animatingElementList)=> {
        // if (getComputedStyle(gridContainer).gridTemplateColumns == "209.438px 0px 837.763px"){
        //     console.log('works 1')
        //     gridContainer.style.gridTemplateColumns = '1fr 0.005fr 4fr';
        // }
        // else{
        //     console.log('not works 1');
        // }
    },

    onEnd: (animatingElementList)=> {
        // gridContainer.style.gridTemplateColumns = '1fr 0 4fr';
        // if (getComputedStyle(gridContainer).gridTemplateColumns == '209.1px 1.675px 836.425px 0px'){
        //     console.log('works 2')
        //     gridContainer.style.gridTemplateColumns = '1fr 0 4fr';
        // }
        // else{
        //     console.log('not works 2');
        //     console.log(getComputedStyle(gridContainer).gridTemplateColumns)
            
        // }
    }
}

animateCSSGrid.wrapGrid(gridContainer, animateOptions);
animateCSSGrid.wrapGrid(rightContainer, animateOptions);
animateCSSGrid.wrapGrid(title, animateOptions);

addEventListener('click', () => {
    gridContainer.classList.toggle('grid-column');
    rightContainer.classList.toggle('grid-row-right-container');
    title.classList.toggle('grid-column-title');
})

console.log(getComputedStyle(gridContainer).gridTemplateColumns)