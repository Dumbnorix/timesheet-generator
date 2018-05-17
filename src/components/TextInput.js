import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextInput extends React.Component {
    render() {
        return <TextField
            hintText={this.props.value}
            floatingLabelText={this.props.value}
        />
    }
}