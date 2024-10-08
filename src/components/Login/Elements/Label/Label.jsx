const label = (props) => {
    const { htmlFor, children } = props
    return (
        <label 
        htmlFor={htmlFor} 
        className="text-base text-Text-label(Dark) font-dm-sans after:content-['*'] after:text-red-500 after:ml-1">
        {children}
        </label>
    )
}

export default label