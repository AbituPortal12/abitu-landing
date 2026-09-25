import { ArrowRight } from "./ui";

export function UniversitySection({ goToApp }) {
  return (
    <section id="university" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#0E172B]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="text-sm font-bold text-[#00C58B]">
                უნივერსიტეტის არჩევა
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                დაგეგმე შენი გზა უნივერსიტეტამდე
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-400">
                შეიყვანე შენი შედეგები, შეარჩიე სასურველი პროგრამა და გამოიყენე
                სიმულატორი იმისთვის, რომ უკეთ დაინახო შენი საკონკურსო შედეგი.
              </p>
              <button
                onClick={goToApp}
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-[#00C58B] px-6 text-sm font-bold text-white transition hover:bg-[#00B17D]"
              >
                დაიწყე ახლა
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="border-t border-white/10 bg-[#121E34] p-8 lg:border-l lg:border-t-0 lg:p-12">
              <div className="rounded-2xl bg-white p-6 select-none">
                <img
                  src="unis.png"
                  alt="uni-card"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  className="pointer-events-none select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
