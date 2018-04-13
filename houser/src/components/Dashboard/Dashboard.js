import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import House from '../House/House';


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to="/wizard"><button>Add New Property</button></Link>
                <House />
            </div>
        
        )

    }
}

export default Dashboard;