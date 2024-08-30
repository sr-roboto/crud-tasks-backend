export function Card({ children }) {
  return (
    <div className="bg-zinc-800 max-w-md w-full p-8 rounded-3xl shadow-2xl">
      {children}
    </div>
  );
}
