import moment from 'moment'

export default class TimesheetService {

    getDaysBetweenDates = (startDate, endDate) => {
        const start = moment(startDate).endOf('day')
        const end = moment(endDate).endOf('day')
        const days = []
        days.push(start.toISOString())
        const current = moment(start).add(1, 'days')
        while (current<=end) {
            if(current.unix() === end.unix()) {
                days.push(current.toISOString())
                break;
            } else {
                days.push(current.toISOString())
                current.add(1, 'days')
                continue;
            }
        }
        return days
    }

    getWeeksBetweenDates = (startDate, endDate) => {
        const start = moment(startDate)
        const end = moment(endDate)
        const weeks = []
        let week = {}
        week['startDate'] = start.toISOString()
        if (start.isoWeekday() === 7) {
            week['endDate'] = start.toISOString()
            weeks.push(week)
            week = {}
        }
        const current = moment(startDate).add(1, 'days')
        while(current<=end) {
            if (current.unix() === end.unix()) {
                week['endDate'] = current.toISOString()
                weeks.push(week)
                break;
            }
            else if (current.isoWeekday() === 1) {
                if (week['startDate']) {
                    week['endDate'] = current
                    current.add(1, 'days')
                    weeks.push(week)
                    week = {}
                    week['startDate'] = current.toISOString()
                } else {
                    week['startDate'] = current.toISOString()
                    current.add(1, 'days')
                }

                continue
            }
            else if (current.isoWeekday() === 7) {
                week['endDate'] = current.toISOString()
                weeks.push(week)
                week = {}
                current.add(1, 'days')
                continue
            }
            else {
                current.add(1, 'days')
                continue
            }
        }
        return weeks
    }

    getMonthsBetweenDates = (startDate, endDate) => {
        const start = moment(startDate).endOf('day')
        const end = moment(endDate).endOf('day')
        const months = []
        let month = {}
        month.startDate = start.toISOString()
        const lastDayOfMonth = moment(startDate).endOf('month')
        if (start.unix() === lastDayOfMonth.unix()) {
            month.endDate = lastDayOfMonth.toISOString()
            months.push(month)
            month = {}
        }
        const currentDay = moment(startDate).add(1, 'days').endOf('day')
        while(currentDay <= end) {
            if (currentDay.unix() === end.unix()) {
                month.endDate = currentDay.toISOString()
                months.push(month)
                break;
            } else if (currentDay.unix() === lastDayOfMonth.unix()) {
                month.endDate = currentDay.toISOString()
                months.push(month)
                month = {}
                currentDay.add(1, 'days').endOf('day')
                lastDayOfMonth.add(1, 'days').endOf('month')
                month.startDate = currentDay.toISOString()
            } else {
                currentDay.add(1, 'days').endOf('day')
            }
        }
        return months
    }

    async getWeeks(startDate, endDate) {
        const weeks = this.getWeeksBetweenDates(startDate, endDate)
        return weeks
    }

    async getMonths(startDate, endDate) {
        const months = this.getMonthsBetweenDates(startDate, endDate)
        return months

    }

    async parseDataForTimesheet(data) {
        console.log(data.placementType)
        const rows = data.placementType === 1 ?
                await this.getWeeks(data.startDate, data.endDate) :
                await this.getMonths(data.startDate, data.endDate)
        console.log(rows)
        const array = []
        rows.forEach(row => {
            array.push(row)
        })
        return array
    }

}