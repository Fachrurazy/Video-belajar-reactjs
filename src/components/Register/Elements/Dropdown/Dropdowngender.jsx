import Label from "../../../Login/Elements/Label/Label"

const genderdd = (props) => {
    const { label, name } = props
    return (
        <div className="my-4">
        <Label 
        htmlFor={name}>
        {label}
        </Label>
        <select 
        className="block w-full px-3 py-2 text-base border rounded-md text-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-400">
        <option value={""} disabled selected hidden>Pilih Jenis Kelamin</option>
        <option value={"wanita"}>Wanita</option>
        <option value={"laki-laki"}>Laki-laki</option>
        </select>
        </div>
    )
}

export default genderdd