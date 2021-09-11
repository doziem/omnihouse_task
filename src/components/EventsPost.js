import './EventsPost.css'

const EventsPost = ({ imageUrl, title, location, time, date, color }) => {
    return (
        <div className="eventsPost" style={{ borderLeft: color }} >
            <img src={imageUrl} alt="event-pics" />
            <div className="eventsPost__title">
                <p>{title} </p>
                <span>{location}: {time} </span>
            </div>
            <div className="eventsPost__profile">
                <img src="../image/profile1.jpg" alt="" />
                <img src="../image/profile2.jpg" alt="" />
            </div>
        </div>
    )
}

export default EventsPost
