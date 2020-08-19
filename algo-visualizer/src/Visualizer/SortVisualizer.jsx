import React, {Component} from 'react';
import "./SortVisualizer.css"
import mergeSortAnimated from "../Algorithms/MergeSort/mergeAnimation";
import getBubbleSortAnimations from "../Algorithms/BubbleSort";
import quickSortAnimated from "../Algorithms/QuickSort/QuickSortAnimation";
import insertionSort from "../Algorithms/InsertionSort/InsertionSort";
import insertionSortAnimated from "../Algorithms/InsertionSort/InsertionSortAnimation";

class SortVisualizer extends Component {
    
    state = {
        randomArray: [],
        animationSpeed: 5
    }

    componentDidMount(){
        this.resetArray(300);
    }

    resetArray(size) {
        const randomArray = [];
        for (let i = 0; i < size; i++) {
            randomArray.push(this.randomInteger(10,500)) 
        }
        this.setState({randomArray});
    }

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    
    render() {
      console.log(this.state.randomArray);
        return(
        <div className="main-container">
            <header className="top">
                <h1 style={{position: "center"}}>Algorithm visualizer</h1>
            

                             
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
                

                <div className = "bottom-container">
                    <h3>Generate array size</h3>
                    <button ref="button" onClick={() => this.resetArray(50)}>50</button>
                    <button ref="button" onClick={() => this.resetArray(150)}>150</button>
                    <button onClick={() => this.resetArray(300)}>300</button>

                </div>

                {/*<div className = "bottom-container">
                    <h3>Animation speed (ms)</h3>
                    <button ref="button" onClick={() => this.state.animationSpeed = 5}>5</button>
                    <button ref="button" onClick={() => this.state.animationSpeed = 50}>50</button>
                    <button onClick={() => this.state.animationSpeed = 500}>500</button>
                    <button onClick={() => window.location.reload}>reload</button>
                </div>*/}
            
                <div className = "bottom-container">
                    <h3>Algorithms</h3>
                    <button ref="button" onClick={() => quickSortAnimated(this.state.randomArray, this.state.animationSpeed)}>Quick Sort</button> 
                    <button ref="button" onClick={() => mergeSortAnimated(this.state.randomArray, this.state.animationSpeed)}>Merge Sort</button>
                    <button ref="button" onClick={() => getBubbleSortAnimations(this.state.randomArray, this.state.animationSpeed)}>Bubble Sort</button>
                    <button ref="button" onClick={() => insertionSortAnimated(this.state.randomArray, this.state.animationSpeed)}>Insertion Sort</button> 
                </div>

                <div className = "bottom-container">
                     <button onClick={() => window.location.reload()}>Stop animation</button>
                </div>
            
            

            </div>
        </div>
        );
    }
}

export default SortVisualizer;