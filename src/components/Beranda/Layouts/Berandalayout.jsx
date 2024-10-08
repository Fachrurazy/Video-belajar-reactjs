const berandalayout = (props) => {
    const { children } = props
    return (
        <div className="min-h-screen px-6 py-16 m-auto xl:px-32 bg-body">
            {children}
        </div>
    )
}

export default berandalayout