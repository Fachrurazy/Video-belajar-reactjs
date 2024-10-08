import { Link } from "react-router-dom"

const labellist = (props) => {
    const { children, to } = props
    return (
        <li className="mb-3">
            <Link 
            to={to} 
            className="hover:underline">
            {children}
            </Link>
        </li>
    )
}

export default labellist