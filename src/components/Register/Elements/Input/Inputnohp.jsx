import Input from "./Input"
import Label from "../Label/Label"
import Buttonflag from "../Button/Buttonflag"
const inputnohp = (props) => {
    const { type, name, label, onChange, value } = props
    return (
        <>
        <Label htmlFor={name}>{label}</Label>
        <div className="flex mb-4">
            <Buttonflag/>
            <Input type={type} name={name} onChange={onChange} value={value} />
        </div>
        </>   
    )
}

export default inputnohp