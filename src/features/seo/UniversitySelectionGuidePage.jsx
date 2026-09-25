import { useEffect } from "react";

import { applySeoMeta } from "../../seo/siteSeo";

const seo = {
  title:
    "როგორ ავირჩიოთ უნივერსიტეტი საქართველოში — 7 ფაქტორი, რომელიც უნდა გაითვალისწინოთ | Abitu",
  description:
    "გაიგე, როგორ უნდა შეარჩიო უნივერსიტეტი და პროგრამა საქართველოში, როგორ შეაფასო შენი chances და რა ფაქტორები უნდა გაითვალისწინო სწორი არჩევანისთვის.",
  canonical: "https://abitu.ge/#guide-university-selection",
  ogTitle: "როგორ ავირჩიოთ უნივერსიტეტი საქართველოში | Abitu",
  ogDescription:
    "შეადარე უნივერსიტეტები, გაითვალე სავარაუდო შედეგები და აირჩიე სწორი პროგრამა Abitu-ს დახმარებით.",
};

const checklist = [
  "გაეცანე პროგრამის მოთხოვნებს და კონკურსს",
  "შეაფასე შენი საკონკურსო ქულა რეალისტური მონაცემებით",
  "გაითვალისწინე სასურველი ქალაქი და ცხოვრების პირობები",
  "შეამოწმე პროგრამის შესაბამისობა შენს ინტერესებთან",
  "შეადარე სხვადასხვა უნივერსიტეტი, როგორც by score, so by fit",
  "გაითვალისწინე სწავლის ხარისხი და დასაქმების შანსები",
  "აირჩიე პროგრამა, რომელიც გთავაზობს როგორც პერსპექტივას, ასევე კომფორტს",
];

const metrics = [
  {
    value: "7",
    label: "ძირითადი ფაქტორი",
    tone: "bg-[#E8FBF5] text-[#00A97A]",
  },
  {
    value: "90%",
    label: "მომზადება უკეთეს გადაწყვეტილებამდე",
    tone: "bg-slate-100 text-[#0E172B]",
  },
  { value: "1", label: "სწორი პლატფორმა", tone: "bg-[#0E172B] text-white" },
];

const faq = [
  {
    q: "როგორ უნდა შევაფასო უნივერსიტეტის შანსები?",
    a: "საჭიროა გაითვალისწინო თქვენი ქულა, კონკურსი, პროგრამის მოთხოვნები და სკოლის გავლა. Abitu-ს სიმულატორი დაგეხმარებათ მონაცემების გაშუქებაში.",
  },
  {
    q: "უნდა ვეძებო მხოლოდ მაღალი რეიტინგის უნივერსიტეტები?",
    a: "არ. ბევრად უფრო მნიშვნელოვანი არის პროგრამის შესაბამისობა, ხარისხი, ფასები, მდებარეობა და თქვენი პერსონალური მიზნები.",
  },
  {
    q: "რა არის ყველაზე მნიშვნელოვანი ფაქტორი არჩევისას?",
    a: "სწორი კომბინაცია: სწორი პროგრამა + რეალისტური ქულა + ადამიანის საჭიროებები და კარიერული იდეები.",
  },
];

export default function UniversitySelectionGuidePage() {
  useEffect(() => {
    applySeoMeta({
      title: seo.title,
      description: seo.description,
      canonical: seo.canonical,
      ogTitle: seo.ogTitle,
      ogDescription: seo.ogDescription,
      image: "https://abitu.ge/mainlogo.png",
      keywords: [
        "როგორ ავირჩიოთ უნივერსიტეტი",
        "უნივერსიტეტის არჩევა",
        "საკონკურსო ქულა",
        "აბიტურიენტი",
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
              როგორ ავირჩიოთ უნივერსიტეტი საქართველოში
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              სწორი ვარიანტი არ არის მხოლოდ ყველაზე პოპულარული უნივერსიტეტი. ეს
              არის პროგრამა, რომელიც შეესაბამება შენს მიზანს, ქულებს, ინტერესებს
              და მომავალი კარიერის გეგმებს.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://app.abitu.ge"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#00C58B] px-6 text-sm font-bold text-white transition hover:bg-[#00B17D]"
              >
                დაიწყე Abitu-ს გამოყენება
              </a>
              <a
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 px-6 text-sm font-bold text-[#0E172B] transition hover:bg-slate-50"
              >
                უკან მთავარზე
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#F6F8F7] p-6 shadow-sm">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                quick checklist
              </p>
              <div className="mt-5 space-y-4">
                {[
                  "მიმისაზრებული პროგრამა",
                  "რეალური კონკურსი",
                  "სწორი მდებარეობა",
                  "მომავალი კარიერა",
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
          <p className="text-sm font-bold text-[#00A97A]">
            7 მნიშვნელოვანი ნაბიჯი
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
            როგორ უნდა გადაწყვიტო სწორად
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
              Why it matters
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              წარმატებული არჩევანი იწყება მონაცემებით
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "სწორედ შენი interests და strengths ვლინდება პროგრამის შერჩევაში",
              "აუცილებელია რეალისტური ქულების შეფასება, არა მხოლოდ გრძნობის საფუძველზე",
              "საუკეთესო პროგრამა ყოველთვის არ არის ყველაზე ცნობილი, არამედ ყველაზე vhodური",
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
            არ დააყოვნო სწორი არჩევანი
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Abitu დაგეხმარებათ უნივერსიტეტების შედარებაში, რეკომენდაციების
            მიღებაში და თქვენი მომზადების უფრო გააზრებულად მართვაში.
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
