// import { Link } from "react-router-dom"

const buttonauth = (props) => {
    const {
        children = "...", 
        classname = "bg-Button-(Green) hover:bg-green-500 text-white", 
        onClick, 
        type} = props
    return (
        <button 
        type={type}
        onClick={onClick}
        className={`${classname} w-full px-6 py-3 rounded-md mt-6 font-dm-sans`}>
            {children}
        </button>
    )
}

export default buttonauth