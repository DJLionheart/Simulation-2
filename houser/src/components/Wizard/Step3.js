import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFinancials } from '../../ducks/reducer'

class Step3 extends Component {

    // addHouse() {
    //     axios.post('/api/houses', { newHouse: this.state }).then( res => {
    //         //code below will take user back to dashboard, after promise fulfilled
    //         window.location.href="/"
    //     }).catch( err => console.log(err));
    // }

    render() {
        return(
            <div>
                <div className="wizard-form">
                    <h3>Recommended Rent: {1500}</h3>
                    <form>
                        <label>Monthly Mortgage Amount</label>
                        <input name="imageurl"/>
                        <br/>
                        <label>Desired Monthly Rent</label>
                        <input name="imageurl"/>
                    </form>
                </div>
                <div className="wizard-btn-box">
                    <Link to="/wizard/step2"><button>Previous Step</button></Link>
                    <Link to="/"><button>Complete</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { financials } = state;
    return {
        financials
    }
}

export default connect(mapStateToProps, { getFinancials })(Step3)