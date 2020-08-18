
const ANIMATION_SPEED_MS = 70;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'teal';

// This is the color of array bars that are being compared throughout the animations until it is sorted
const SECONDARY_COLOR = 'pink';

const getBubbleSortAnimations = (array) => {
  
  const arrayBars = document.getElementsByClassName('bar');

    
    for (let i = 0; i < array.length ; i++) {      
      for(let j = 0 ; j < array.length - i ; j++){
        setTimeout(() => {       
        if (array[j] < array[j + 1]) {
          
           arrayBars[j].style.backgroundColor = SECONDARY_COLOR;
           arrayBars[j+1].style.backgroundColor = SECONDARY_COLOR;

          // swap values
        let temp = array[j];
        array[j] = array[j+1];
        array[j + 1] = temp;

        const barOneStyle = arrayBars[j].style;
        const barTwoStyle = arrayBars[j+1].style;

        //swap bar sizes
        let tempStyle = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height
        barTwoStyle.height = tempStyle;
          } else {            
               arrayBars[j].style.backgroundColor = PRIMARY_COLOR;
           }
          }, i * ANIMATION_SPEED_MS)        
     }     
    }
    return array;   

    
}

export default getBubbleSortAnimations;



