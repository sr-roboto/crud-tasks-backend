export function Button({ onClick, children }) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
}
