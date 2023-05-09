export default function Button({ label, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-sky-600 hover:bg-sky-500 border-0 px-6 py-3 font-medium text-xs text-white rounded-md"
    >
      {label}
    </button>
  );
}
