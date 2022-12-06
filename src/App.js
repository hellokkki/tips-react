// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import BtnCreatePersonal from './components.js';
import Calendar from 'react-calendar';

 class App extends Component {
 render () { 
  return (
    <div className="App">
    <div className="wrapper">
    <header className="header d-flex justify-between">
      <div className="header--left">
       <p>Hello! this is my little app for counting tips. <br /> There you can do it for all team! Just hit the button to start</p>
      </div>
      <div className="header--right">
      <BtnCreatePersonal />
      </div>
    </header>
    <div className="block--calendar">
     
    </div>
    </div>
    </div>
  );
 }
}

// function PersonalCreate() {
//   return (
   
//   )
// }

// function BtnOpenCalendar () {

// }






// class PersonalCreate extends React.Component {
//   constructor(props)  {
//  super(props)
//   }

//   render () {
//     return (   
//         <div className="">
//          <form className="">
//           <input className="personal-names-input" />
//           <select className="personal-role-select">
//             <option>officiant</option>
//             <option>barmen</option>
//             <option>hostes</option>
//           </select>
//          </form>
//         </div>
//     )
//   }
// }

export default App;
