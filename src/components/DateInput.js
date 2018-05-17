import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import store from '../store/index'
import {changeEndDate, changeStartDate} from "../actions/index"

const START_DATE = 'Start Date'
const END_DATE = 'End Date'

export default class DateInput extends React.Component {
    render() {
        const FIELD = this.props.value
        return <DatePicker
            hintText={this.props.value}
            onChange={(e, value) => {
                switch(FIELD) {
                    case START_DATE:
                        store.dispatch(changeStartDate(value))
                        break
                    case END_DATE:
                        store.dispatch(changeEndDate(value))
                        break
                    default:
                        console.log(`Error: unknown date field = ${FIELD}`)
                }
            }}
        />
    }
}