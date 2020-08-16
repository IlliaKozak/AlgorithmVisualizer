// // Change this value for the speed of the animations.
 const ANIMATION_SPEED_MS = 100;

// // This is the main color of the array bars.
// const PRIMARY_COLOR = 'teal';

// // This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'pink';

const animations = [];

const quickSort = (array, leftIndex, rightIndex)=> {
    
    

    leftIndex = leftIndex || 0;
    rightIndex = rightIndex || array.length - 1;

    let pivot = partition(array, leftIndex, rightIndex, animations)

    if (leftIndex < pivot - 1) {
        quickSort(array, leftIndex, pivot - 1)
    }

    if(rightIndex > pivot) {
        quickSort(array, pivot, rightIndex)
    } 

    return animations;
}

function swap (array, firstValue, secondValue) {    
    let temp = array[firstValue];
    array[firstValue] = array [secondValue];
    array[secondValue] = temp;
}

function partition (array, leftIndex, rightIndex, animations) {

    let pivot = rightIndex;
    let i = leftIndex;

    /*The logic under Lomuto is, we start from the leftmost element and 
    keep track of index of smaller (or equal to) elements as j. While 
    traversing, if we find a smaller element, we swap current element 
    with arr[j]. Otherwise we ignore current element.*/
    for (let j = leftIndex; j < rightIndex; j++) {
        if (array[j] <= array[pivot]) {
            swap(array, i, j);
            animations.push([i, j])
            i++;
        }
    }
    swap(array, i, rightIndex);
    animations.push([i, rightIndex]);
    
    return i;


}



export default quickSort;