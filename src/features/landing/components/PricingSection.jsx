import { ArrowRight, Check } from "./ui";

export function PricingSection({ goToApp }) {
  return (
    <section id="pricing" className="bg-[#F6F8F7] py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-bold text-[#00A97A]">ფასი</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
            ყველაფერი ერთ მარტივ გამოწერაში
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500">
            მიიღე წვდომა Abitu-ს ყველა ძირითად შესაძლებლობაზე შენთვის ხელსაყრელი
            გეგმით.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-500">თვიური</p>
                <div className="mt-5">
                  <span className="text-5xl font-extrabold text-[#0E172B]">
                    7.99
                  </span>
                  <span className="ml-2 text-sm text-slate-400">₾ / თვე</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  გადახდა ხდება ყოველთვიურად
                </p>
              </div>

              <div className="my-8 border-t border-slate-100" />

              <div className="space-y-4">
                {[
                  "ჩარიცხვის სიმულატორი",
                  "შედეგების დეტალური ანალიზი",
                  "წინა წლების ტესტების არქივი",
                  "პროგრესის კონტროლი",
                  "ყველა ძირითადი ფუნქცია ერთ სივრცეში",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8FBF5] text-[#00A97A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={goToApp}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-bold text-[#0E172B] transition hover:bg-slate-50"
              >
                დაიწყე Abitu-ს გამოყენება
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-4 text-center text-xs text-slate-400">
                გაუქმება შეგიძლიათ ნებისმიერ დროს
              </p>
            </div>
          </div>

          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-[#00C58B] bg-white p-8 shadow-md">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#00C58B] px-3 py-1 text-xs font-bold text-white">
              დაზოგე 30%
            </div>

            <div>
              <div className="text-center">
                <p className="text-sm font-bold text-[#00A97A]">წლიური</p>
                <div className="mt-5">
                  <span className="text-5xl font-extrabold text-[#0E172B]">
                    5.59
                  </span>
                  <span className="ml-2 text-sm text-slate-400">₾ / თვე</span>
                </div>
                <p className="mt-2 text-xs font-semibold text-[#00A97A]">
                  67.12 ₾ იხდით წელიწადში ერთხელ
                </p>
              </div>

              <div className="my-8 border-t border-slate-100" />

              <div className="space-y-4">
                {[
                  "ჩარიცხვის სიმულატორი",
                  "შედეგების დეტალური ანალიზი",
                  "წინა წლების ტესტების არქივი",
                  "პროგრესის კონტროლი",
                  "ყველა ძირითადი Funkcija ერთ სივრცეში",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8FBF5] text-[#00A97A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={goToApp}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#00C58B] text-sm font-bold text-white transition hover:bg-[#00B17D]"
              >
                დაიწყე Abitu-ს გამოყენება
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-4 text-center text-xs text-slate-400">
                წლიური ანგარიშსწორება
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
