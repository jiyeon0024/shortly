function TextInput({ type, className, placeholder, name, onChange, value }) {
  return (
    <input
      type={type || ""}
      className={className || ""}
      placeholder={placeholder || ""}
      name={name || ""}
      onChange={onChange}
      value={value}
    />
  );
}

export default TextInput;
