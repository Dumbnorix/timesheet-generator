import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Timesheet from './Timesheet'
import store from '../store/index'
import {
    changeCandidateName,
    changeClientName,
    changeJobTitle,
    changeStartDate,
    changeEndDate
} from '../actions/index'
import moment from 'moment'

Enzyme.configure({ adapter: new Adapter() })

let component

beforeEach(() => {
    store.dispatch(changeCandidateName('Alexander'))
    store.dispatch(changeClientName('Sonovate'))
    store.dispatch(changeJobTitle('Software Engineer'))
    store.dispatch(changeStartDate(moment(new Date('2018-05-18:12:00:00')).toISOString()))
    store.dispatch(changeEndDate(moment(new Date('2018-06-18:12:00:00')).toISOString()))
    component = shallow(<Timesheet/>)
})

describe('getIntervals()', () => {
    it('should return weekly intervals given a report type of 1', () => {
        const intervals = component.instance().getIntervals(1)
        expect(intervals.length).toEqual(6)
        expect(intervals[0].startDate).toEqual(new Date('2018-05-18T11:00:00.000Z'))
        expect(intervals[5].endDate).toEqual(new Date('2018-06-18T22:59:59.999Z'))
    })
    it('should return monthly intervals given a report type of 2', () => {
        const intervals = component.instance().getIntervals(2)
        expect(intervals.length).toEqual(2)
        expect(intervals[0].startDate).toEqual(new Date('2018-05-18T22:59:59.999Z'))
        expect(intervals[1].endDate).toEqual(new Date('2018-06-18T22:59:59.999Z'))
    })
})