export default class FormValidator {
    validateName(name) {
        if (!name) return {error: 'Name is required.'};
        return {}
    }
    validateTitle(title) {
        if (!title) return {error: 'Title is required.'};
        return {}
    }
    isEndDateAfterStartDate(startDate, endDate) {
        if (startDate > endDate) return {error: 'End date needs to be after start date.'};
    }
    isFormComplete(form) {
        if (form.candidateName &&
            form.clientName &&
            form.jobTitle &&
            form.startDate &&
            form.endDate) return true;
        else return false;
    }
}