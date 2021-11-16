function Input ({
    className, 
    placeholder,
    onFocus
    }) {
    return (
        <input className={className} placeholder={placeholder} onFocus={onFocus}/>  
    )
}

export default Input;