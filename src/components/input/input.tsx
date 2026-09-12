import { InputHTMLAttributes } from "react"

const InputComponent = ({type, id, name, placeholder, value, onChange}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            id={id}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full h-12 border pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
    )
}

export default InputComponent