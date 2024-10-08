const list = (props) => {
    const { children } = props
    return (
        <ul className="font-medium text-gray-500 max-sm:hidden">
            {children}
        </ul>
    )
}

export default list