import { Check } from "./ui";

export function PlatformSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
              alt="Abitu educational platform"
              className="h-107.5 w-full object-cover"
            />
          </div>

          <div>
            <div className="text-sm font-bold text-[#00A97A]">
              ერთი პლატფორმა
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
              სწავლა, პრაქტიკა და ანალიზი ერთ სივრცეში
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-500">
              Abitu შექმნილია იმისთვის, რომ აბიტურიენტს ყოველდღიური მომზადების
              პროცესი გაუმარტივოს და მისცეს მკაფიო წარმოდგენა საკუთარ პროგრესზე.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "მოსახერხებელი და მარტივი ინტერფეისი",
                "ყველა მნიშვნელოვანი შედეგი ერთ ადგილას",
                "მომზადების პროცესის კონტროლი",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8FBF5] text-[#00A97A]">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
