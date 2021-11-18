const Input = ({
  type = "text",
  className,
  placeholder,
  onChange,
  id,
  onBlur,
  defaultValue,
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
    />
  );
};

export default Input;
