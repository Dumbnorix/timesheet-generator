import {
    CHANGE_CANDIDATE_NAME,
    CHANGE_CLIENT_NAME,
    CHANGE_END_DATE,
    CHANGE_JOB_TITLE,
    CHANGE_START_DATE,
    CHANE_PLACEMENT_TYPE,
    ADD_TIMESHEETS
} from '../constants/action-types'
import moment from 'moment'

const defaultStartDate = moment().local().toDate()
const defaultEndDate = moment().add(1, 'months').local().toDate()
const defaultPlacementType = 1

const initialState = {
    candidateName: undefined,
    clientName: undefined,
    jobTitle: undefined,
    startDate: defaultStartDate,
    endDate: defaultEndDate,
    placementType: defaultPlacementType,
    timesheets: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CANDIDATE_NAME:
            return { ...state, candidateName: action.payload }
        case CHANGE_CLIENT_NAME:
            return { ...state, clientName: action.payload }
        case CHANGE_JOB_TITLE:
            return { ...state, jobTitle: action.payload }
        case CHANGE_START_DATE:
            return { ...state, startDate: action.payload }
        case CHANGE_END_DATE:
            return { ...state, endDate: action.payload }
        case CHANE_PLACEMENT_TYPE:
            return { ...state, placementType: action.payload }
        case ADD_TIMESHEETS:
            return { ...state, timesheets: action.payload }
        default:
            return state;
    }
}
export default rootReducer;