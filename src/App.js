// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Modal from './components/Modal'
import { CreatePersonalForm } from './components/components';
import { useState } from 'react';
import Drop from './components/Drops';
import Calendar from 'react-calendar';

const App = () => {
  const [buttonModal, setButtonModal] = useState(false)

  return (
    <div className="App">
    <div className="wrapper">
    <header className="header d-flex justify-between">
      <div className="header--left">
       <h3>Hello! this is my little app for counting tips. <br /> There you can do it for all team! Just hit the button to start</h3>
      </div>
      <div className="header--right">
       <button onClick={() => setButtonModal(true)} className="btn btn--create-restaraunt">create restaraunt!</button>
      </div>
    </header>
    <main className="main">
    <div className="block--calendar">
     <div className="block--calendar__text">
     <p className="text">there is a place where you can pick up dates to counting</p>
     </div>
    <div className="block--calendar__button">
    <Drop>
      <Calendar />
    </Drop>
    </div>
    </div>
    </main>
      <Modal 
    trigger={buttonModal}
    setTrigger={setButtonModal}
    >
      <CreatePersonalForm />
      </Modal>
    </div>
    </div>
  )
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
