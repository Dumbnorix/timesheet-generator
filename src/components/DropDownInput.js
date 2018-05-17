import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import store from '../store/index'
import {changePlacementType} from "../actions/index"

let state;

export default class DropDownInput extends React.Component {
    handleChange = (event, index, value) => {
        this.setState({value})
        store.dispatch(changePlacementType(value))
    }
    getItems = () => this.props.items.map((item, index) => <MenuItem key={index} value={index+1} primaryText={item} />)
    render() {
        state = store.getState()
        return (
            <div>
                <SelectField
                    floatingLabelText={this.props.label}
                    value={state.placementType}
                    onChange={this.handleChange}
                >
                    {this.getItems()}
                </SelectField>
            </div>
        )
    }
}