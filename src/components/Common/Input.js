const Input = ({
  type = "text",
  className,
  placeholder,
  onChange,
  id,
  onBlur,
  defaultValue,
  isDisabled = false,
  autoComplete = "off",
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
      autoComplete={autoComplete}
    />
  );
};

export default Input;
