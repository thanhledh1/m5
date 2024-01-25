// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: 0
//       };
//       this.setNewNumber = this.setNewNumber.bind(this);
//     }
//     setNewNumber() {
//       this.setState({ data: this.state.data + 1 });
//     }
//     render() {
//       return (
//         <div>
//           <button onClick={this.setNewNumber}>INCREMENT</button>
//           <Content myNumber={this.state.data}></Content>
//         </div>
//       );
//     }
//   }
//   class Content extends React.Component {
//     UNSAFE_componentWillMount() {
//       console.log("Component WILL MOUNT!");
//     }
//     componentDidMount() {
//       console.log("Component DID MOUNT!");
//     }
//     UNSAFE_componentWillReceiveProps(newProps) {
//       console.log("Component WILL RECIEVE PROPS!");
//     }
//     shouldComponentUpdate(newProps, newState) {
//       return true;
//     }
//     UNSAFE_componentWillUpdate(nextProps, nextState) {
//       console.log("Component WILL UPDATE!");
//     }
//     componentDidUpdate(prevProps, prevState) {
//       console.log("Component DID UPDATE!");
//     }
//     componentWillUnmount() {
//       console.log("Component WILL UNMOUNT!");
//     }
//     render() {
//       return (
//         <div>
//           <h3>{this.props.myNumber}</h3>
//         </div>
//       );
//     }
//   }

import React, { Component } from 'react';

  
  class Life extends React.Component {
    constructor(props) {
      super(props);
      this.state = { text: "", inputText: "", mode: "view" };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }
  
    handleChange(e) {
      this.setState({ inputText: e.target.value });
    }
  
    handleSave() {
      this.setState({ text: this.state.inputText, mode: "view" });
    }
  
    handleEdit(a) {
      this.setState({ mode: "edit" });
    }
  
    //Để render ra các phương thức, ta kiểm tra các thuộc tính mode
    render() {
      if (this.state.mode === "view") {
        return (
          <div>
            <p>Text: {this.state.text}</p>
            <button onClick={()=>this.handleEdit(5)}>Edit</button>
          </div>
        );
      } else {
        return (
          <div>
            <p>Text: {this.state.text}</p>
            <input onChange={this.handleChange} value={this.state.inputText} />
            <button onClick={this.handleSave}>Save</button>
          </div>
        );
      }
    }
  }
  export default Life;