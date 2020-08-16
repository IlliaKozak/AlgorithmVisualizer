import insertionSort from "./InsertionSort";


// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 2;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'teal';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'pink';

const insertionSortAnimated = (array) => {
    const animations = insertionSort(array);

    const arrayBars = document.getElementsByClassName("bar");

    for (let i = 0; i < animations.length; i++) {
        const [barOneIndex, barTwoIndex] = animations[i];   
        
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
        //arrayBars[barOneIndex] = arrayBars[barTwoIndex]
        let tempStyle = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height
        barTwoStyle.height = tempStyle;

        

        }, i* ANIMATION_SPEED_MS);
        
    }


}

export default insertionSortAnimated;