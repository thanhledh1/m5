import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Car from './components/Car';
import Timer from './components/Timer';
import App1 from './components/HookCustom';
import Student from './components/Student';
import MyForm from './components/Form';
import BasicForm from './components/Formik';
import Submit from './components/Form';
import FileUploadPage from './components/Form';
import THform from './components/THform';
import THValidateForm from './components/THValidateForm';
import THFormLoginwithFormik from './components/THFormLoginwithFormik';
import BtContact from './components/BtContact';
import BtBook from './components/BtBook';
import SendEmailForm from './components/BTmail';

// const mystyle = {
//   color: 'red',
// }
// const name = "thanh";
// const className = "title";
// const id = "msg";

// const h1 = <h1 style={mystyle} id={id} className={className}>{name}</h1>;

// const element = <h4>Browser's details: {navigator.userAgent}</h4>

// const students = [
//   {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     company:CarSelectagazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ]


// const tableRows = students.map((student, index) => (
//   <tr key={index}>
//     <td>{student.company}</td>
//     <td>{student.contact}</td>
//     <td>{student.country}</td>
//   </tr>
// ));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <table>
//     <thead>
//       <tr>
//         <th>Company</th>
//         <th>Contact</th>
//         <th>Country</th>
//       </tr>
//     </thead>
//     <tbody>
//       {tableRows}
//     </tbody>
//   </table>
// );





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SendEmailForm/>)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
