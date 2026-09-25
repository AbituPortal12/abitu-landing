import { useEffect } from "react";

import { applySeoMeta } from "../../seo/siteSeo";

const seo = {
  title:
    "როგორ შევადაროთ უნივერსიტეტები სწორად — 7 ფაქტორი, რომელიც უნდა გაითვალისწინოთ | Abitu",
  description:
    "გაიგე, როგორ უნდა შეადარო უნივერსიტეტები, პროგრამები და პოზიციები, რათა შენსთვის ყველაზე მიზანშეწონილი არჩევანი გააკეთო.",
  canonical: "https://abitu.ge/#guide-university-comparison",
  ogTitle: "როგორ შევადაროთ უნივერსიტეტები სწორად | Abitu",
  ogDescription:
    "უნივერსიტეტების შედარება არ ნიშნავს მხოლოდ რეიტინგზე დაკვირვებას. ეს არის პროგრამის შესაბამისობა, ქულები, მდებარეობა და მომავალი შესაძლებლობების შეფასება.",
};

const checklist = [
  "შეადარე პროგრამის აკრედიტაცია, ხარისხი და reputácia",
  "გაითვალისწინე ప్రవოსტის მოთხოვნები და კონკურსი",
  "ჩამოწერე, რა გჭირდებათ ქალაქში ცხოვრება და გარემო",
  "დააკვირდი წარმატებული კურსდამთავრებულების გზას",
  "შეაფასე, რამდენად ერგება პროგრამა შენს ინტერესებს და პროფილს",
  "გაითვალისწინე სწავლის საფასური და დამატებითი ხარჯები",
  "მოიფიქრე რამდენიმე finalist ვარიანტი და შედარება data-driven manner",
];

const metrics = [
  {
    value: "7",
    label: "საშუალო შედარების ფაქტორი",
    tone: "bg-[#E8FBF5] text-[#00A97A]",
  },
  {
    value: "3",
    label: "საჭირო prioritetული ასპექტი",
    tone: "bg-slate-100 text-[#0E172B]",
  },
  {
    value: "1",
    label: "სწორი არჩევანი",
    tone: "bg-[#0E172B] text-white",
  },
];

const faq = [
  {
    q: "რატომ არ არის მხოლოდ რეიტინგი საკმარისი?",
    a: "რადგან კომპლექსური გადაწყვეტილება უნდა ეფუძნებოდეს პროგრამის შესაბამისობას, თქვენს strengths, ქულებს, სიამოვნებას და კარიერულ მიზანს.",
  },
  {
    q: "რა უნდა შევადარო სხვადასხვა უნივერსიტეტს შორის?",
    a: "პროგრამის ხარისხი, კონკურსი, მდებარეობა, სწავლის პირობები, დასაქმების შესაძლებლობები, ასევე პერსონალური prioritetები.",
  },
  {
    q: "როგორ ავირჩიო ყველაზე სწორი ვარიანტი?",
    a: "დაწერეთ ყველა 주요 კრიტერიუმი, დააფიქსირეთ რეალური მონაცემები, შემდეგ შეადარეთ 3–5 პროგრამა და აირჩიეთ ყველაზე სწორი ბალანსი.",
  },
];

export default function UniversityComparisonGuidePage() {
  useEffect(() => {
    applySeoMeta({
      title: seo.title,
      description: seo.description,
      canonical: seo.canonical,
      ogTitle: seo.ogTitle,
      ogDescription: seo.ogDescription,
      image: "https://abitu.ge/mainlogo.png",
      keywords: [
        "უნივერსიტეტების შედარება",
        "პროგრამების შედარება",
        "სწორი უნივერსიტეტის არჩევა",
        "აბიტურიენტის გადაწყვეტილება",
      ],
    });
  }, []);

  return (
    <main className="bg-white text-[#0E172B]">
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full bg-[#E8FBF5] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#00A97A]">
              SEO guide
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0E172B] sm:text-5xl">
              როგორ შევადაროთ უნივერსიტეტები სწორად
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              უნივერსიტეტის არჩევაში რეიტინგი მხოლოდ დასაწყისია. აუცილებელია
              გაითვალისწინოთ პროგრამის შესაბამისობა, თქვენი მიზნები და ცხოვრების
              პირობები.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://app.abitu.ge"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#00C58B] px-6 text-sm font-bold text-white transition hover:bg-[#00B17D]"
              >
                დაიწყე Abitu-ს გამოყენება
              </a>
              <a
                href="/#guide-university-selection"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 px-6 text-sm font-bold text-[#0E172B] transition hover:bg-slate-50"
              >
                უნივერსიტეტის არჩევის გეგმა
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#F6F8F7] p-6 shadow-sm">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                comparison map
              </p>
              <div className="mt-5 space-y-4">
                {[
                  "პროგრამის შესაბამისობა",
                  "საშუალო ქულები",
                  "მდებარეობა",
                  "მომავალი შესაძლებლობები",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8FBF5] text-[#00A97A]">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F8F7] py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className={`rounded-2xl p-6 ${item.tone}`}>
                <div className="text-3xl font-extrabold">{item.value}</div>
                <p className="mt-2 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold text-[#00A97A]">7 ფაქტორი</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
            რა უნდა შეადარო სწორად
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {checklist.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8FBF5] text-sm font-black text-[#00A97A]">
                {index + 1}
              </div>
              <p className="text-base font-semibold leading-7 text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0E172B] py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00C58B]">
              why this matters
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              სწორი შედარება გეხმარებათ სწორი არჩევანში
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "უნივერსიტეტი არ არის მხოლოდ ლოგო — ეს არის სწავლის ხარისხი, lifestyle და შესაძლებლობები",
              "მონაცემებზე დაფუძნებული comparison დაზოგავს შეცდომებს და time loss-ს",
              "სწორი არჩევანი შენს კარიერას, წრეობას და კომფორტს უხელმძღვანელებს",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200"
              >
                <p className="text-base leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold text-[#00A97A]">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
            ხშირად დასმული კითხვები
          </h2>
        </div>

        <div className="space-y-4">
          {faq.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-lg font-bold text-[#0E172B]">{item.q}</p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F6F8F7] py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
            არ აირჩიო მხოლოდ „პოპულარული“ — აირჩიე „სწორი“
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Abitu დაგეხმარებათ_program data, score, and university comparison–ის
            თანმიმდევრულად განხილვით, რათა სწორი გადაწყვეტილება მიიღოთ.
          </p>
          <a
            href="https://app.abitu.ge"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#00C58B] px-6 text-sm font-bold text-white transition hover:bg-[#00B17D]"
          >
            დაიწყე Abitu-ს გამოყენება
          </a>
        </div>
      </section>
    </main>
  );
}
