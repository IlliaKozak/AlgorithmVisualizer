import quickSort from "./QuickSort";


const ANIMATION_SPEED_MS = 5;

const quickSortAnimated = (array) => {
    const animations = quickSort(array);

    const arrayBars = document.getElementsByClassName("bar")

    for (let i = 0; i < animations.length; i++) {
        const [barOneIndex, barTwoIndex] = animations[i]

        const barOneStyle = arrayBars[barOneIndex].style
        const barTwoStyle = arrayBars[barTwoIndex].style

        setTimeout(() => {            
        //swap bar sizes
        let tempStyle = barOneStyle.height
        barOneStyle.height = barTwoStyle.height
        barTwoStyle.height = tempStyle
        },i * ANIMATION_SPEED_MS)       
    }

}

export default quickSortAnimated;