import "./ContractBuilder.css"
import { Link } from "react-router-dom"
import Title from "./Title"

const ContractBuilder = () => {
    return (
        <div className="contractBuilder" >
            <div className="contractBuilder__header">
                <h5>Contract Builder</h5>
            </div>
            <div className="contractBuilder__events">
                <img src="../image/plus.png" alt="plus sign" />
                <div className="contractBuilder__eventsAdd">
                    <Link to="/addevent">
                        <span>Create new event</span>
                        <img className="img__down" src="../image/ellipse.png" alt="ellipse" />
                    </Link>
                </div>
            </div>
            <div className="contractBuilder__events__p">
                <span className='active' /><Title title="Active events" />
            </div>
            <div className="contractBuilder__events__p">
                <span className="old" /><Title title="Old events" />
            </div>
            <div className="contractBuilder__events__p">
                <span className="draft" /><Title title="Draft events" />
            </div>
        </div>
    )
}

export default ContractBuilder
