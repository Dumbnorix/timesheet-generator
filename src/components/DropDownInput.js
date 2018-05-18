import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import store from '../store/index'
import {changePlacementType} from '../actions/index'

export default class DropDownInput extends React.Component {
    handleChange = (event, index, value) => {
        this.setState({value})
        store.dispatch(changePlacementType(value))
    }
    getItems = () => this.props.items.map((item, index) => <MenuItem key={index} value={index+1} primaryText={item} />)
    render() {
        const state = store.getState()
        return (
            <div>
                <SelectField
                    style={{paddingLeft: '30px'}}
                    floatingLabelText={this.props.label}
                    value={state.placementType}
                    underlineShow={false}
                    onChange={this.handleChange}
                >
                    {this.getItems()}
                </SelectField>
            </div>
        )
    }
}