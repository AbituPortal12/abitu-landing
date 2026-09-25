import { useEffect } from "react";

import { applySeoMeta } from "../../seo/siteSeo";

const seo = {
  title:
    "როგორ გამოვანგარიშოთ საკონკურსო ქულა სწორად — Abitu-ს გზამკვლევი | Abitu",
  description:
    "გაიგე, როგორ უნდა გაითვალო საკონკურსო ქულა, როგორ შეაფასო შენს შანსები და რა ფაქტორები უნდა გაითვალისწინო უნივერსიტეტის არჩევისას.",
  canonical: "https://abitu.ge/#guide-admission-score",
  ogTitle: "როგორ გამოვანგარიშოთ საკონკურსო ქულა | Abitu",
  ogDescription:
    "საკონკურსო ქულის გამოთვლა არ არის მხოლოდ math. ეს არის მონაცემების სწორად გააზრება, რეალისტური prioritetი და informed decision-making.",
};

const checklist = [
  "გაითვალისწინე თითოეული საგნის შესაბამისი წონა და ბმულის განაწილება",
  "შეადარე შენი შედეგები რეალურ კონკურსის მონაცემებს",
  "გაითვალისწინე არა მხოლოდ მაქსიმალური, არამედ რეალისტური ქულა",
  "შეაფასე პროგრამის მოთხოვნები და არსებული პოპულარობა",
  "გაანალიზე, რატომ შეიძლება სხვაობა შენსა და სხვა აბიტურიენტებს შორის",
  "შეადარე რამდენიმე უნივერსიტეტი და პროგრამა, არა მხოლოდ ერთი ვარიანტი",
  "დაისახე realistic target და გეგმა, როგორ მიაღწიო მას",
];

const metrics = [
  {
    value: "7",
    label: "ძირითადი ფაქტორი",
    tone: "bg-[#E8FBF5] text-[#00A97A]",
  },
  {
    value: "1",
    label: "სწორი სიმულაცია",
    tone: "bg-[#0E172B] text-white",
  },
  {
    value: "90%",
    label: "უმჯობესებული გადაწყვეტილება",
    tone: "bg-slate-100 text-[#0E172B]",
  },
];

const faq = [
  {
    q: "რატომ არის მნიშვნელოვანი საკონკურსო ქულის რეალისტური შეფასება?",
    a: "რადგან სწორი გადაწყვეტილება უნდა ეფუძნებოდეს არა მხოლოდ aspiration-ს, არამედ მონაცემებს და რომელ პროგრამაზე გაქვს რეალური chance.",
  },
  {
    q: "უნდა მივიღო მხოლოდ მაქსიმალური ქულის გათვლები?",
    a: "არა. რეალური შანსები ხშირად უფრო მნიშვნელოვანია, რადგან ისინი გვაძლევს ჭეშმარიტ ხედვას, რა არის attainable და რა არა.",
  },
  {
    q: "რა მჭირდება, რომ ქულა სწორად შევაფასო?",
    a: "საჭიროა პროგრამის მოთხოვნების გაცნობა, შენი შედეგების შეფასება, კონკურენციის გააზრება და უნივერსიტეტის რეალური მონაცემების შედარება.",
  },
];

export default function AdmissionScoreGuidePage() {
  useEffect(() => {
    applySeoMeta({
      title: seo.title,
      description: seo.description,
      canonical: seo.canonical,
      ogTitle: seo.ogTitle,
      ogDescription: seo.ogDescription,
      image: "https://abitu.ge/mainlogo.png",
      keywords: [
        "საკონკურსო ქულა",
        "ქულის გამოთვლა",
        "უნივერსიტეტის შანსები",
        "ჩარიცხვის სიმულატორი",
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
              როგორ გამოვანგარიშოთ საკონკურსო ქულა სწორად
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              საკონკურსო ქულის გაგება ნიშნავს არა მხოლოდ “რამდენი დადეშ”
              კითხვაზე პასუხს, არამედ იმას, თუ რა გვეყოფა რეალური chance და რა
              პროგრამები შეესაბამება შენს შესაძლებლობებს.
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
                score insight
              </p>
              <div className="mt-5 space-y-4">
                {[
                  "რეალური მონაცემები",
                  "შანსების შეფასება",
                  "პროგრამების შედარება",
                  "მიზნობრივი არჩევანი",
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
          <p className="text-sm font-bold text-[#00A97A]">7 ნაბიჯი</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
            როგორ შეაფასო შენი რეალური chances
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
              why it matters
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              მონაცემები გეხმარება უფრო ჭკვიანურ არჩევანში
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "რეალური შეფასება იცავს მოტყუებულ იმედებს და არასწორ არჩევანს",
              "შეიძლება ერთადერთი ყველაზე მნიშვნელოვანი ნაბიჯი სწორი პროგრამის არჩევისთვის",
              "Abitu-ს სიმულაციები იძლევა უფრო მკაფიო ხედვას, ვიდრე guesswork",
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
            სწორი გადაწყვეტილება იწყება სწორ მონაცემებზე
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Abitu დაგეხმარებათ ქულის, შესაძლებლობებისა და პოტენციალის უფრო
            ნათლად შეხედულებაში, რათა არ გააკეთოთ არჩევანი „მოახლოებით“.
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
