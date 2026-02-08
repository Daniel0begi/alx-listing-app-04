interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Pill({ label, active = false, onClick }: PillProps) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-black bg-black text-white"
          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}
