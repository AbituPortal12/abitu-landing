import { ArrowRight } from "./ui";

export function FeatureSection({ features, scrollTo }) {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-bold text-[#00A97A]">შესაძლებლობები</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
            ყველაფერი, რაც აბიტურიენტს სჭირდება
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-500">
            აღარ არის საჭირო სხვადასხვა საიტსა და ფაილში ინფორმაციის ძებნა.
            Abitu გაძლევს საჭირო ინსტრუმენტებს ერთ სივრცეში.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#BDEFE2] hover:shadow-lg hover:shadow-slate-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8FBF5] text-[#00A97A]">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#0E172B]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {feature.text}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#00A97A] opacity-0 transition group-hover:opacity-100">
                გაიგე მეტი
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
