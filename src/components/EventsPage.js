import { useState } from 'react'
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom'
import 'react-calendar/dist/Calendar.css';
import Category from "./Category"
import "./EventsPage.css"
import EventsPost from './EventsPost';

const EventsPage = () => {
    const [value, onChange] = useState(new Date())
    return (
        <div className="eventsPage">
            <div className="eventsPage__header">
                <div className="eventsPage__headerLeft">
                    <Link to="/" >
                        <img src="../image/backArrow.png" alt="back arrow" />
                        <span>BACK</span>
                    </Link>
                </div>
                <div className="eventsPage__headerRight">
                    <img src="../image/search.png" alt="search icons" />
                    <img src="../image/threeDots.png" alt="three dot icons" />
                </div>

            </div>
            <h3>Calender</h3>

            <div className="eventsPage__category">
                <div className="eventsPage__All">
                    <Category title="All" color="#4E444C" />
                    <Category title="Vendor" color="#2A9D8F" />
                    <Category title="Viewing" color="#D58A1B" />
                    <Category title="Weather" color="#C33682" />
                </div>
            </div>
            <div className="calenders">
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>
            <div className='eventsPage__post'>
                <EventsPost
                    imageUrl="../image/payment.png"
                    title="Properrty Viewing"
                    location="54 Authur Road"
                    time="11:00am-12:30pm"
                    color="8px solid #D58A1B"
                />

                <EventsPost
                    imageUrl="../image/certificate.png"
                    title="ECIR Certified rent"
                    location="54 Authur Road"
                    time="11:00am-12:30pm"
                    color="8px solid #2A9D8F"
                />

                <EventsPost
                    imageUrl="../image/payment.png"
                    title="Rent Payment Due"
                    location="54 Authur Road"
                    time="11:00am-12:30pm"
                    color="8px solid #C33682"
                />

                <EventsPost
                    imageUrl="../image/payment.png"
                    title="Rent Payment Due"
                    location="54 Authur Road"
                    time="11:00am-12:30pm"
                    color="8px solid #1CB145"
                />
            </div>

        </div>
    )
}

export default EventsPage
