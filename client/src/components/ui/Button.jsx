export function Button({ onClick, children }) {
  return (
    <button
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-base-200 hover:bg-success"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
