import React from 'react'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import {
    CANDIDATE_NAME,
    CLIENT_NAME,
    JOB_TITLE
} from '../constants/field-names'

const style = {
    list: {
        padding: '10px 10px 10px 10px',
    },
    listItem: {
        fontWeight: 'bold',
        margin: 10,
        padding: 0
    }
}

export default class Details extends React.Component {
    render() {
        const details =
            <Paper>
                <List style={style.list}>
                    <ListItem style={style.listItem} disabled={true} primaryText={CANDIDATE_NAME} secondaryText={this.props.candidateName} />
                    <ListItem style={style.listItem} disabled={true} primaryText={CLIENT_NAME} secondaryText={this.props.clientName} />
                    <ListItem style={style.listItem} disabled={true} primaryText={JOB_TITLE} secondaryText={this.props.jobTitle} />
                </List>
            </Paper>
        return details
    }
}