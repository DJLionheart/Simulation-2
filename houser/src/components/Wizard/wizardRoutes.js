import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default (
<Switch>
    <Route exact path="/wizard/" component={ Step1 }/>
    <Route path="/wizard/step2" component={ Step2 }/>
    <Route path="/wizard/step3" component={ Step3 }/>
</Switch>
)