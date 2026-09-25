export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-bold text-[#00A97A]">როგორ მუშაობს</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
            დაიწყე რამდენიმე მარტივი ნაბიჯით
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-slate-200 md:block" />

          {[
            {
              number: "01",
              title: "შექმენი ანგარიში",
              text: "დარეგისტრირდი Abitu-ზე და მიიღე წვდომა პლატფორმის შესაძლებლობებზე.",
            },
            {
              number: "02",
              title: "აირჩიე მიზანი",
              text: "მიუთითე სასურველი საგნები, უნივერსიტეტი ან მიმართულება.",
            },
            {
              number: "03",
              title: "დაიწყე მომზადება",
              text: "იმუშავე ტესტებზე, გააანალიზე შედეგები და აკონტროლე პროგრესი.",
            },
            {
              number: "04",
              title: "მიაღწიე წარმატებას",
              text: "მიიღე მაღალი ქულები და ჩაირიცხე შენთვის სასურველ უნივერსიტეტში.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="group relative z-10 text-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#0E172B] text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#00A97A]">
                {step.number}
              </div>
              <h3 className="mt-6 text-lg font-bold text-[#0E172B]">
                {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
