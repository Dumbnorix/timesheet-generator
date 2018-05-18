import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FormValidator from './FormValidator'
import {
    CANDIDATE_NAME_ERROR,
    CLIENT_NAME_ERROR,
    JOB_TITLE_ERROR
} from '../constants/errors'

Enzyme.configure({ adapter: new Adapter() })

const formValidator = new FormValidator

describe('FormValidator.js', () => {
    it('should accept a valid candidate name', () => {
        const validName = 'Alexander Bush'
        const error = formValidator.validateCandidateName(validName)
        expect(error).toEqual(null)
    })
    it('should require a candidate name', () => {
        const error = formValidator.validateCandidateName()
        expect(error).toEqual(CANDIDATE_NAME_ERROR)
    })
    it('should accept a valid client name', () => {
        const validName = 'Sonovate'
        const error = formValidator.validateClientName(validName)
        expect(error).toEqual(null)
    })
    it('should require a client name', () => {
        const error = formValidator.validateClientName()
        expect(error).toEqual(CLIENT_NAME_ERROR)
    })
    it('should accept a valid job title', () => {
        const validTitle = 'Software Engineer'
        const error = formValidator.validateTitle(validTitle)
        expect(error).toEqual(null)
    })
    it('should require a job title', () => {
        const error = formValidator.validateTitle()
        expect(error).toEqual(JOB_TITLE_ERROR)
    })
})