import {
    CANDIDATE_NAME_ERROR,
    CLIENT_NAME_ERROR,
    JOB_TITLE_ERROR
} from '../constants/errors'

export default class FormValidator {

    validateCandidateName(name) {
        if (!name) return CANDIDATE_NAME_ERROR
        else return null
    }

    validateClientName(name) {
        if (!name) return CLIENT_NAME_ERROR
        else return null
    }

    validateTitle(title) {
        if (!title) return JOB_TITLE_ERROR
        else return null
    }

}