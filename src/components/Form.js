import React from 'react'
import { Redirect } from "react-router-dom"

import FormValidator from "../utils/FormValidator"

import TextInput from './TextInput'
import DateInput from "./DateInput"
import DropDownInput from "./DropDownInput"

import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

import store from '../store/index'

import {
    CANDIDATE_NAME,
    CLIENT_NAME,
    JOB_TITLE,
    START_DATE,
    END_DATE,
    PLACEMENT_TYPE
} from '../constants/field-names'

const formValidator = new FormValidator()

const style = {
    body: {
        textAlign: 'center',
        width: '900px'
    },
    button: {
        margin: 12
    }
}

export default class Form extends React.Component {
    state = {
        validated: false,
        candidateNameError: null,
        clientNameError: null,
        jobTitleError: null
    }
    onSubmit = () => {
        const state = store.getState()
        this.setState({
            candidateNameError: formValidator.validateName(state.candidateName),
            clientNameError: formValidator.validateName(state.clientName),
            jobTitleError: formValidator.validateTitle(state.jobTitle)
        }, () => {
            if (!this.state.candidateNameError && !this.state.clientNameError && !this.state.jobTitleError) {
                this.setState({
                    validated: true
                })
            }
        })
    }
    onDateChange = () => {
        const state = store.getState()
        const startDate = state.startDate
        const endDate = state.endDate
        console.log(typeof startDate)
        if (formValidator.isEndDateAfterStartDate(startDate, endDate)) {
            // TODO: finish this
        }
    }
    render() {
        if (this.state.validated) {
            return <Redirect to='/timesheet' />
        } else {
            return (
                <div style={style.body}>
                    <Paper zDepth={2}>
                        <TextInput value={CANDIDATE_NAME} error={this.state.candidateNameError}/><Divider/>
                        <TextInput value={CLIENT_NAME} error={this.state.clientNameError}/><Divider/>
                        <TextInput value={JOB_TITLE} error={this.state.jobTitleError}/><Divider/>
                        <DateInput value={START_DATE} onChange={this.onDateChange.bind(this)}/><Divider/>
                        <DateInput value={END_DATE} /><Divider/>
                        <DropDownInput label={PLACEMENT_TYPE} items={['Weekly', 'Monthly']} /><Divider/>
                        <RaisedButton label="Generate Timesheets" style={style.button} onClick={this.onSubmit} />
                    </Paper>
                </div>
            )
        }
    }
}