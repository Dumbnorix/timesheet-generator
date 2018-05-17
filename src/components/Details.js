import React from 'react'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'

const style = {
    list: {
        padding: '32px 32px 0px 32px',
    },
    listItem: {
        fontWeight: 'bold'
    }
}

export default class Details extends React.Component {
    render() {
        const details =
            <Paper>
                <List style={style.list}>
                    <span>Candidate Name:</span><ListItem style={style.listItem} disabled={true} primaryText={this.props.candidateName} />
                    <span>Client Name:</span><ListItem style={style.listItem} disabled={true} primaryText={this.props.clientName} />
                    <span>Job Title:</span><ListItem style={style.listItem} disabled={true} primaryText={this.props.jobTitle} />
                </List>
            </Paper>
        return details
    }
}