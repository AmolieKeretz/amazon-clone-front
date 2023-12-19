// function slide(direction) {
//     const sliderContent = document.querySelector('.slider-content');
//     const currentTransform = window.getComputedStyle(sliderContent).getPropertyValue('transform');
//     const currentX = parseInt(currentTransform.split(',')[4]) || 0;

//     if (direction === 'left') {
//         sliderContent.style.transform = `translateX(${currentX - 100}px)`; // Adjust the value to control the slide distance
//     } else if (direction === 'right') {
//         sliderContent.style.transform = `translateX(${currentX + 100}px)`; // Adjust the value to control the slide distance
//     }
// }