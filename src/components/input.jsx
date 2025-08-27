function Input({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="mb-4 mt-4 flex flex-col gap-4">
      <h3>{label}</h3>
      <input
        className="border-b-2 border-black/25 focus:border-black p-2 outline-none"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
