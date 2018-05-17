import React from 'react';
import { NavLink } from "react-router-dom";
import TextInput from './TextInput';
import DateInput from "./DateInput"
import DropDownInput from "./DropDownInput"
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from '../store/index'

const style = {
    body: {
      textAlign: 'center'
    },
    button: {
        margin: 12
    }
};

export default class Form extends React.Component {
    render() {
        store.subscribe(() => {
            console.log(store.getState())
        })
        return (
            <MuiThemeProvider>
                <div style={style.body}>
                    <TextInput value='Candidate Name'/>
                    <TextInput value='Client Name'/>
                    <TextInput value='Job Title'/>
                    <DateInput value='Start Date'/><DateInput value='End Date'/>
                    <DropDownInput label='Placement Type' items={['Weekly', 'Monthly']}/>
                    <NavLink exact to='/timesheet' state='TEST'>
                        <RaisedButton label="Generate Timesheets" style={style.button} />
                    </NavLink>
                </div>
            </MuiThemeProvider>
        )
    }
}