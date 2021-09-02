import "./Header.css"

const Header = () => {
    return (
        <div className="header" >
            <div className="header__imgs">
                <div className="header__image">
                    <img src="../image/centerArrow.png" alt="center arrow" />
                </div>
                <div className="header__image">
                    <img src="../image/questionMark.png" alt="question" />
                </div>
            </div>
        </div>
    )
}

export default Header
