import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import store from '../store/index'
import {changeReportType} from "../actions/index"

export default class DropDownInput extends React.Component {
    state = {
        value: 1,
    }
    handleChange = (event, index, value) => {
        this.setState({value})
        store.dispatch(changeReportType(value))
    }
    getItems = () => this.props.items.map((item, index) => <MenuItem key={index} value={index+1} primaryText={item} />)
    render() {
        return (
            <div>
                <SelectField
                    floatingLabelText={this.props.label}
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    {this.getItems()}
                </SelectField>
            </div>
        )
    }
}