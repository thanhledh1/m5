import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleInput1 = (event) => {
    this.setState({
      num1: event.target.value
    })
  }

  handleInput2 = (event) => {
    this.setState({
      num2: event.target.value
    })
  }

  handleAdd = () => {
    const { num1, num2 } = this.state;
    const result = parseFloat(num1) + parseFloat(num2);
    // this.setState({ result });
    this.setState({
      result: result
    });
  }

  handleSubtract = () => {
    const { num1, num2 } = this.state;
    const result = parseFloat(num1) - parseFloat(num2);
    this.setState({ result });
  }

  handleMultiply = () => {
    const { num1, num2 } = this.state;
    const result = parseFloat(num1) * parseFloat(num2);
    this.setState({ result });
  }

  handleDivide = () => {
    const { num1, num2 } = this.state;
    const result = parseFloat(num1) / parseFloat(num2);
    this.setState({ result });
  }

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <input
          type="text"
          name="num1"
          value={num1}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="num2"
          value={num2}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSubtract}>-</button>
        <button onClick={this.handleMultiply}>x</button>
        <button onClick={this.handleDivide}>/</button>
        <p>Kết quả: {result}</p>
      </div>
    );
  }
}

export default Calculator;