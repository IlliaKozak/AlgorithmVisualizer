import quickSort from "./QuickSort";
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'teal';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'pink';

const quickSortAnimated = (array) => {
    const animations = quickSort(array);
    console.log(animations)

    const arrayBars = document.getElementsByClassName("bar");

    for (let i = 0; i < animations.length; i++) {
        const [barOneIndex, barTwoIndex] = animations[i]

        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {            
        //swap bar sizes
        let tempStyle = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height
        barTwoStyle.height = tempStyle;
        },i * ANIMATION_SPEED_MS)       
    }

}

export default quickSortAnimated;