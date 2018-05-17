import React, {Component} from 'react';
import './App.css';
import Form from './components/Form'
import Timesheet from './components/Timesheet'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Form} />
                    <Route exact path="/timesheet" component={Timesheet} />
                </div>
            </Router>
        );
    }
}

export default App;
