import getMergeSortAnimations from './MergeSort'

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;


// This is the main color of the array bars.
const PRIMARY_COLOR = 'teal';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'pink';

const mergeSortAnimated = (array) => {
        const animations = getMergeSortAnimations(array);
        const arrayBars = document.getElementsByClassName('bar');
        for (let i = 0; i < animations.length; i++) {
          
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            //const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            if(i % 3 ===0) {
              setTimeout(() => {
                barOneStyle.backgroundColor = SECONDARY_COLOR;
                barTwoStyle.backgroundColor = SECONDARY_COLOR;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
              }, i * ANIMATION_SPEED_MS);
            }
            // setTimeout(() => {
            //   barOneStyle.backgroundColor = color;
            //   barTwoStyle.backgroundColor = color;
            // }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
       }     
}

export default mergeSortAnimated;