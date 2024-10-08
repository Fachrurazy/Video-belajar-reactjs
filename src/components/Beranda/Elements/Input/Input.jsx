const input = (props) => {
    const { type, name, placeholder } = props
    return (
        <input 
        className=" sm:w-1/2 max-sm:w-full border text-slate-500 px-6 py-3 rounded-xl mt-2 font-[DM Sans]"
        type={type} 
        name={name} 
        placeholder={placeholder} />
    )
}

export default input