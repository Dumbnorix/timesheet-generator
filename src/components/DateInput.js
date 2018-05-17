import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import store from '../store/index'
import {changeEndDate, changeStartDate} from "../actions/index"
import moment from 'moment'

const START_DATE = 'Start Date'
const END_DATE = 'End Date'

export default class DateInput extends React.Component {
    render() {
        const state = store.getState()
        const FIELD = this.props.value
        const defaultStartDate = moment(state.startDate).toDate()
        const defaultEndDate = moment(state.endDate).toDate()
        const minEndDate = moment(state.startDate).add(1, 'days')
        const defaultDate = FIELD === START_DATE ? defaultStartDate : defaultEndDate
        const minDate = FIELD === END_DATE ? minEndDate.toDate() : null
        return <DatePicker
            style={{paddingLeft: '30px', paddingTop: '10px', paddingBottom: '10px', width: '100%'}}
            hintText={this.props.value}
            defaultDate={defaultDate}
            minDate={minDate}
            underlineShow={false}
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