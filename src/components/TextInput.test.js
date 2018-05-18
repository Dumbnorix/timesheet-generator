import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TextInput from './TextInput'
import store from '../store/index'
import {
    changeCandidateName,
    changeClientName,
    changeJobTitle
} from '../actions/index'
import {
    CANDIDATE_NAME,
    CLIENT_NAME,
    JOB_TITLE
} from '../constants/field-names'

Enzyme.configure({ adapter: new Adapter() })

let component

beforeEach(() => {
    component = shallow(<TextInput/>)
})

describe('setFieldValueFromState()', () => {
    it('set the candidate name if the field is candidate and their is a candidate name in state', () => {
        const candidateName = 'Alexander Bush'
        store.dispatch(changeCandidateName(candidateName))
        const fieldValue = component.instance().setFieldValueFromState(CANDIDATE_NAME)
        expect(fieldValue).toEqual(candidateName)
    })
    it('set the client name if the field is client and their is a client name in state', () => {
        const clientName = 'Sonovate'
        store.dispatch(changeClientName(clientName))
        const fieldValue = component.instance().setFieldValueFromState(CLIENT_NAME)
        expect(fieldValue).toEqual(clientName)
    })
    it('set the job title if the field is title and their is a job title in state', () => {
        const jobTitle = 'Software Engineer'
        store.dispatch(changeJobTitle(jobTitle))
        const fieldValue = component.instance().setFieldValueFromState(JOB_TITLE)
        expect(fieldValue).toEqual(jobTitle)
    })
    it('set no value if there is nothing in state', () => {
        store.dispatch(changeCandidateName(undefined))
        store.dispatch(changeClientName(undefined))
        store.dispatch(changeJobTitle(undefined))
        const candidateFieldValue = component.instance().setFieldValueFromState(CANDIDATE_NAME)
        const clientFieldValue = component.instance().setFieldValueFromState(CLIENT_NAME)
        const jobTitleFieldValue = component.instance().setFieldValueFromState(JOB_TITLE)
        expect(candidateFieldValue).toEqual()
        expect(clientFieldValue).toEqual()
        expect(jobTitleFieldValue).toEqual()
    })
})