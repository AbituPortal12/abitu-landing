export function FooterSection({ scrollTo }) {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div>
            <button
              onClick={() => scrollTo("home")}
              className="group flex items-center"
            >
              <img
                className="w-26.25 transition-opacity group-hover:opacity-80"
                src="abitulogo.svg"
                alt="Abitu"
              />
            </button>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              ციფრული საგანმანათლებლო პლატფორმა აბიტურიენტებისთვის — მომზადება,
              ინფორმაცია და უნივერსიტეტის არჩევა ერთ სივრცეში.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-[#00A97A]" />
              შენი გზა უნივერსიტეტამდე იწყება აქ
            </div>
          </div>

          <div className="md:justify-self-end">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0E172B]">
              ნავიგაცია
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              <button
                onClick={() => scrollTo("home")}
                className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
              >
                მთავარი
              </button>
              <button
                onClick={() => scrollTo("features")}
                className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
              >
                შესაძლებლობები
              </button>
              <button
                onClick={() => scrollTo("pricing")}
                className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
              >
                ფასი
              </button>
              <button
                onClick={() => {
                  window.location.hash = "#guides";
                }}
                className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
              >
                Guides
              </button>
              <button
                onClick={() => scrollTo("faq")}
                className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
              >
                ხშირად დასმული კითხვები
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
              >
                კონტაქტი
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-100 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Abitu.ge. ყველა უფლება დაცულია.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs text-slate-400">
              შექმნილია აბიტურიენტებისთვის
            </span>

            <button
              onClick={() => scrollTo("home")}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-[#BDEFE2] hover:text-[#00A97A]"
              aria-label="ზემოთ დაბრუნება"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
