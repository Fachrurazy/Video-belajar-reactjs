const divider = (props) => {
    const { children = "..."} = props
    return (
        <div className="flex items-center mt-3">
            <hr className="flex-grow mr-2" />
            <span className="text-center text-Text-label(Dark)">{children}</span>
            <hr className="flex-grow ml-2" />
        </div>
    )
}

export default divider