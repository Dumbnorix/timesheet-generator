import React from 'react'

import store from '../store/index'

import TimesheetService from '../service/TimesheetService'

import Table from './Table'
import Details from './Details'

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

import '../css/timesheet.css'
import {addTimesheets} from '../actions/index'

const timeSheetService = new TimesheetService()

let state;

export default class Timesheet extends React.Component {
    getIntervals(placementType) {
        if (placementType === 1) {
            return timeSheetService.getWeeksBetweenDates(state.startDate, state.endDate)
        } else if (placementType === 2) {
            return timeSheetService.getMonthsBetweenDates(state.startDate, state.endDate)
        } else {
            console.error(`Error: unknown Placement Type: ${state.placementType}`)
        }
    }
    createTimesheets(intervals) {
        const timesheets = intervals.map(interval => {
            return {
                'intervalStart': interval.startDate,
                'intervalEnd': interval.endDate,
                'days': timeSheetService.getDaysBetweenDates(interval.startDate, interval.endDate)
            }
        })
        return timesheets
    }
    componentWillMount() {
        state = store.getState()
        if (!state.candidateName || !state.clientName || !state.jobTitle) this.props.history.push('/')
        const intervalsBetweenDates = this.getIntervals(state.placementType)
        const timesheets = this.createTimesheets(intervalsBetweenDates)
        store.dispatch(addTimesheets(timesheets))
        this.forceUpdate()
    }
    render() {
        state = store.getState()
        return (
            <div>
                {state.timesheets.map((timesheet, i) => {
                    return (
                        <div className='timesheet' key={i}>
                            <Paper style={{width: '900px', margin: '30px'}}>
                                <Details
                                    candidateName={state.candidateName}
                                    clientName={state.clientName}
                                    jobTitle={state.jobTitle}
                                />
                                <Table interval={timesheet}/>
                            </Paper>
                            <Divider/>
                        </div>
                    )
                })}
            </div>
        )
    }
}