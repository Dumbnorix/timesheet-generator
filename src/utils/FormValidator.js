import moment from 'moment'

export default class FormValidator {

    validateName(name) {
        if (!name) return 'Name is required.'
        return null
    }

    validateTitle(title) {
        if (!title) return 'Job Title is required.'
        return null
    }

    isEndDateAfterStartDate(startDate, endDate) {
        const startDateUnix = moment(startDate).unix()
        const endDateUnix = moment(endDate).unix()
        console.log(startDateUnix)
        console.log(endDateUnix)
        if (startDate > endDate) return true
        return null
    }

}