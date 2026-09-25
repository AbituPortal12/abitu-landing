import { useEffect } from "react";

import { applySeoMeta } from "../../seo/siteSeo";

const guideCards = [
  {
    title: "როგორ ავირჩიოთ უნივერსიტეტი საქართველოში",
    description:
      "შეიტყვე, რომელ ფაქტორებს უნდა დაუთმო ყურადღება, როგორ შეაფასო პროგრამა და რა არის ყველაზე მნიშვნელოვანი სწორი არჩევანისთვის.",
    href: "#guide-university-selection",
    tag: "Guide 1",
  },
  {
    title: "როგორ მოვემზადოთ გამოცდებისთვის სწორად",
    description:
      "გაიგე, როგორ უნდა დააწესო გრაფიკი, დამყარო consistency და გაზარდო წარმატების შანსი სტრუქტურული მიდგომით.",
    href: "#guide-exam-preparation",
    tag: "Guide 2",
  },
  {
    title: "როგორ გამოვანგარიშოთ საკონკურსო ქულა",
    description:
      "განათავსე და გაანალიზე შენი ქულა, შეაფასე რეალური chances და აირჩიე წინადადებები data-driven გზით.",
    href: "#guide-admission-score",
    tag: "Guide 3",
  },
  {
    title: "როგორ შევადაროთ უნივერსიტეტები სწორად",
    description:
      "შეადარე უნივერსიტეტები, პროგრამები, ქალაქები და მომავალი შესაძლებლობები, რათა შეარჩიო ყველაზე მიზანშეწონილი ვარიანტი.",
    href: "#guide-university-comparison",
    tag: "Guide 4",
  },
];

export default function GuidesHubPage() {
  useEffect(() => {
    applySeoMeta({
      title:
        "Abitu Guides — უნივერსიტეტის არჩევა, გამოცდების მომზადება და საკონკურსო ქულა | Abitu",
      description:
        "აღმოაჩინე Abitu-ს SEO guides: უნივერსიტეტის არჩევა, გამოცდების მოსამზადებელი სტრატეგია, საკონკურსო ქულის გამოთვლა და უნივერსიტეტების შედარება.",
      canonical: "https://abitu.ge/#guides",
      ogTitle: "Abitu Guides | Abitu",
      ogDescription:
        "მოიძიე Abitu-ს ყველა ხიდული საინფორმაციო guide ერთ სივრცეში და აირჩიე სწორი მიმართულება.",
      image: "https://abitu.ge/mainlogo.png",
      keywords: [
        "Abitu guides",
        "უნივერსიტეტის არჩევა",
        "გამოცდების მომზადება",
        "საკონკურსო ქულა",
      ],
    });
  }, []);

  return (
    <main className="bg-white text-[#0E172B]">
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-[#E8FBF5] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#00A97A]">
            Abitu guides
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0E172B] sm:text-5xl">
            უნივერსიტეტის არჩევისა და გამოცდების მოსამზადების სახელმძღვანელოები
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            ჩვენი Guides–ები შეერთებულია ერთ თემატურ კლასტერზე: როგორ ავირჩიოთ
            სწორი უნივერსიტეტი, როგორ მოვემზადოთ გამოცდებისთვის, როგორ შეაფასო
            შენი chances და როგორ შეადარო სხვადასხვა პროგრამა.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {guideCards.map((guide) => (
            <a
              key={guide.href}
              href={guide.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#00C58B] hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#E8FBF5] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00A97A]">
                  {guide.tag}
                </span>
                <span className="text-sm font-bold text-[#00A97A] transition group-hover:translate-x-1">
                  Open →
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[#0E172B]">
                {guide.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {guide.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#0E172B] p-8 text-center text-white">
          <h2 className="text-3xl font-extrabold tracking-tight">
            მზად ხარ სწორი არჩევანისთვის?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            გამოიყენე Abitu–ს პლატფორმა, რომ უკეთ შეაფასო შენი chances, შეადარო
            პროგრამები და მიიღო ინფორმირებული გადაწყვეტილება.
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
