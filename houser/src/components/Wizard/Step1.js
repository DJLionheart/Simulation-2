import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPropertyDeets } from '../../ducks/reducer';


class Step1 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
        this.state = {
            propertyname: props.propertyDeets.propertyname,
            address: props.propertyDeets.address,
            city: props.propertyDeets.city,
            state: props.propertyDeets.state,
            zip: props.propertyDeets.zip
        }

        // Don't do it this way... Tried to do something like this on my first sim as well... :
        // this.props.step1completed
        //     ? this.state = {
        //         propertyname: this.props.propertyname,
        //         address: this.props.address,
        //         city: this.props.city,
        //         state: this.props.state,
        //         zip: this.props.zip
        //     }
        //     : this.state = {
        //         propertyname: '',
        //         address: '',
        //         city: '',
        //         state: '',
        //         zip: 0
        // }
    }

    ////// Comment Out State above

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    // submitStepOne() {
    //     getProperty( this.state.propertyname, this.state.address, this.state.city, this.state.state, this.state.zip)
    //     stepOne()
    // }

    render() {
        const { propertyname, address, city, state, zip } = this.state;
        // const { propertyname, address, city, state, zip } = this.props;

        return(
            <div>
                    <div className="wizard-form">
                        <form>
                            <label>Property Name:</label>
                            <input name="propertyname" onChange={ (e) => this.handleChange(e) } value={ propertyname }/>
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

                    {/* <div className="wizard-form">
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
                    </div> */}
                    <div className="wizard-btn-box">
                        <Link to="/wizard/step2"><button onClick={ () => this.props.getPropertyDeets(propertyname, address, city, state, zip)}>Next Step</button></Link>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // propertyname: state.propertyname,
        // address: state.address,
        // city: state.city,
        // state: state.state,
        // zip: state.zip,
        propertyDeets: state.propertyDeets
    }
}

export default connect(mapStateToProps, { getPropertyDeets })(Step1)