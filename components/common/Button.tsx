import { ButtonProps } from "../../interfaces";

export default function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const base =
    "rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-black text-white hover:opacity-90 focus:ring-black",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-50 focus:ring-gray-300",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
}
