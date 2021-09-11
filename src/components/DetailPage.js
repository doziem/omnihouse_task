import React from 'react'
import { Link } from 'react-router-dom'

const DetailPage = () => {

    return (
        <div className="eventsPage">
            <div className="eventsPage__header">
                <div className="eventsPage__headerLeft">
                    <Link to="/">
                        <img src="../image/backArrow.png" alt="back arrow" />
                        <span>BACK</span>
                    </Link>
                </div>
                <div className="eventsPage__headerRight">
                    <p>edit</p>
                </div>

            </div>
            <h3>Type of Events</h3>
            <div className='eventsPage__tenant'>


            </div>
        </div>
    )
}

export default DetailPage
