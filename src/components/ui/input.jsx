const inputClass =
  "w-full rounded-xl border border-black/10 bg-[#fbfdfc] px-3.5 py-3 text-sm text-brand-900 outline-none transition placeholder:text-black/35 focus:border-[#7fb46d] focus:ring-4 focus:ring-[#7fb46d]/15 disabled:cursor-not-allowed disabled:opacity-60";

function Input({ className = "", ...props }) {
  return (
    <input
      className={`${inputClass} ${className}`.trim()}
      {...props}
    />
  );
}

export default Input;
