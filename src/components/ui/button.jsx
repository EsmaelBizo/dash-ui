const variants = {
  primary:
    "rounded-xl bg-brand-900 px-4 py-3 text-sm text-white hover:bg-brand-800",
  danger:
    "rounded-lg bg-[#fff0ee] px-3 py-2 text-[11px] text-[#c84635] hover:bg-[#ffe5e1]",
  secondary:
    "rounded-lg border border-black/10 bg-white px-3 py-2 text-[11px] text-[#354a40] hover:bg-[#f4f8f5]",
};

function Button({
  className = "",
  type = "button",
  variant = "primary",
  ...props
}) {
  return (
    <button
      className={`font-extrabold transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant] ?? variants.primary} ${className}`.trim()}
      type={type}
      {...props}
    />
  );
}

export default Button;
