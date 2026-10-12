const businessEmail = "YOUR_BUSINESS_EMAIL_HERE";
const businessPhone = "07852 435168";
const businessPhoneLink = "+447852435168";

export default function MaintenancePage() {
  const emailHref = `mailto:${businessEmail}?subject=${encodeURIComponent(
    "ELA Pressure Washing - New Enquiry",
  )}`;

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#080e1c] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-64 left-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#67e8f9"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3C9.3 7 5 11.2 5 15a7 7 0 0 0 14 0c0-3.8-4.3-8-7-12Z" />
              <path d="M8.5 15.5a3.5 3.5 0 0 0 3.5 3.5" />
            </svg>
          </div>

          <div>
            <p className="text-xl font-bold tracking-tight text-white">ELA</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Pressure Washing
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 sm:flex">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-medium text-slate-300">
            Website improvements underway
          </span>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-16 md:px-12 lg:py-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">
                We're making improvements
              </span>
            </div>

            <h1 className="mb-7 text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              A cleaner
              <br />
              website is
              <br />
              <span className="text-cyan-400">on its way.</span>
            </h1>

            <p className="mb-5 max-w-xl text-lg leading-relaxed text-slate-300">
              We're giving our website some attention behind the scenes to bring
              you an even better online experience.
            </p>

            <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-400">
              While we're making improvements, ELA Pressure Washing is still
              available for enquiries about residential, commercial and
              specialist exterior cleaning services.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={emailHref}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                Send us an email
              </a>

              <a
                href={`tel:${businessPhoneLink}`}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-3.3 2.1A19 19 0 0 1 2 5.3 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.8L7.1 10a16 16 0 0 0 6.9 6.9l1.7-1.9a2 2 0 0 1 1.8-.6l2.8.5a2 2 0 0 1 1.7 2Z" />
                </svg>

                {businessPhone}
              </a>
            </div>

            <p className="mt-7 text-sm text-slate-500">
              For quotations, bookings and general enquiries, please contact us
              directly.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-cyan-400/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111d2d] p-3 shadow-2xl">
              <div
                className="relative flex min-h-[490px] flex-col justify-end overflow-hidden rounded-[1.5rem] bg-slate-800 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(5,12,25,0.97), rgba(5,12,25,0.15) 70%), url('/assets/images/about/header.jpg')",
                }}
              >
                <div className="relative p-9">
                  <div className="mb-5 h-1 w-12 rounded-full bg-cyan-400" />

                  <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
                    Professional
                    <br />
                    exterior cleaning.
                  </h2>

                  <p className="max-w-sm text-sm leading-relaxed text-slate-200">
                    Pressure washing, steam cleaning, surface restoration and
                    specialist cleaning services across the West Midlands.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-5">
                <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  ELA Pressure Washing
                </span>

                <span className="text-xs text-cyan-300">Wolverhampton, UK</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 text-center md:flex-row md:px-12 md:text-left">
          <p className="text-xs text-slate-400">
            © ELA Pressure Washing & Steam Cleaning. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <span>Wolverhampton</span>
            <span className="text-slate-600">•</span>
            <span>West Midlands</span>
            <span className="text-slate-600">•</span>

            <a
              href={`tel:${businessPhoneLink}`}
              className="text-slate-300 hover:text-cyan-300"
            >
              {businessPhone}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
