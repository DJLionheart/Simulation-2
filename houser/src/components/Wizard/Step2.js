import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getImage } from '../../ducks/reducer'

function Step2(props) {
    return(
        <div>
            <div className="wizard-form">
                <form>
                    <label>Image URL</label>
                    <input name="imageurl"/>
                </form>
            </div>
            <div className="wizard-btn-box">
                <Link to="/wizard"><button>Previous Step</button></Link>
                <Link to="/wizard/step3"><button>Next Step</button></Link>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { imageurl } = state;
    return {
        imageurl
    }
}

export default connect(mapStateToProps, { getImage })(Step2)