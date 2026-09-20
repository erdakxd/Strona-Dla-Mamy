const gridContainer = document.querySelector('.grid');
const animateOptions = {
    duration: 1000,
    easing: 'linear',
    onStart: (animatingElementList)=> {
        console.log("NIGGGERRER!!");
    }
}

animateCSSGrid.wrapGrid(gridContainer, animateOptions);

addEventListener('click', () => {
    console.log("AddeventListnerWorks!")
    gridContainer.classList.toggle('grid-column');
})