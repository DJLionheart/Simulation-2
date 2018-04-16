import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProperty, getAddress, getCity, getState, getZip } from '../../ducks/reducer';


class Step1 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.props.step1completed
    //         ? this.state = {
    //             propertyname: this.props.propertyname,
    //             address: this.props.address,
    //             city: this.props.city,
    //             state: this.props.state,
    //             zip: this.props.zip
    //         }
    //         : this.state = {
    //             propertyname: '',
    //             address: '',
    //             city: '',
    //             state: '',
    //             zip: 0
    //     }
    // }

    // handleChange(evt) {
    //     this.props[evt.target.name] = evt.target.value
    // }

    // submitStepOne() {
    //     getProperty( this.state.propertyname, this.state.address, this.state.city, this.state.state, this.state.zip)
    //     stepOne()
    // }

    render() {
        const { propertyname, address, city, state, zip } = this.props;
        return(
            <div>
                    <div className="wizard-form">
                        <form>
                            <label>Property Name:</label>
                            <input name="propertyname" onChange={ (e) => this.props.getProperty(e.target.value) } value={ propertyname }/>
                            <label>Address:</label>
                            <input name="address" onChange={ (e) => this.props.getAddress(e.target.value) } value={ address }/>
                            <label>City:</label>
                            <input name="city" onChange={ (e) => this.props.getCity(e.target.value) } value={ city }/>
                            <label>State:</label>
                            <input name="state" onChange={ (e) => this.props.getState(e.target.value) } value={ state }/>
                            <label>Zip:</label>
                            <input name="zip" onChange={ (e) => this.props.getZip(e.target.value) } value={ zip }/>
                        </form>
                    </div>
                    <div className="wizard-btn-box">
                        <Link to="/wizard/step2"><button>Next Step</button></Link>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        propertyname: state.propertyname,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        step1completed: state.step1completed
    }
}

export default connect(mapStateToProps, { getProperty, getAddress, getCity, getState, getZip })(Step1)