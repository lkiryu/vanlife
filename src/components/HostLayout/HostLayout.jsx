import { Outlet, NavLink } from 'react-router-dom'
import './HostLayout.css'

export default function HostLayout() {
    return (
        <main className="host">
            <nav className='host-nav'>
                <NavLink
                    end
                    style={(isActive) => { isActive ? "active" : null }}
                    to=".">Dashboard
                </NavLink>
                <NavLink
                    style={(isActive) => { isActive ? "active" : null }}
                    to="income">Income
                </NavLink>
                <NavLink
                    style={(isActive) => { isActive ? "active" : null }}
                    to="vans">Vans
                </NavLink>
                <NavLink
                    style={(isActive) => { isActive ? "active" : null }}
                    to="reviews">Reviews
                </NavLink>
            </nav>
            <Outlet />
        </main>
    )
}