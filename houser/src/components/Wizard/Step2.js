import React from 'react';


export default function Step2(props) {
    return(
        <div>
        <div className="wizard-header">
                    <h1>Add New Listing</h1>
                    <Link to="/"><button>Cancel</button></Link>
                </div>
                <div className="wizard-form">
                    <form>
                        <input name="imageurl"/>
                    </form>
                </div>
                <div className="wizard-btn-box">
                    <button onClick={ () => this.addHouse() }>Complete</button>
                </div>
        </div>
    )
}