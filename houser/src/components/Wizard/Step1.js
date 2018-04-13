import React from 'react';


export default function Step1(props) {
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