export function Card({ children }) {
  return (
    <div className="flex-wrap rounded-xl text-base-200  ">
      <div className="glass p-5 shadow-xl rounded-xl bg-gray-800 transition max-w-md max-h-dvh hover:-translate-y-1 ease-in duration-200 ">
        {children}
      </div>
    </div>
  );
}
