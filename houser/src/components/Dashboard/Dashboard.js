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

        this.removeHouse = this.removeHouse.bind(this);
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

    removeHouse( id ) {
        axios.delete(`/api/houses/${id}`).then( res => {
            this.getHouses();
        })
    }

    render() {
        const houses = this.state.houses.map( (house, i) => {
            return(
                <div key={ i }>
                    <House houseData={ house }
                    rmvHouse={ this.removeHouse }/>
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