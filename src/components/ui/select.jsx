const selectClass =
  "w-full rounded-xl border border-black/10 bg-[#fbfdfc] px-3.5 py-3 text-sm text-brand-900 outline-none transition focus:border-[#7fb46d] focus:ring-4 focus:ring-[#7fb46d]/15 disabled:cursor-not-allowed disabled:opacity-60";

function Select({ className = "", children, ...props }) {
  return (
    <select
      className={`${selectClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </select>
  );
}

export default Select;
