import { Link } from 'react-router-dom'

const AddEvents = () => {
    return (
        <div className="eventsPage">
            <div className="eventsPage__header">
                <div className="eventsPage__headerLeft">
                    <Link to="/">
                        <img src="../image/backArrow.png" alt="back arrow" />
                        <span>BACK</span>
                    </Link>
                </div>
            </div>
            <h3>New Events</h3>
            <form className='eventsPage__newEvent'>
                <select >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div className="addevents__input">
                    <img src="../image/title.png" alt="title logo" />
                    <input type="text" placeholder="Event Title" />
                </div>

                <div className="addevents__input">
                    <img src="../image/location.png" alt="location logo" />
                    <input type="text" placeholder="Location" />
                </div>

                <div className="addevents__input">
                    <img src="../image/avater.png" alt="avater logo" />
                    <input type="text" placeholder="people" />
                </div>
                <div className="addevents__input">
                    <img src="../image/time.png" alt="time logo" />
                    <input type="text" placeholder="Time and Date" />
                </div>
                <textarea type="text"></textarea>
                <butto>ADD EVENT</butto>

                <footer >
                    <img src="../image/search.png" alt="seaech Icon" />
                    <img src="../image/message.png" alt="seaech Icon" />
                    <img src="../image/notification.png" alt="seaech Icon" />
                    <img src="../image/time.png" alt="seaech Icon" />
                    <img src="../image/addSign.png" alt="seaech Icon" />

                </footer>
            </form>
        </div>
    )
}

export default AddEvents
