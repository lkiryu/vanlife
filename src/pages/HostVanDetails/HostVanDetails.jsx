import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import { getVan } from '../../api/api'
import './HostVanDetails.css'

export default function HostVanDetails() {
    const [van, setvan] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        async function loadVan() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setvan(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        loadVan()
    }, [id])

    if (loading) {
        return (
            <div className='host-vans-details'>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div className='host-vans-details'>
                <h1>There was a error: {error.message}</h1>
            </div>
        )
    }

    return (
        <div className="host-vans-details">
            <Link
                to=".."
                className="back-button"
                relative="path"
            >&larr; <span>Back to all vans</span>
            </Link>

            <div className="host-vans-details-container">
                <div className="host-vans-overview">
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="host-vans-info">
                        <span className={`host-vans-type ${van.type}`}>{van.type}</span>
                        <h3 className="host-vans-name">{van.name}</h3>
                        <h4 className="host-vans-price">${van.price}<span className="day">/day</span></h4>
                    </div>
                </div>
                <nav className="host-vans-navbar">
                    <NavLink
                        to="."
                        end
                        style={(isActive) => { isActive ? 'active' : null }}>Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={(isActive) => { isActive ? 'active' : null }}>Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={(isActive) => { isActive ? 'active' : null }}>Photos
                    </NavLink>
                </nav>
                <Outlet context={{ van }} />
            </div>
        </div>
    )
}