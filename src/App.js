import React, {Component} from 'react';
import './App.css';
import Form from './components/Form'
import Timesheet from './components/Timesheet'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {
    state = {
        candidateName: undefined,
        clientName: undefined,
        jobTitle: undefined,
        startDate: undefined,
        endDate: undefined
    }
    validateName(name) {
        if (!name) return {error: 'Name is required.'};
        return {}
    }
    validateTitle(title) {
        if (!title) return {error: 'Title is required.'};
        return {}
    }
    isEndDateAfterStartDate(startDate, endDate) {
        if (startDate > endDate) return {error: 'End date needs to be after start date.'};
    }
    isFormComplete() {
        if (this.state.candidateName &&
            this.state.clientName &&
            this.state.jobTitle &&
            this.state.startDate &&
            this.state.endDate) return true;
        else return false;
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Form}/>
                    <Route exact path="/timesheet" component={Timesheet} something='foo'/>
                </div>
            </Router>
        );
    }
}

export default App;
