import { Link } from 'react-router-dom'
import AboutImage from '../../assets/images/about-image.png'
import './About.css'

export default function About() {
    return (
        <main className="about">
            <img src={AboutImage} alt="man under a starry sky" className='about-image' />
            <div className='about-content'>
                <h1 className='title'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)
                </p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className='about-cta'>
                <p>Your destination is waiting. <br /> Your van is ready.</p>
                <Link className='button' to="/vans">Explore our vans</Link>
            </div>
        </main>
    )
}