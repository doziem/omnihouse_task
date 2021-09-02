import React from 'react'
import "./SideBar.css"
import Card from "../UI/Card"

const SideBar = () => {
    return (
        <div className="sideBar" >
            <div className="sideBar__avater">
                <img src="../image/avater.png" alt="avater" />
            </div>
            <Card className="sideBar__check">
                <img src="../image/omnicheck.png" alt="avater" />
            </Card>
            <p>OmniCheck</p>

            <Card className="sideBar__contract">
                <img src="../image/contractBuilder.png" alt="avater" />
            </Card>
            <p>Contract Builder</p>

            <Card className="sideBar__news">
                <img src="../image/omniNews.png" alt="avater" />
            </Card>
            <p>OmniNews</p>
            <Card className="sideBar__icons">
                <img src="../image/omniScan.png" alt="avater" />
            </Card>
            <p>OmniScan</p>
            <Card className="sideBar__icons calender">
                <img src="../image/calender.png" alt="avater" />
            </Card>
            <p>Calender</p>

            <Card className="sideBar__notification">
                <img src="../image/notification.png" alt="avater" />
            </Card>
        </div>
    )
}

export default SideBar
