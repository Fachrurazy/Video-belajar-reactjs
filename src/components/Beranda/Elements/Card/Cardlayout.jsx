const cardlayout = (props) => {
    const { children } = props
    return (
        <div className="container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {children}
        </div>
    )
}

export default cardlayout