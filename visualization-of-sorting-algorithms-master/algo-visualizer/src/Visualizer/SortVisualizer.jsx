import React, {Component} from 'react';
import "./SortVisualizer.css"
//import {getMergeSortAnimations} from '../Algorithms/MergeSort';
import mergeSortAnimated from "../Algorithms/MergeSort/mergeAnimation";
import getBubbleSortAnimations from "../Algorithms/BubbleSort";
//import quickSortAnimated from "../Algorithms/QuickSort.js";
import newQuickSort from '../Algorithms/QuickSort/QuickSort';
import quickSortAnimated from "../Algorithms/QuickSort/QuickSortAnimation";

class SortVisualizer extends Component {
    
    state = {
        randomArray: []
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray() {
        const randomArray = [];
        for (let i = 0; i < 100; i++) {
            randomArray.push(this.randomInteger(10,500)) 
        }
        this.setState({randomArray});
    }

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    fastQuickSort() {
        return (
            console.log("Sorted array:" + newQuickSort(this.state.randomArray, 0, this.state.randomArray.length - 1))
            )
    }
    
    render() {
      console.log(this.state.randomArray);
        return(
        <div className="main-container">
            <header className="top">
                <h1 style={{position: "center"}}>Algorithm visualizer</h1>
                <button onClick={this.resetArray.bind(this)}>Generate array</button>
                <button onClick={() => this.resetArray()}>Generate array(2)</button>
                <button onClick={() => mergeSortAnimated(this.state.randomArray)}>Merge Sort</button>
                <button onClick={() => getBubbleSortAnimations(this.state.randomArray)}>Bubble Sort</button>
                <button onClick={() => quickSortAnimated(this.state.randomArray)}>Quick Sort</button>
                <button onClick={() => this.fastQuickSort(this.state.randomArray) }>New Quick Sort</button>
                

            </header>

            <div className="array-container">
                {this.state.randomArray.map((arrayUnit, index) => {
                return(
                    <div className="bar" style = {{height: `${arrayUnit}px`}} key = {index}>
                    </div>
                    )       
                })}
            </div>
            <div className="bottom">   
            </div>
        </div>
        );
    }
}

export default SortVisualizer;