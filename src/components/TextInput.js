import React from 'react'

import TextField from 'material-ui/TextField'

import store from '../store/index'
import {
    changeCandidateName,
    changeClientName,
    changeJobTitle
} from '../actions/index'

import {
    CANDIDATE_NAME,
    CLIENT_NAME,
    JOB_TITLE
} from '../constants/field-names'

export default class TextInput extends React.Component {
    render() {
        const state = store.getState()
        const defaultValue = this.props.value
        let stateValue;
        switch (this.props.value) {
            case CANDIDATE_NAME:
                if (state.candidateName) stateValue = state.candidateName
                break;
            case CLIENT_NAME:
                if (state.clientName) stateValue = state.clientName
                break;
            case JOB_TITLE:
                if (state.jobTitle) stateValue = state.jobTitle
                break;
            default:
                stateValue = ''
                break;
        }
        const error = this.props.error
        return <TextField
            style={{paddingLeft: '30px', alignContent: 'center'}}
            hintText={defaultValue}
            floatingLabelText={defaultValue}
            errorText={error}
            underlineShow={false}
            onChange={(e, value) => {
                switch(defaultValue) {
                    case CANDIDATE_NAME:
                        store.dispatch(changeCandidateName(value))
                        break;
                    case CLIENT_NAME:
                        store.dispatch(changeClientName(value))
                        break;
                    case JOB_TITLE:
                        store.dispatch(changeJobTitle(value))
                        break;
                    default:
                        console.log(`Error: unknown text field = ${value}`)
                }
            }}
        />
    }
}