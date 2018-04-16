import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'

import { getMortgage, getRent } from '../../ducks/reducer'

class Step3 extends Component {

    addHouse() {
        console.log('====================================');
        console.log(this.props.state);
        console.log('====================================');
        axios.post('/api/houses', { newHouse: this.props.state }).then( res => {
            //code below will take user back to dashboard, after promise fulfilled
            window.location.href="/"
        }).catch( err => console.log(err));
    }

    render() {
        const { monthlymortgage, desiredrent } = this.props.state;
        return(
            <div>
                <div className="wizard-form">
                    <h3>Recommended Rent: {1500}</h3>
                    <form>
                        <label>Monthly Mortgage Amount</label>
                        <input name="imageurl" onChange={ (e) => this.props.getMortgage(e.target.value) } value={ monthlymortgage }/>
                        <br/>
                        <label>Desired Monthly Rent</label>
                        <input name="imageurl" onChange={ (e) => this.props.getRent(e.target.value) } value={ desiredrent }/>
                    </form>
                </div>
                <div className="wizard-btn-box">
                    <Link to="/wizard/step2"><button>Previous Step</button></Link>
                    <button onClick={ () => this.addHouse() }>Complete</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // const { monthlymortgage, desiredrent } = state;
    return {
        state
    }
}

export default connect(mapStateToProps, { getMortgage, getRent })(Step3)