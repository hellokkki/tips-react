import React, { Component } from 'react'

export default class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {showComponent: false}
        this.handleClickCloseForm = this.handleClickCloseForm.bind(this);
        this.handleClickOpenForm = this.handleClickOpenForm.bind(this);
      }
    
       handleClickOpenForm () {
        this.setState({
          showComponent: true,
        });
       }
      
       handleClickCloseForm () {
         this.setState({
            showComponent: false,
         })
       }

       render() {
        return(<BtnCloseCreateForm />, <BtnCreatePersonal />)
       }
}


 export class BtnCreatePersonal extends Buttons {
    
    render() {
      return (
        <div>
        <button className="btn btn--create-personal" onClick={this.handleClickOpenForm}></button> {
        this.state.showComponent ? <PersonalCreate></PersonalCreate> : null
        }
        </div>
      )
    }
  }

  export class BtnCloseCreateForm extends Buttons {
    
    render() {
        return (
            <div>
            <button className="btn btn--close-create" onClick={this.handleClickCloseForm}></button> {
                this.state.showComponent ? <PersonalCreate /> : null
            }
            </div>
        )
    }

  }



  export class PersonalCreate extends Component {

    render() {
        return (
            <div className="block--create-personal mr-400">
            <form className="">
            <input className="input--personal-names" />
            <select className="personal-role-select">
            <option>officiant</option>
            <option>barmen</option>
            <option>hostes</option>
            </select>
            </form>
            <div className="btn btn--close-create">
                <BtnCloseCreateForm />
            </div>
            </div>
        )
    }
  }


