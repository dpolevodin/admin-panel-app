function Input ({
    type = "text",
    className, 
    placeholder,
    onFocus
    }) {
    return (
        <input type={type} className={className} placeholder={placeholder} onFocus={onFocus}/>  
    )
}

export default Input;