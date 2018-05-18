import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormValidator from './FormValidator'

Enzyme.configure({ adapter: new Adapter() });

const formValidator = new FormValidator

describe('FormValidator.js', () => {
    it('should accept a valid name', () => {
        const validName = 'Alexander Bush';
        const error = formValidator.validateName(validName);
        expect(error).toEqual(null);
    })
    it('should require a name', () => {
        const error = formValidator.validateName();
        expect(error).toEqual('Name is required.')
    })
    it('should accept a valid job title', () => {
        const validTitle = 'Software Engineer';
        const error = formValidator.validateTitle(validTitle);
        expect(error).toEqual(null);
    })
    it('should require a job title', () => {
        const error = formValidator.validateTitle();
        expect(error).toEqual('Job Title is required.')
    })
    it('should reject an end date that is before the start date', () => {
        const startDate = new Date(),
            endDate = new Date();
        startDate.setHours(endDate.getHours()+2);
        const error = formValidator.isEndDateAfterStartDate(startDate, endDate);
        expect(error).toBeTruthy()
    })
})