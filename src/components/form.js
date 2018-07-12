import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { form, fieldset, legend, row, input } from 'react-bootstrap'

class Form extends Component {
  render() {
    return (
        <form>
            <fieldset>
                <div class="form-group">
                    <label for="Venue Name">Venue Name</label>
                    <input type="text" class="form-control" id="venue_name" placeholder="Enter Venue Name"/>
                </div>
                <div class="form-group">
                    <label for="address"> Address</label>
                    <input type="text" class="form-control" id="address" placeholder="Enter Address"/>
                </div>
                <div class="form-group">
                    <label for="Contact Phone">Contact Phone</label>
                    <input type="text" class="form-control" id="contact_phone" placeholder="Enter Contact Phone"/>
                </div>
                <div class="form-group">
                    <label for="Contact Email">Contact Email</label>
                    <input type="text" class="form-control" id="contact_name" placeholder="Enter Contact name"/>
                </div>
            </fieldset>
        </form>
    );
  }
}

export default Form;
