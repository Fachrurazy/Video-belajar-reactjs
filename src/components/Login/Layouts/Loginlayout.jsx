const loginlayout = (props) => {
    const { children, h1, h2 } = props
    return (
        <div className="flex justify-center bg-body min-h-screen items-center">
    <div className="w-590 max-md:w-96 my-16 mx-8 bg-white border rounded">
        <div className="flex flex-col justify-center items-center pt-9 mb-9 px-6 text-center">
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

export default loginlayout