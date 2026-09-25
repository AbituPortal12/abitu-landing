import { ArrowRight } from "./ui";

export function FinalCtaSection({ goToApp }) {
  return (
    <section
      className="bg-white py-24 select-none"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#F5F8F7]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="px-7 py-14 sm:px-12 lg:px-16 lg:py-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D7EDE7] bg-white px-3 py-1.5 text-xs font-bold text-[#00A97A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00A97A]" />
                ყველაფერი ერთ სივრცეში
              </div>

              <h2 className="mt-6 max-w-xl text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl lg:text-5xl">
                ნაკლები ძებნა.
                <br />
                მეტი მომზადება.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
                Abitu გაძლევს ყველა იმ ინსტრუმენტს, რომელიც ეროვნული
                გამოცდებისთვის მომზადებისა და სწორი უნივერსიტეტის არჩევისთვის
                გჭირდება.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={goToApp}
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#00A97A] px-7 text-sm font-bold text-white transition hover:bg-[#008F68]"
                >
                  დაიწყე Abitu-ს გამოყენება
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => {
                    window.location.hash = "#guides";
                  }}
                  className="inline-flex h-12 items-center gap-2 rounded-lg border border-[#D7EDE7] bg-white px-7 text-sm font-bold text-[#0E172B] transition hover:border-[#00C58B] hover:text-[#00A97A]"
                >
                  იხილე Guides
                </button>
              </div>
            </div>

            <div className="relative min-h-90 overflow-hidden bg-[#0E172B] p-7 sm:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="relative flex h-full flex-col justify-center gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-400">
                        მომზადება
                      </div>
                      <div className="mt-1 text-lg font-bold text-white">
                        ტესტები და ანალიზი
                      </div>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16382F] text-[#00C58B]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                      >
                        <path d="M4 4h16v16H4z" />
                        <path d="M8 8h8" />
                        <path d="M8 12h5" />
                        <path d="M8 16h8" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="ml-6 rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm sm:ml-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-400">
                        უნივერსიტეტი
                      </div>
                      <div className="mt-1 text-lg font-bold text-white">
                        არჩევანი და შედარება
                      </div>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16382F] text-[#00C58B]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                      >
                        <path d="m3 10 9-5 9 5-9 5-9-5Z" />
                        <path d="M5 12v5c0 1.5 3.13 3 7 3s7-1.5 7-3v-5" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-400">
                        შესაძლებლობები
                      </div>
                      <div className="mt-1 text-lg font-bold text-white">
                        ყველაფერი ერთ ანგარიშში
                      </div>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16382F] text-[#00C58B]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
