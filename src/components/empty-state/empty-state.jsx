function EmptyState({
  title,
  description,
}) {
  return (
    <div className="grid justify-items-center px-5 py-12 text-center">
      <div className="grid size-12 place-items-center rounded-2xl bg-[#eef5ef] text-2xl font-medium text-[#355742]">
        +
      </div>

      <h3 className="mt-3.5 text-sm font-bold text-[#273c31]">
        {title}
      </h3>

      <p className="mt-1 max-w-md text-xs leading-6 text-muted">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;
