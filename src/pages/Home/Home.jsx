import { Link } from "react-router-dom";
import "./Home.css"

export default function Home(){
    return(
        <main className="home">
            <h1 className="title">You got the travel plans, we got the travel vans.</h1>
            <p className="description">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link className="button" to="/vans">Find your van</Link>
        </main>
    )
}