const adminlayout = (props) => {
    const { children, h1, h2 } = props
    return (
        <div className="flex items-center justify-center min-h-screen bg-body">
    <div className="w-full mx-8 my-16 bg-white border rounded max-md:w-96">
        <div className="flex flex-col items-center justify-center px-6 text-center pt-9 mb-9">
            <p className="font-poppins font-semibold text-3xl text-Text-(Dark)/Primary mb-3">
            {h1}
            </p>
            <p className="font-dm-sans text-base text-Text-(Dark)/Secondary">
            {h2}
            </p>
        </div>
        {children}
    </div>
        </div>
    )
}

export default adminlayout