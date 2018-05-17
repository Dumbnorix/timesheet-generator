import React from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class DateInput extends React.Component {
    render() {
        return <DatePicker
            hintText={this.props.value}
        />
    }
}