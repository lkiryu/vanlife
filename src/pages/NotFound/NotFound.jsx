import { Link } from "react-router-dom";
import './NotFound.css'

export default function NotFound(){
    return(
        <main className="not-found">
            <h1 className="title">Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="return-button">Return to home</Link>
        </main>
    )
}