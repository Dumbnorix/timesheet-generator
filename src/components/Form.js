import React from 'react'

import FormValidator from "../utils/FormValidator"

import TextInput from './TextInput'
import DateInput from "./DateInput"
import DropDownInput from "./DropDownInput"

import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

import store from '../store/index'
import {
    changeEndDate,
    changeStartDate
} from '../actions/index'

import {
    CANDIDATE_NAME,
    CLIENT_NAME,
    JOB_TITLE,
    START_DATE,
    END_DATE,
    PLACEMENT_TYPE,
    PLACEMENT_VALUES
} from '../constants/field-names'

import moment from 'moment'

const formValidator = new FormValidator()

const style = {
    paper: {
        textAlign: 'center',
        width: '900px'
    },
    button: {
        margin: '20px 0px 0px 0px'
    }
}

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            candidateNameError: null,
            clientNameError: null,
            jobTitleError: null
        }
        this.onDateChange = this.onDateChange.bind(this)
    }
    onSubmit = () => {
        const state = store.getState()
        this.setState({
            candidateNameError: formValidator.validateCandidateName(state.candidateName),
            clientNameError: formValidator.validateClientName(state.clientName),
            jobTitleError: formValidator.validateTitle(state.jobTitle)
        }, () => {
            if (!this.state.candidateNameError && !this.state.clientNameError && !this.state.jobTitleError) {
                this.props.history.push('/timesheet')
            }
        })
    }
    onDateChange = (value, field) => {
        switch(field) {
            case START_DATE:
                store.dispatch(changeStartDate(moment(value).local().toDate()))
                this.forceUpdate()
                break
            case END_DATE:
                store.dispatch(changeEndDate(moment(value).local().toDate()))
                this.forceUpdate()
                break
            default:
                console.log(`Error: unknown date field = ${field}`)
        }
    }
    render() {
        const state = store.getState()
        return (
            <div style={{padding: '50px', margin: '0 auto'}}>
                <Paper style={{width: '600px'}} zDepth={2}>
                    <TextInput value={CANDIDATE_NAME} error={this.state.candidateNameError}/><Divider/>
                    <TextInput value={CLIENT_NAME} error={this.state.clientNameError}/><Divider/>
                    <TextInput value={JOB_TITLE} error={this.state.jobTitleError}/><Divider/>
                    <DateInput hint={START_DATE} value={state.startDate} onChange={this.onDateChange} /><Divider/>
                    <DateInput hint={END_DATE} value={state.endDate} onChange={this.onDateChange} /><Divider/>
                    <DropDownInput label={PLACEMENT_TYPE} items={PLACEMENT_VALUES} />
                </Paper>
                <RaisedButton label="Generate Timesheets" style={style.button} onClick={this.onSubmit} primary={true}/>
            </div>
        )
    }
}