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
    setFieldValueFromState(value) {
        const state = store.getState()
        if (value === CANDIDATE_NAME && state.candidateName) return state.candidateName
        if (value === CLIENT_NAME && state.clientName) return state.clientName
        if (value === JOB_TITLE && state.jobTitle) return state.jobTitle
        return undefined
    }
    render() {
        const defaultValue = this.props.value
        const fieldValue = this.setFieldValueFromState(this.props.value)
        const error = this.props.error
        return <TextField
            style={{paddingLeft: '30px', alignContent: 'center'}}
            defaultValue={fieldValue}
            floatingLabelText={defaultValue}
            errorText={error}
            underlineShow={false}
            onChange={(e, value) => {
                switch(defaultValue) {
                    case CANDIDATE_NAME:
                        store.dispatch(changeCandidateName(value))
                        break
                    case CLIENT_NAME:
                        store.dispatch(changeClientName(value))
                        break
                    case JOB_TITLE:
                        store.dispatch(changeJobTitle(value))
                        break
                    default:
                        console.log(`Error: unknown text field = ${value}`)
                }
            }}
        />
    }
}