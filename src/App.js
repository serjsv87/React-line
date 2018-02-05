import React, { Component } from 'react';
import 'react-input-range/lib/css/index.css';
import './App.css';
import InputRange from 'react-input-range';


const wrapperStyle = { width: 400, border: "1px solid #ccc" , padding: "10px 20px", borderRadius: "5px"};

const initialValue = {
    min: -1,
    max: 0
};
const maxValue = 69;
const minValue = -1;

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rangers: [],
            value: { min: -1, max: 0 }
        }

        this.addRange = this.addRange.bind(this)
        this.changeValue = this.changeValue.bind(this)
        this.removeRange = this.removeRange.bind(this)
    }

    addRange (event) {
        event.preventDefault()

        this.setState({
            rangers: this.state.rangers.concat([{
                min: initialValue.min,
                max: initialValue.max
            }])
        })
    }

    removeRange(index){
        console.log(index);
        this.state.rangers.splice(index, 1)
        this.setState({
            rangers: this.state.rangers
        })
    }

    changeValue (value, index) {
        // eslint-disable-next-line
        this.state.rangers[index] = Object.assign(this.state.rangers[index], value);
        this.setState({
            rangers: this.state.rangers
        })
    }

    componentWillMount(){
        this.setState({
            rangers: this.state.rangers.concat(
                {min: 5, max: 10},
                {min: 10, max: 20},
                {min: -1, max: 15},
                {min: 20, max: 25},
                {min: 30, max: 55}
            )
        });
    }
    render() {

        return (
            <form onSubmit={this.addRange}>
                <button type="submit">Add range</button>

                <ul style={wrapperStyle}>

                    {this.state.rangers.map((range, index) => {
                        return (

                            <li key={index}>

                                <InputRange
                                    maxValue={maxValue}
                                    minValue={minValue}
                                    value={{min: range.min, max: range.max}}
                                    onChange={value => this.changeValue(value, index)}
                                />
                                <span
                                    className="delete"
                                    onClick={() => {this.removeRange(index)}}
                                >X</span>
                                <input type="text" readOnly="readOnly" name={"min["+index+"]"} value={range.min}/>
                                <input type="text" readOnly="readOnly" name={"max["+index+"]"} value={range.max}/>
                                <div className="wrap_input">
                                    <label htmlFor={"num_rows_"+index+"_1"}><input id={"num_rows_"+index+"_1"} type="radio" name={"num_rows_"+index} value="0"/> String 1 </label>
                                    <label htmlFor={"num_rows_"+index+"_2"}><input id={"num_rows_"+index+"_2"} type="radio" name={"num_rows_"+index} value="1"/> String 2 </label>
                                    <label htmlFor={"num_rows_"+index+"_3"}><input id={"num_rows_"+index+"_3"} type="radio" name={"num_rows_"+index} value="2"/> String 3 </label>
                                </div>

                                {/*redux db, persist storage*/}
                            </li>
                        )
                    })}
                </ul>
                <button type="button">Save</button>
            </form>
        )
    }
}

export default App;