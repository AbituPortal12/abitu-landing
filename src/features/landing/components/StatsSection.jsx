import { ArrowRight } from "./ui";

export function StatsSection() {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-100 px-5 py-10 md:grid-cols-4 lg:px-8">
        {[
          ["24/7", "ხელმისაწვდომი"],
          ["1", "სივრცე ყველაფრისთვის"],
          ["∞", "შესაძლებლობები"],
          ["7.99₾|67₾", "თვეში | წელიწადში"],
        ].map(([number, label]) => (
          <div key={label} className="px-4 py-3 text-center sm:px-8">
            <div className="text-2xl font-extrabold text-[#0E172B] sm:text-3xl">
              {number}
            </div>
            <div className="mt-1 text-xs text-slate-400 sm:text-sm">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
