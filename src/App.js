import React, { Component } from 'react';
import 'react-input-range/lib/css/index.css';
import './App.css';
import InputRange from 'react-input-range';


const wrapperStyle = { width: 400, border: "1px solid #ccc" , padding: "50px 20px", borderRadius: "5px"};


class App extends Component {
    constructor() {
        super()

        this.state = {
            rangers: [],
            value: { min: -1, max: 0 },
            value2: { min: 5, max: 50 },
            indexRange: 0,
            avalue: [{
                min: -1,
                max: 0
            }],
        }

        // this.onChange = this.onChange.bind(this)
        this.addRange = this.addRange.bind(this)

    }



    // SaveLight(event) {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
    //     console.log(data);
    //     fetch('/api/form-submit-url', {
    //         method: 'POST',
    //         body: data,
    //     });
    // }



    // onChange (event) {
    //     this.setState({
    //         inputValue: event.target.value
    //     })
    //     console.log("dsf");
    // }

    addRange (event) {
        event.preventDefault()

        console.log(this.state.avalue)
        this.setState({
            rangers: this.state.rangers.concat([{
                dom: <InputRange maxValue={69} minValue={-1} value={this.state.avalue[this.state.indexRange]} onChange={value2 => this.setState({ value2 })} />
            }]),


        })
        this.setState({
            avalue: this.state.avalue.concat([{
                min: -1,
                max: 5
            }]),
            indexRange: this.state.indexRange + 1,
        })
        // console.log(this.state.indexRange)
    }

    render() {

        return (
            <form onSubmit={this.addRange}>
                <button type="submit">Add range</button>
                <InputRange maxValue={69} minValue={-1} value={this.state.value} onChange={value => this.setState({ value })} />
                <InputRange maxValue={69} minValue={-1} value={this.state.value2} onChange={value2 => this.setState({ value2 })}  />

                <ul>
                    {this.state.rangers.map((range, index) => {
                        return (
                            <li key={index} style={wrapperStyle}>
                                {range.dom}
                            </li>
                        )
                    })}
                </ul>
            </form>
        )
    }
}

export default App;