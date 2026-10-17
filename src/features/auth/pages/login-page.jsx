import { useState } from "react";
import { useLogin } from "../hooks/login.hooks";
import { removeToken, setToken } from "../../../utils/token-storage";
import { replace, useNavigate } from "react-router-dom";

function BrandMark() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid size-10 place-items-center rounded-xl bg-[#a6d789] text-brand-950 shadow-lg shadow-black/10">
        <svg
          aria-hidden="true"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 11.5 12 5l8 6.5v7a1 1 0 0 1-1 1h-4.75v-5.25h-4.5V19.5H5a1 1 0 0 1-1-1v-7Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className="text-xl font-black tracking-tight lg:text-white">
        FURNI<span className="text-[#a6d789]">ADMIN</span>
      </span>
    </div>
  );
}

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const { mutate: login } = useLogin();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    login(formData, {
      onSuccess: (data) => {
        setToken(data.token, keepLoggedIn);
        navigate("/products", { replace: true });
      },
      onError: (error) => {
        removeToken();
        alert(
          `فشل تسجيل الدخول: ${error.response?.data?.message || "يرجى مراجعة الحقول"}`,
        );
      },
    });
  };

  return (
    <main className="grid min-h-screen bg-[#f7faf8] lg:grid-cols-[minmax(440px,0.9fr)_1.1fr]">
      <section className="relative hidden overflow-hidden bg-brand-950 px-12 py-12 text-white lg:flex lg:flex-col">
        <div className="relative z-10">
          <BrandMark />
          <div className="mt-28 max-w-md">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#a6d789]">
              Your store, simplified
            </p>
            <h1 className="text-5xl font-black leading-[1.05] tracking-[-0.04em]">
              Make room for
              <br />
              <span className="text-[#a6d789]">better business.</span>
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
              A calm, clear space to manage your furniture catalog and keep
              every detail in its place.
            </p>
          </div>
        </div>

        <div className="absolute -bottom-28 -left-20 size-96 rounded-full border-40 border-[#a6d789]/10" />
        <div className="absolute -right-28 top-1/3 size-80 rounded-full bg-brand-800 opacity-70" />
        <div className="absolute bottom-12 right-12 grid size-28 rotate-12 grid-cols-4 gap-2 opacity-20">
          {Array.from({ length: 16 }).map((_, index) => (
            <span className="size-1.5 rounded-full bg-[#a6d789]" key={index} />
          ))}
        </div>
      </section>

      <section className="flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-107.5">
          <div className="mb-12 lg:hidden">
            <BrandMark />
          </div>

          <div className="mb-9">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-muted">
              Welcome back
            </p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-brand-950">
              Sign in to your account
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Enter your details to continue to your dashboard.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label
                className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-brand-900"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-brand-900 outline-none transition placeholder:text-black/30 focus:border-[#7fb46d] focus:ring-4 focus:ring-[#7fb46d]/15"
                id="email"
                placeholder="you@company.com"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  className="block text-xs font-black uppercase tracking-[0.12em] text-brand-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <button
                  className="text-xs font-bold text-[#659451] transition hover:text-brand-900"
                  type="button"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 pr-12 text-sm text-brand-900 outline-none transition placeholder:text-black/30 focus:border-[#7fb46d] focus:ring-4 focus:ring-[#7fb46d]/15"
                  id="password"
                  placeholder="Enter your password"
                  type={passwordVisible ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-[#8a9991]"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 12s3.25-6 9-6 9 6 9 6-3.25 6-9 6-9-6-9-6Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2.5 pt-1 text-sm text-muted">
              <input
                className="size-4 rounded border-black/15 accent-[#659451]"
                type="checkbox"
                checked={keepLoggedIn}
                onChange={() => {
                  setKeepLoggedIn(!keepLoggedIn);
                }}
              />
              Keep me signed in
            </label>

            <button
              className="w-full rounded-xl bg-brand-900 px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-brand-900/15 transition hover:-translate-y-0.5 hover:bg-brand-800"
              type="submit"
            >
              Sign in
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </button>
          </form>

          <p className="mt-20 text-center text-[11px] text-[#9aa8a1]">
            © 2024 FurniAdmin · Built for better retail
          </p>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
