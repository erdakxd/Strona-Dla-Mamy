const gridContainer = document.getElementById('base');
const animateOptions = {
    duration: 1000,
    easing: 'easeIn',
    onStart: (animatingElementList)=> {
        console.log(1);
    },
    onEnd: (animatingElementList)=> {
        tittle.style.display = "none";
        content.style.display = "none";
    }
}

animateCSSGrid.wrapGrid(gridContainer, animateOptions);

addEventListener('click', () => {
    console.log("AddeventListnerWorks!")
    gridContainer.classList.toggle('grid-column');
})