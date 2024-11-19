import { useOutletContext } from "react-router-dom"
import './HostVanInfo.css'

export default function HostVanInfo() {
    const { van } = useOutletContext()

    return (
        <div className="host-van-info">
            <h4 className="van-name">Name: <span>{van.name}</span></h4>
            <h4 className="van-type">Category: <span>{van.type}</span></h4>
            <h4 className="van-description">Description: <span>{van.description}</span></h4>
            <h4 className="van-visibility">Visibility: <span>Public</span></h4>
        </div>
    )
}