import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getVans } from '../../api/api'
import './HostVans.css'

export default function HostVans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    if (loading) {
        return (
            <div className='host-vans'>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div className='host-vans'>
                <h1>There was a error: {error.message}</h1>
            </div>
        )
    }

    const userVans = vans.filter(van => van.userId === "123")

    const userVansElements = userVans.map(van =>
        <div className="host-van-single" key={van.id}>
            <Link to={van.id} >
                <img src={van.imageUrl} alt={van.image} />
                <div className="host-van-info">
                    <h3 className="host-van-name">{van.name}</h3>
                    <p className="host-van-price">${van.price}/day</p>
                </div>
            </Link>
        </div>
    )

    return (
        <div className="host-vans">
            <h1 className="host-vans-title">Your listed Vans</h1>
            <div className="host-vans-list">
                {userVansElements}
            </div>
        </div>
    )
}