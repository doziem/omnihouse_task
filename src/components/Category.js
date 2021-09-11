import "./Category.css"


const Category = ({ title, color }) => {
    return (
        <div className="category" style={{ backgroundColor: color }} >
            <p>{title} </p>
        </div>
    )
}

export default Category
