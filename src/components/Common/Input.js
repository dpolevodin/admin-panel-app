const Input = ({
  type = "text",
  className,
  placeholder,
  onChange,
  id,
  onBlur,
  defaultValue,
  isDisabled = false
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      id={id}
      onBlur={onBlur}
      defaultValue={defaultValue}
      disabled={isDisabled}
    />
  );
};

export default Input;
