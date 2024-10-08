const label = (props) => {
    const { children } = props
    return (
        <span className="text-sm text-gray-500 sm:text-center">
            {children}
        </span>
    )
}

export default label