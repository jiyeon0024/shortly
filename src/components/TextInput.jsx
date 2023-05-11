function TextInput({ type, className, placeholder, name, onChange }) {
  return (
    <input
      type={type || ""}
      className={className || ""}
      placeholder={placeholder || ""}
      name={name || ""}
      onChange={onChange}
    />
  );
}

export default TextInput;
