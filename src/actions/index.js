import {CHANGE_CANDIDATE_NAME} from "../constants/action-types"
import {CHANGE_CLIENT_NAME} from "../constants/action-types"
import {CHANGE_JOB_TITLE} from "../constants/action-types"
import {CHANGE_STARTDATE} from "../constants/action-types"
import {CHANGE_ENDDATE} from "../constants/action-types"

export const changeCandidateName = name => ({ type: CHANGE_CANDIDATE_NAME, payload: name });
export const changeClientName = name => ({ type: CHANGE_CLIENT_NAME, payload: name });
export const changeJobTitle = title => ({ type: CHANGE_JOB_TITLE, payload: title });
export const changeStartDate = startDate => ({ type: CHANGE_STARTDATE, payload: startDate });
export const changeEndDate = endDate => ({ type: CHANGE_ENDDATE, payload: endDate });