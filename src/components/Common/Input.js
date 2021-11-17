const Input = ({
    type = "text",
    className, 
    placeholder,
    onFocus,
    id
    }) => {
        
    return (
        <input type={type} className={className} placeholder={placeholder} onFocus={onFocus} id={id}/>  
    )
}

export default Input;