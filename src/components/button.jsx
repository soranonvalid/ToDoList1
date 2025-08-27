export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const base = "px-4 py-2 rounded-lg text-white cursor-pointer";
  const styles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    success: "bg-green-500 hover:bg-green-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
