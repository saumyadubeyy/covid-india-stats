import React from 'react'
import '../css/Header.css'
import moment from 'moment'


const Header = () => {
    
    const date = moment(new Date()).format('DD MMMM YYYY')
    const time = moment().format("h:mm A")

    return (
            <div className='header'>
                <h1>COVID INDIA STATS
                    <br />
                    <span className='date'>{date}, {time}</span>
                </h1>
            </div>
    )
}

export default Header
