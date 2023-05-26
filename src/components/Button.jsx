export default function Button({ handleClick, children }) {
  return (
    <button
      onClick={handleClick}
      className="bg-sky-600 hover:bg-sky-500 border-0 px-6 py-3 font-medium text-xs text-white rounded-md"
    >
      {children}
    </button>
  );
}
