import { Link } from "react-router-dom"

const labelforgetpass = (props) => {
    const {children = "..."} = props
    return(
        <div className="text-sm mt-4 flex flex-row-reverse text-Text-(Dark)/Primary font-medium font-dm-sans">
            <Link to="#">{children}</Link>
        </div>
    )
}

export default labelforgetpass