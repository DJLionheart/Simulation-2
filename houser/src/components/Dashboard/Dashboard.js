import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.getHouses();
    }

    // componentDidUpdate(prevState) {
    //     if( prevState.houses !== this.state.houses ) {
    //         this.getHouses();
    //     }
    // }

    getHouses() {
        axios.get('/api/houses').then( res => {
            this.setState({
                houses: res.data
            })
        })

    }
    render() {
        const houses = this.state.houses.map( (house, i) => {
            return(
                <div key={ i }>
                    <House houseData={ house }/>
                </div>
            )
        })
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to="/wizard"><button>Add New Property</button></Link>
                { houses }
            </div>
        
        )

    }
}

export default Dashboard;