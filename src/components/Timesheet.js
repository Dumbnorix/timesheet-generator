import React from 'react'

import store from '../store/index'

import TimesheetService from '../service/TimesheetService'

import Table from './Table'
import Details from "./Details"

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

import '../css/timesheet.css'

const timeSheetService = new TimesheetService()

export default class Timesheet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timesheets: []
        }
    }
    componentWillMount() {
        const state = store.getState()
        const input = {
            candidateName: state.candidateName,
            clientName: state.clientName,
            jobTitle: state.jobTitle,
            startDate: state.startDate,
            endDate: state.endDate,
            reportType: state.reportType
        }
        const timesheets = []
        let intervalsBetweenDates
        if (input.reportType === 1) {
            intervalsBetweenDates = timeSheetService.getWeeksBetweenDates(input.startDate, input.endDate)
        } else {
            intervalsBetweenDates = timeSheetService.getMonthsBetweenDates(input.startDate, input.endDate)
        }
        intervalsBetweenDates.forEach(week => {
            const table = {
                'intervalStart': week.startDate,
                'intervalEnd': week.endDate,
                'days': timeSheetService.getDaysBetweenDates(week.startDate, week.endDate)
            }
            timesheets.push(table)
        })
        this.setState({
            input: input,
            timesheets: timesheets
        })
    }
    render() {
        return (
            <div>
                {this.state.timesheets.map((table, i) => {
                    const timesheet =
                        <div className="timesheet" key={i}>
                            <Paper style={{width: '900px', margin: '30px'}}>
                                <Details
                                    candidateName={this.state.input.candidateName}
                                    clientName={this.state.input.clientName}
                                    jobTitle={this.state.input.jobTitle}
                                />
                                <Table week={table}/>
                            </Paper>
                            <Divider/>
                        </div>
                   return timesheet
                })}
            </div>
        )
    }
}