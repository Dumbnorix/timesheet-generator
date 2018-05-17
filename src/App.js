import React, {Component} from 'react';
import './App.css';
import Form from './components/Form'
import Timesheet from './components/Timesheet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Route exact path="/" component={Form} />
                        <Route exact path="/timesheet" component={Timesheet} />
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
