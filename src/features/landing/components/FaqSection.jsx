export function FaqSection({ faqItems, openFaq, setOpenFaq }) {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-bold text-[#00A97A]">კითხვები</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
            ხშირად დასმული კითხვები
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="text-sm font-bold text-[#0E172B] sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition ${isOpen ? "rotate-45" : ""}`}
                  >
                    <span className="text-xl font-light leading-none">+</span>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pr-12 text-sm leading-7 text-slate-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
