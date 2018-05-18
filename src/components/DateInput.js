import React from 'react'

import DatePicker from 'material-ui/DatePicker'

import store from '../store/index'
import {
    START_DATE,
    END_DATE
} from '../constants/field-names'

import moment from 'moment'

export default class DateInput extends React.Component {
    render() {
        const state = store.getState()
        const field = this.props.hint
        const value = moment(this.props.value).toDate()
        const minEndDate = moment(state.startDate).add(1, 'days')
        const maxStartDate = moment(state.endDate).subtract(1, 'days')
        const minDate = field === END_DATE ? minEndDate.toDate() : null
        const maxDate = field === START_DATE ? maxStartDate.toDate() : null
        return <DatePicker
            style={{paddingLeft: '30px', paddingTop: '10px', paddingBottom: '10px', width: '100%'}}
            hintText={field}
            minDate={minDate}
            maxDate={maxDate}
            underlineShow={false}
            value={value}
            onChange={(e, value) => this.props.onChange(value, field)}
        />
    }
}