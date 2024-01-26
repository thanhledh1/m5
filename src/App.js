import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import AddComponent from "./components/AddComponent";
import Alert from "./components/Alert";
import Calculator from "./components/Calculator";
import Life from "./components/Life";
import Demso from "./components/Demso";
import ChangeColor from "./components/ChangeColor";
import React, { Component } from "react";
import Hello from "./components/Hello";
import Home from "./components/Home";
import THFormLoginwithFormik from "./components/THFormLoginwithFormik";


const Headline = ({ value }) => {
  return (
    <h1>
      Headline
      {value}
    </h1>
  );
};
function App() {

  return (
    <>
    {/* <Header/>
    <Sidebar smg={smg}/>
    <Footer/>
    <Headline value = {smg}/>
    <Welcome name = {name}/>
    <AddComponent firstNumber = {1} secondNumber = {2} />
    <Alert/>
    <Calculator/>
    <Life/>
    <Demso/>
    <ChangeColor/> */}
    <THFormLoginwithFormik/>

    </>
  );
}
export default App;


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true,
//     };
//   }

//   delete = () => {
//     this.setState({ display: false });
//   };

//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <Hello />;
//     }
//     return (
//       <div style={{ textAlign: "center" }}>
//         {<Hello />}
//         <button onClick={this.delete}>Delete the component</button>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isExpand: false
//     };
//   }

//   handler = () => {
//     this.setState({ isExpand: !this.state.isExpand });
//   };

//   render() {
//     const { isExpand } = this.state;


//[Bài tập] Component Expand/Collapse nội dungAssignment
//     return (
//       <div>
//         <h1>Conditional Rendering</h1>
//         {isExpand ? (
//           <div>
//             <button onClick={this.handler}>Đóng giới thiệu</button>
//             <p>Nội dung giới thiệu</p>
//           </div>
//         ) : (
//           <button onClick={this.handler}>Xem giới thiệu</button>
//         )}
//       </div>
//     );
//   }
// }
// export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       form: {
//         email: "",
//         password: "",
//         isRemember: false,
//       },
//       isValid: false,
//       isLoggedIn: false,
//     };
//   }
//   handleChange = (event) => {
//     this.setState(
//       (state) => {
//         const { form } = state;
//         form[event.target.name] = event.target.value;
//         return { form };
//       },
//       () => this.checkValidForm()
//     );
//   };

//   handleChangeCheckbox = () => {
//     this.setState(
//       (state) => {
//         const { form } = state;
//         form.isRemember = !form.isRemember;
//         return { form };
//       },
//       () => this.checkValidForm()
//     );
//   };

//   checkValidForm = () => {
//     const { email, password } = this.state.form;
//     const value = email && password;
//     this.setState({ isValid: value });
//   };

//   handleSubmit = () => {
//     if (this.state.isValid) {
//       this.setState({ isLoggedIn: true });
//     }
//   };

//   handleLogOut = () => {
//     this.setState({ isLoggedIn: false });
//   };
//   render () {
//     const { isLoggedIn, form } = this.state
//     if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
//     return (
//       <div className="container d-flex align-items-center text-center">
//         <div className="form-signin">
//           <form>
//             <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
//             <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//             <div className="form-floating">
//               <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={this.handleChange} />
//               <label>Email address</label>
//             </div>
//             <div className="form-floating">
//               <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={this.handleChange} />
//               <label>Password</label>
//             </div>
//             <div className="checkbox mb-3">
//               <label>
//                 <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me
//               </label>
//             </div>
//             <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.handleSubmit} >Sign in</button>
//             <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
//           </form>
//         </div>
//       </div>
//     )
//   }
// };
// export default App;

