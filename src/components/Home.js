import "./Home.css"
import { Route } from 'react-router-dom'
import { Header } from '.'
import EventsPage from './EventsPage'
import DetailPage from "./DetailPage"
import AddEvents from "./AddEvents"


const Home = () => {
    return (
        <div className="home" >
            <Header />
            <Route exact path="/" component={EventsPage} />
            <Route exact path="/events/:id" component={DetailPage} />
            <Route exact path="/addevent" component={AddEvents} />
        </div>
    )
}

export default Home
