const index = (props) => {
    const { htmlFor, children } = props
    return (
        <label 
        htmlFor={htmlFor} 
        className="text-sm text-Text-(Dark)/Secondary font-dm-sans">
        {children}
        </label>
    )
}

export default index