import Label from "../../../Login/Elements/Label/Label"

const genderdd = (props) => {
    const { label, name, onChange, value } = props
    return (
        <div className="my-4">
        <Label 
        htmlFor={name}>
        {label}
        </Label>
        <select
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 text-base border rounded-md text-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-400" required>
        <option value="" disabled>Pilih Jenis Kelamin</option>
        <option value="wanita">Wanita</option>
        <option value="laki-laki">Laki-laki</option>
        </select>
        </div>
    )
}

export default genderdd