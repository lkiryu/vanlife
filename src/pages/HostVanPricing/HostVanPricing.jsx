import { useOutletContext } from "react-router-dom"
import './HostVanPrincing.css'

export default function HostVanPricing() {
    const { van } = useOutletContext()

    return (
        <div className="host-van-pricing">
            <h2 className="price">${van.price}<span className="day">/day</span></h2>
        </div>
    )
}