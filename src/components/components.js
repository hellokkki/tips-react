import React from "react";
import {Component} from "react";
import { ReactDOM } from "react";


export class CreatePersonalForm extends Component {

    render () {
     return(
       <div className="d-flex justify-center align-center">
          <form className="form form--create-personal">
           <input className="input input--personal-names" name="person-name"/>
           <select className="select--personal-role">
             <option>officiant</option>
             <option>barmen</option>
             <option>hostes</option>
           </select>
          </form> 
       </div>
     )
    }
  }



//   buttons
