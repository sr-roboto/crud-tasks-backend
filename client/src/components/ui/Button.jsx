export function Button({ onClick, children }) {
  return (
    <button className="btn bg-neutral-content border-none " onClick={onClick}>
      {children}
    </button>
  );
}
