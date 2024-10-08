const footerlayout = (props) => {
    const { children } = props
    return (
        <footer className="bg-white">
            <div className="p-4 py-6 mx-5 lg:py-10">
                {children}
            </div>
        </footer>
    )
}

export default footerlayout