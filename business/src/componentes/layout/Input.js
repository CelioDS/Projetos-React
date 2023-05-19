import style from "./Input.module.css";

export default function Input({
  type,
  text,
  name,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <div className={style.father}>
      <label htmlFor={name}>{text}</label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
}
