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
        if (startDate > endDate) return 'End date needs to be after start date.'
        return null
    }

}