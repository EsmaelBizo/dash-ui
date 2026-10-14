function Topbar() {
  return (
    <header className="flex min-h-[84px] shrink-0 items-center justify-between gap-5 border-b border-black/5 bg-white px-8">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted">
          Training Dashboard
        </p>

        <h1 className="mt-1 text-xl font-bold text-brand-900">
          Furniture Store
        </h1>
      </div>

      <div className="flex items-center gap-2.5">
        <span className="grid size-10 place-items-center rounded-full bg-brand-100 font-black text-brand-900">
          A
        </span>

        <div>
          <strong className="block text-sm text-brand-900">
            Admin
          </strong>

          <small className="mt-0.5 block text-[11px] text-black/45">
            Student Project
          </small>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
