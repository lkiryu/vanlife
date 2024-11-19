import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <Link to="/"><img src={logo} alt="logo" className='logo' /></Link>
            <nav>
                <NavLink
                    style={(isActive) => { isActive ? "active" : null }}
                    to="host">Host
                </NavLink>
                <NavLink
                    style={(isActive) => { isActive ? "active" : null }}
                    to="about">About
                </NavLink>
                <NavLink
                    style={(isActive) => { isActive ? "active" : null }}
                    to="vans">Vans
                </NavLink>
            </nav>
        </header>
    )
}