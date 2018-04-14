import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProperty } from '../../ducks/reducer';


class Step1 extends Component {
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

    save() {

    }

    render() {
        const { propertyname, address, city, state, zip } = this.state;
        return(
            <div>
                    <div className="wizard-form">
                        <form>
                            <label>Property Name:</label>
                            {
                                (this.props.step1completed)
                                    ? <input name="propertyname" onChange={ (e) => this.handleChange(e) } value={ propertyname }/>
                                    : <input name="propertyname" onChange={ (e) => this.handleChange(e) } value={ this.props.propertyname }/>
                            }

                            
                            <label>Address:</label>
                            <input name="address" onChange={ (e) => this.handleChange(e) } value={ address }/>
                            <label>City:</label>
                            <input name="city" onChange={ (e) => this.handleChange(e) } value={ city }/>
                            <label>State:</label>
                            <input name="state" onChange={ (e) => this.handleChange(e) } value={ state }/>
                            <label>Zip:</label>
                            <input name="zip" onChange={ (e) => this.handleChange(e) } value={ zip }/>
                        </form>
                    </div>
                    <div className="wizard-btn-box">
                        <Link to="/wizard/step2"><button onClick={ () => this.save(
                            propertyname, address, city, state, zip) }>Next Step</button></Link>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { getProperty })(Step1)