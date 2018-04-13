import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import wizardRoutes from './wizardRoutes';

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
               { wizardRoutes }
            </div>
        
        )

    }
}

export default Wizard;