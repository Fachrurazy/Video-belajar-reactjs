import Label from "../Label/Label"
import Input from "./Input"

const inputform = (props) => {
    const { label, type, name, onChange, value } = props;
    return (
        <div className="mb-4">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} onChange={onChange} value={value} />
        </div>
    )
}

export default inputform