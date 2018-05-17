import {
    CHANGE_CANDIDATE_NAME,
    CHANGE_CLIENT_NAME,
    CHANGE_END_DATE,
    CHANGE_JOB_TITLE,
    CHANGE_START_DATE,
    CHANGE_REPORT_TYPE
} from "../constants/action-types"

const initialState = {
    candidateName: undefined,
    clientName: undefined,
    jobTitle: undefined,
    startDate: undefined,
    endDate: undefined
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
        case CHANGE_REPORT_TYPE:
            return { ...state, reportType: action.payload }
        default:
            return state;
    }
}
export default rootReducer;