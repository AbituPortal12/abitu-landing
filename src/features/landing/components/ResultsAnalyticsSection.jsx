import { Check, Chart } from "./ui";

export function ResultsAnalyticsSection() {
  return (
    <section className="bg-[#0E172B] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="text-sm font-bold text-[#00C58B]">
              შედეგების ანალიზი
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              უბრალოდ ქულა არ მიიღო.
              <br />
              გაიგე რას ნიშნავს ის.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
              Abitu გიჩვენებს დეტალურ სურათს შენი შედეგების შესახებ. ნახავ სად
              ხარ ძლიერი, რომელ თემებზე გჭირდება მუშაობა და როგორ იცვლება შენი
              პროგრესი დროთა განმავლობაში.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "დავალებების დეტალური ანალიზი",
                "სუსტი თემების გამოვლენა",
                "პროგ regressის კონტროლი",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#17352F] text-[#00C58B]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <img src="completed-tests.png" alt="completed tests" />
          </div>
        </div>
      </div>
    </section>
  );
}
