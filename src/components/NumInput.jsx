function NumInput({ type, className, placeholder, name }) {
  return (
    <input
      type={type || ""}
      className={className || ""}
      placeholder={placeholder || ""}
      name={name || ""}
    />
  );
}

export default NumInput;
