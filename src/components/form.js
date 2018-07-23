import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { form, fieldset, legend, row, input } from 'react-bootstrap'

class Form extends Component {

  constructor(props){
   super(props)
   this.state = {
     form:{
       venue_name: '',
       address: '',
       contact_phone: '',
       contact_name: ''
     }
   }
 }

 handleChange(event){
   // let {form} = this.state  <---- same as below
   let form = this.state.form

   console.log('id', event.target.id);
   console.log('value', event.target.value);
   form[event.target.id] = event.target.value
   this.setState({form: form})
   console.log({form});
 }

 formSubmit(event){
   event.preventDefault()
   console.log("this");
   // this.props.handleClick(this.state.form) ----> need to create handClick in App.js to connect to database
 }




  render() {
    return (


        <form onSubmit={this.formSubmit.bind(this)}>
            <fieldset>

                <div className="form-group">
                    <label htmlFor="Venue Name">Venue Name</label>
                    <input type="text" className="form-control" id="venue_name"
                    onChange={this.handleChange.bind(this)}
                    value = {this.state.form.venue_name} placeholder="Enter Venue Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address"> Address</label>
                    <input type="text" className="form-control" id="address"
                    onChange={this.handleChange.bind(this)}
                    value = {this.state.form.address} placeholder="Enter Address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Contact Phone">Contact Phone</label>
                    <input type="text" className="form-control" id="contact_phone"
                    onChange={this.handleChange.bind(this)}
                    value = {this.state.form.contact_phone} placeholder="Enter Contact Phone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Contact Email">Contact Email</label>
                    <input type="text" className="form-control" id="contact_name"
                    onChange={this.handleChange.bind(this)}
                    value = {this.state.form.contact_name} placeholder="Enter Contact name"/>
                </div>
            </fieldset>
            <fieldset>
    <button type="submit" id ="submit" className="btn btn-primary">Submit</button>
  </fieldset>

        </form>
    );
  }
}

export default Form;
