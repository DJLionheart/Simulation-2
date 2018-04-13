import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            propertyname: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    addHouse() {
        axios.post('/api/houses', { newHouse: this.state }).then( res => {
            //code below will take user back to dashboard, after promise fulfilled
            window.location.href="/"
        }).catch( err => console.log(err));
    }



    render() {
        const { propertyname, address, city, state, zip } = this.state;
        return(
            <div>
                <div className="wizard-header">
                    <h1>Add New Listing</h1>
                    <Link to="/"><button>Cancel</button></Link>
                </div>
                <div className="wizard-form">
                    <form>
                        <label>Property Name</label>
                        <input onChange={ evt => this.handleChange(evt) } name="propertyname" value={ propertyname }/>
                        <label>Address</label>
                        <input onChange={ evt => this.handleChange(evt) } name="address" value={ address }/>
                        <label>City</label>
                        <input onChange={ evt => this.handleChange(evt) } name="city" value={ city }/>
                        <label>State</label>
                        <input onChange={ evt => this.handleChange(evt) } name="state" value={ state }/>
                        <label>Zip</label>
                        <input onChange={ evt => this.handleChange(evt) } name="zip" value={ zip }/>
                    </form>
                </div>
                <div className="wizard-btn-box">
                    <button onClick={ () => this.addHouse() }>Complete</button>
                </div>
            
            </div>
        
        )

    }
}

export default Wizard;