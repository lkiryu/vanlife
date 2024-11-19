import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { getVan } from "../../api/api"
import './VanDetails.css'

export default function VanDetails() {
    const [van, setVan] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { id } = useParams()
    const location = useLocation()

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    useEffect(() => {
        async function loadVan(){
            setLoading(true)
            try {
                const data = await getVan(id)
                setVan(data)
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
            <main className='vanDetails'>
                <h1>Loading...</h1>
            </main>
        )
    }

    if (error) {
        return (
            <main className='vanDetails'>
                <h1>There was a error: {error.message}</h1>
            </main>
        )
    }

    return (
        <main className="vanDetails">
            {van && (
                <div className="van-detail">
                    <Link to={`..${search}`} relative="path" className="back-button">&larr;<span>Back to {type.toLowerCase()} vans</span></Link>
                    <img src={van.imageUrl} alt={van.name} />
                    <p className={`van-type ${van.type}`}>{van.type}</p>
                    <h2 className="van-name">{van.name}</h2>
                    <p className="van-price">${van.price}<span className="day">/day</span></p>
                    <p className="van-description">{van.description}</p>
                    <button className="rent-button">Rent this van</button>
                </div>
            )}
        </main>
    )
}