export default function TextInput({ id, label, value, setValue }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={id}
        name={id}
        id={id}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  )
}
