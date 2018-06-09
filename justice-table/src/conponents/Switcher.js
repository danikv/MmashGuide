import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'
import AddJustice from './AddJustice'
import JusticeTable from './JusticeTable'
import Calander from './Calander'

const Switcher = () => (
    <Switch>
        <Route exact path="/add" component={ AddJustice } />
        <Route exact path="/justicetable" component={ JusticeTable } />
        <Route exact path="/calander" component={ Calander } />
        <Route exact path="/" component={ JusticeTable } />
        <Route component={ NoMatch } />
    </Switch>
)

export default Switcher