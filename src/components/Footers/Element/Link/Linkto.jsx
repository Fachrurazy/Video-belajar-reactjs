import { Link } from "react-router-dom"

const linkto = (props) => {
    const { image, to, alt } = props
    return (
        <Link to={to}>
            <img src={image} alt={alt}/>
        </Link>
    )
}

export default linkto