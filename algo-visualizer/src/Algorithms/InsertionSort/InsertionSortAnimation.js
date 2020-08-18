import insertionSort from "./InsertionSort";


const ANIMATION_SPEED_MS = 3;

const insertionSortAnimated = (array) => {
    const animations = insertionSort(array);

    const arrayBars = document.getElementsByClassName("bar");

    for (let i = 0; i < animations.length; i++) {
        const [barOneIndex, barTwoIndex] = animations[i];   
        
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
        let tempStyle = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height
        barTwoStyle.height = tempStyle;
        }, i* ANIMATION_SPEED_MS);       
    }

}

export default insertionSortAnimated;