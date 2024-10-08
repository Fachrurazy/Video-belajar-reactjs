const labeltabmenu = (props) => {
    const {text} = props
    return(
        <>
        <label
        className="flex py-4 border-b-2 border-transparent rounded-b-sm hover:border-b-red-600 hover:text-red-600 hover:font-semibold">
        {text}
        </label>
        </>
    )
}

export default labeltabmenu