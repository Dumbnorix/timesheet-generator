import React from 'react'
import moment from 'moment'

const style = {
    table : {
        border: '1px solid black',
        borderCollapse: 'collapse',
        width: '100%',
        padding: '8px'
    },
    dateColumn: {
        border: '1px solid black',
        borderCollapse: 'collapse',
        width: '60%',
        padding: '8px'
    },
    hoursColumn: {
        border: '1px solid black',
        borderCollapse: 'collapse',
        width: '20%',
        padding: '8px'
    },
    totalHoursColumn: {
        border: '0px solid white',
        width: '60%',
        padding: '5px'
    },
    row: {
        borderBottom: '1px solid black'
    }
}

export default class Table extends React.Component {
    render() {
        return (
            <table style={style.table}>
                <tbody>
                    <tr>
                        <th style={style.dateColumn}><b>Date</b></th>
                        <th style={style.hoursColumn}><b>Work Hours</b></th>
                        <th style={style.hoursColumn}><b>Lunch Hours</b></th>
                    </tr>
                    {this.props.week.days.map((day, i) => {
                        return (
                            <tr key={i}>
                                <td key={i} style={style.dateColumn}>{moment(day).format('LLLL')}</td>
                                <td style={style.hoursColumn}></td>
                                <td style={style.hoursColumn}></td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td style={style.totalHoursColumn}><span style={{float: 'right'}}>Total Hours:</span></td>
                        <td style={style.hoursColumn}></td>
                        <td style={style.hoursColumn}></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}