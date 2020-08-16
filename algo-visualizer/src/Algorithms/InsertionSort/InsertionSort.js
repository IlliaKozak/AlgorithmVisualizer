const insertionSort = (array) => {
    const animations = [];

    for (let i = 1; i < array.length; i++) {
        // Choosing the first element in our unsorted subarray
        let current = array[i];
        // The last element of our sorted subarray
        let j = i-1; 
        while ((j >= 0) && (current < array[j])) {
            array[j+1] = array[j];
            animations.push([(j+1), j]);
            console.log("Values1: " + (j+1) + ", " + i);
            j--;
        }
        array[j+1] = current;
        console.log("Values2: " + (j+1) + ", " + i);
        //animations.push([(j+1), i])
        }
    return animations;
}

export default insertionSort;