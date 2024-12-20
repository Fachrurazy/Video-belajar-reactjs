const input = (props) => {
    const { type, name, onChange, value } = props
    return (
        <input
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            className="text-sm border w-full px-3 py-2 text-Text-label(Dark) placeholder: opacity-80 rounded-md focus:outline-none 
            focus:ring-1 focus:ring-slate-400 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500"
            required/>
    )
}

export default input