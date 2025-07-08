interface InputProps {
    id?: string;
    type: string;
    name: string;
    placeholder: string;
    value?: string;
    onChange: (e: any) => void;
}

export default InputProps