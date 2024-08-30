export function Card({ children }) {
  return (
    <div className="max-w-md flex-wrap bg-base-100 border-2 border-opacity-50 rounded-xl text-base-200">
      <div className="max-w-md w-full p-8 shadow-2xl rounded-xl  bg-zinc-800">
        {children}
      </div>
    </div>
  );
}
