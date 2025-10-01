export default function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  ...props
}) {
  return (
    <div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="block w-64 mt-1 border-gray-400 rounded-lg focus:ring-indigo-500"
        {...props}
      />
    </div>
  );
}
