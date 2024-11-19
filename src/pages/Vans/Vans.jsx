import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api/api'
import './Vans.css'

export default function Vans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()

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
            <main className='vans'>
                <h1>Loading...</h1>
            </main>
        )
    }

    if (error) {
        return (
            <main className='vans'>
                <h1>There was a error: {error.message}</h1>
            </main>
        )
    }

    const typeFilter = searchParams.get('type')

    const displayedElements = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElement = displayedElements.map((van) => (
        <div key={van.id} className='van'>
            <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
                <img src={van.imageUrl} alt={van.name} className='van-image' />
                <div className='van-info'>
                    <h3 className='van-name'>{van.name}</h3>
                    <p className='van-price'>${van.price}<span className='day'>/day</span></p>
                </div>
                <span className={`van-type ${van.type}`}>{van.type}</span>
            </Link>
        </div>
    ))

    return (
        <main className="vans">
            <h1 className="title">Explore our van options</h1>
            <div className='filter-buttons'>
                <button onClick={()=> setSearchParams({type: "Simple"})} className={`button Simple ${typeFilter === 'Simple' ? "selected" : null}`}>Simple</button>
                <button onClick={()=> setSearchParams({type: "Rugged"})} className={`button Rugged ${typeFilter === 'Rugged' ? "selected" : null}`}>Rugged</button>
                <button onClick={()=> setSearchParams({type: "Luxury"})} className={`button Luxury ${typeFilter === 'Luxury' ? "selected" : null}`}>Luxury</button>
                <button onClick={()=> setSearchParams({})} className='clear-filters'>Clear Filters</button>
            </div>
            <div className="vans-list">
                {vanElement}
            </div>
        </main>
    )
}