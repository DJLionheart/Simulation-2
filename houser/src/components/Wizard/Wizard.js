import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import { clearAll } from '../../ducks/reducer';

class Wizard extends Component {

    clearEntry() {
        clearAll()
        window.location.href="/";
    }



    render() {
        return(
            <div>
                <div className="wizard-header">
                    <h1>Add New Listing</h1>
                    <button onClick={ () => this.clearEntry() }>Cancel</button>
                </div>
                <Switch>
                    <Route exact path="/wizard/" component={ Step1 }/>
                    <Route path="/wizard/step2" component={ Step2 }/>
                    <Route path="/wizard/step3" render={ () => (<Step3 addHouse={ this.addHouse }/> )}/>
                </Switch>
            </div>
        
        )

    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Wizard);