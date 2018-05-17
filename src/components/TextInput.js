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
        const defaultValue = this.props.value
        const error = this.props.error
        return <TextField
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