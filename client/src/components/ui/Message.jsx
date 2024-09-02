export function Message({ message }) {
  return (
    <p className="text-error-content bg-error py-2 px-3 text-sm rounded-lg mb-1">
      {message}
    </p>
  );
}
