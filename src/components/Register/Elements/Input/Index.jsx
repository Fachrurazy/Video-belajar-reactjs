import Label from "../Label/Label"
import Input from "./Input"

const inputform = (props) => {
    const { label, type, name } = props;
    return (
        <div className="mb-4">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} />
        </div>
    )
}

export default inputform