import {
    CHANGE_CANDIDATE_NAME,
    CHANE_PLACEMENT_TYPE,
    CHANGE_JOB_TITLE,
    CHANGE_CLIENT_NAME,
    CHANGE_END_DATE,
    CHANGE_START_DATE,
    ADD_TIMESHEETS
} from '../constants/action-types'

export const changeCandidateName = name => ({ type: CHANGE_CANDIDATE_NAME, payload: name })
export const changeClientName = name => ({ type: CHANGE_CLIENT_NAME, payload: name })
export const changeJobTitle = title => ({ type: CHANGE_JOB_TITLE, payload: title })
export const changeStartDate = startDate => ({ type: CHANGE_START_DATE, payload: startDate })
export const changeEndDate = endDate => ({ type: CHANGE_END_DATE, payload: endDate })
export const changePlacementType = type => ({ type: CHANE_PLACEMENT_TYPE, payload: type })
export const addTimesheets = timesheets => ({ type: ADD_TIMESHEETS, payload: timesheets })