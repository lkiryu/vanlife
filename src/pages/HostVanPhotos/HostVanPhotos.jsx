import { useOutletContext } from "react-router-dom"
import './HostVanPhotos.css'

export default function HostVanPhotos() {
    const { van } = useOutletContext()

    return (
        <div className="host-van-photos">
            <img src={van.imageUrl} alt={van.name} className="host-van-photo"/>
        </div>
    )
}