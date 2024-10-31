import Input from "./Input"
import Label from "../Label/Label"
const inputpass = (props) => {
    const { type, name, label, onChange, value } = props
    return (
        <div className="relative mb-4">
            <Label 
            htmlFor={name}>
            {label}
            </Label>
            <Input 
            type={type} 
            name={name}
            onChange={onChange}
            value={value} />
            <svg className="absolute end-2.5 bottom-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.83 9.5L15 12.66V12.5C15 11.7044 14.6839 10.9413 14.1213 10.3787C13.5587 9.81607 12.7956 9.5 12 9.5H11.83ZM7.53 10.3L9.08 11.85C9.03 12.06 9 12.27 9 12.5C9 13.2956 9.31607 14.0587 9.87868 14.6213C10.4413 15.1839 11.2044 15.5 12 15.5C12.22 15.5 12.44 15.47 12.65 15.42L14.2 16.97C13.53 17.3 12.79 17.5 12 17.5C10.6739 17.5 9.40215 16.9732 8.46447 16.0355C7.52678 15.0979 7 13.8261 7 12.5C7 11.71 7.2 10.97 7.53 10.3ZM2 4.77L4.28 7.05L4.73 7.5C3.08 8.8 1.78 10.5 1 12.5C2.73 16.89 7 20 12 20C13.55 20 15.03 19.7 16.38 19.16L16.81 19.58L19.73 22.5L21 21.23L3.27 3.5M12 7.5C13.3261 7.5 14.5979 8.02678 15.5355 8.96447C16.4732 9.90215 17 11.1739 17 12.5C17 13.14 16.87 13.76 16.64 14.32L19.57 17.25C21.07 16 22.27 14.36 23 12.5C21.27 8.11 17 5 12 5C10.6 5 9.26 5.25 8 5.7L10.17 7.85C10.74 7.63 11.35 7.5 12 7.5Z" fill="#6C717A"/>
            </svg>
        </div>
    )
}

export default inputpass