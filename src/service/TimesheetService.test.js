import TimesheetService from './TimesheetService'
import moment from 'moment'

const timesheetService = new TimesheetService()

describe('TimesheetService.js', () => {

    describe('getDaysBetweenDates()', () => {
        it('should return number of days between 2 dates', () => {
            const startDate = moment()
            const endDate = moment().add(14, 'days')
            const days = timesheetService.getDaysBetweenDates(startDate, endDate)
            expect(days.length).toEqual(14)
        })
    })
    describe('getWeeksBetweenDates()', () => {
        it('should return weeks between 2 dates where the first date is a monday', () => {
            const startDate = moment("2017-01-02T00:00:00") // provided in specs
            const endDate = moment("2017-02-05T00:00:00")
            const weeks = timesheetService.getWeeksBetweenDates(startDate, endDate)
            expect(weeks.length).toEqual(5)
            weeks.forEach((week) => {
                expect(Math.abs(moment(week['startDate']).diff(moment(week['endDate']), 'days'))).toEqual(6)
            })

        })
        it('should return weeks between 2 dates where the first date isn\'t a monday', () => {
            const startDate = moment("2017-01-04T00:00:00") // provided in specs
            const endDate = moment("2017-01-12T00:00:00")
            const weeks = timesheetService.getWeeksBetweenDates(startDate, endDate)
            expect(weeks.length).toEqual(2)
            expect(Math.abs(moment(weeks[0]['startDate']).diff(moment(weeks[0]['endDate']), 'days'))).toEqual(4)
            expect(Math.abs(moment(weeks[1]['startDate']).diff(moment(weeks[1]['endDate']), 'days'))).toEqual(3)
        })
        // use case captured: start date is a sunday (end of the week)
        it('should return weeks between 2 dates where the first date isn\'t a monday', () => {
            const startDate = moment("2017-01-01T00:00:00")
            const endDate = moment("2017-01-15T00:00:00")
            const weeks = timesheetService.getWeeksBetweenDates(startDate, endDate)
            expect(weeks.length).toEqual(3)
            expect(Math.abs(moment(weeks[0]['startDate']).diff(moment(weeks[0]['endDate']), 'days'))).toEqual(0)
            expect(Math.abs(moment(weeks[1]['startDate']).diff(moment(weeks[1]['endDate']), 'days'))).toEqual(6)
            expect(Math.abs(moment(weeks[2]['startDate']).diff(moment(weeks[2]['endDate']), 'days'))).toEqual(6)
        })
    })

    describe('getMonthsBetweenDates()', () => {
        it('should return the dates object for each month given a valid start and end date', async () => {
            const startDate = moment("2017-01-04T00:00:00") // provided in specs
            const endDate = moment("2017-05-12T00:00:00")
            const months = await timesheetService.getMonths(startDate, endDate)
            expect(months.length).toEqual(5)
        })
        // use case captured: start date is the end of a month
        it('should return the dates object for each month given a valid start and end date', async () => {
            const startDate = moment("2017-01-30T00:00:00")
            const endDate = moment("2017-05-12T00:00:00")
            const months = await timesheetService.getMonths(startDate, endDate)
            expect(months.length).toEqual(5)
        })
    })

})