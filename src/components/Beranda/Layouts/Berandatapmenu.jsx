const tabmenu = (props) => {
    const { children } = props
    return (
        <div className="flex space-x-8 overflow-x-auto sm:overflow-hidden">
            {children}
        </div>
    )
}

export default tabmenu