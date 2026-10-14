function PageHeader({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-5">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted">
          {eyebrow}
        </p>

        <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-brand-900">
          {title}
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
          {description}
        </p>
      </div>

      {action}
    </div>
  );
}

export default PageHeader;
