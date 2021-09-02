import React from 'react'
import "./SideBar.css"

const SideBar = () => {
    return (
        <div className="sideBar" >
            <div className="sideBar__avater">
                <img src="../image/avater.png" alt="avater" />
            </div>
            <div className="sideBar__icons">
                <img src="../image/omnicheck.png" alt="avater" />
                <p>OmniCheck</p>
            </div>

            <div className="sideBar__icons">
                <img src="../image/contractBuilder.png" alt="avater" />
                <p>Contract Builder</p>
            </div>

            <div className="sideBar__icons">
                <img src="../image/omniNews.png" alt="avater" />
                <p>OmniNews</p>
            </div>
            <div className="sideBar__icons">
                <img src="../image/omniScan.png" alt="avater" />
                <p>OmniScan</p>
            </div>
            <div className="sideBar__icons">
                <img src="../image/calender.png" alt="avater" />
                <p>Calender</p>
            </div>

            <div className="sideBar__icons">
                <img src="../image/notification.png" alt="avater" />

            </div>
        </div>
    )
}

export default SideBar
