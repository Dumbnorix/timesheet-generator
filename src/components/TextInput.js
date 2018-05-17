import React from 'react';
import TextField from 'material-ui/TextField';
import store from '../store/index'
import {changeCandidateName, changeClientName, changeJobTitle} from "../actions/index"

const CANDIDATE_NAME = 'Candidate Name'
const CLIENT_NAME = 'Client Name'
const JOB_TITLE = 'Job Title'

export default class TextInput extends React.Component {
    render() {
        const FIELD = this.props.value
        return <TextField
            hintText={FIELD}
            floatingLabelText={FIELD}
            onChange={(e, value) => {
                switch(FIELD) {
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
                        console.log(`Error: unknown text field = ${FIELD}`)
                }
            }}
        />
    }
}