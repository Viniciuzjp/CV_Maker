import InputProps from "./interface";

const InputComponent = ({type, id, name, placeholder, value, onChange}: InputProps) => {
    return (
        <input
            id={id}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className="w-9/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
    )
}

export default InputComponent