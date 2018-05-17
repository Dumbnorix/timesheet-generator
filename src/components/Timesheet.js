import React from 'react'
import { browserHistory } from 'react-router-dom';

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
    componentWillMount() {
        state = store.getState()
        const timesheets = []
        let intervalsBetweenDates
        if (state.placementType === 1) {
            intervalsBetweenDates = timeSheetService.getWeeksBetweenDates(state.startDate, state.endDate)
        } else if (state.placementType === 2) {
            intervalsBetweenDates = timeSheetService.getMonthsBetweenDates(state.startDate, state.endDate)
        } else {
            console.error(`Error: unknown Placement Type: ${state.placementType}`)
        }
        intervalsBetweenDates.forEach(interval => {
            const timesheet = {
                'intervalStart': interval.startDate,
                'intervalEnd': interval.endDate,
                'days': timeSheetService.getDaysBetweenDates(interval.startDate, interval.endDate)
            }
            timesheets.push(timesheet)
        })
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