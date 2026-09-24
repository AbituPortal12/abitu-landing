import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

/* =========================================================
   ICONS
========================================================= */

const Icon = ({ children, className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const ArrowRight = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
);

const ArrowLeft = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <path d="M19 12H5" />
    <path d="m11 18-6-6 6-6" />
  </Icon>
);

const Check = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <path d="m5 12 4 4L19 6" />
  </Icon>
);

const Sparkles = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <path d="m12 3-1.2 3.8L7 8l3.8 1.2L12 13l1.2-3.8L17 8l-3.8-1.2L12 3Z" />
    <path d="m19 14-.7 2.3L16 17l2.3.7L19 20l.7-2.3L19 14Z" />
    <path d="m5 14-.7 1.8L2 16.5l2.3.7L5 20l.7-2.8 2.3-.7-2.3-.7L5 14Z" />
  </Icon>
);

const Chart = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="m7 15 3-4 3 2 5-7" />
  </Icon>
);

const Book = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
    <path d="M4 5.5v16" />
    <path d="M8 7h8" />
    <path d="M8 11h7" />
  </Icon>
);

const Target = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" />
  </Icon>
);

const Calculator = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" />
  </Icon>
);

const Menu = ({ className = "w-6 h-6" }) => (
  <Icon className={className}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </Icon>
);

const X = ({ className = "w-6 h-6" }) => (
  <Icon className={className}>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </Icon>
);

const Mail = ({ className = "w-4 h-4" }) => (
  <Icon className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);

const Phone = ({ className = "w-4 h-4" }) => (
  <Icon className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </Icon>
);

/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M8 6h8" />
        <path d="M8 10h2" />
        <path d="M14 10h2" />
        <path d="M8 14h2" />
        <path d="M14 14h2" />
        <path d="M8 18h2" />
        <path d="M14 18h2" />
      </svg>
    ),
    title: "ჩარიცხვის სიმულატორი",
    text: "გამოთვალე საკონკურსო ქულა და ნახე შენი შესაძლებლობები სხვადასხვა უნივერსიტეტსა და პროგრამაზე.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M3 3v18h18" />
        <path d="m7 16 4-5 3 3 5-7" />
        <circle cx="7" cy="16" r="1" />
        <circle cx="11" cy="11" r="1" />
        <circle cx="14" cy="14" r="1" />
        <circle cx="19" cy="7" r="1" />
      </svg>
    ),
    title: "შედეგების ანალიზატორი",
    text: "გაიგე კონკრეტულად რომელ თემებსა და დავალებებში ხარ ძლიერი და სად გჭირდება მეტი მუშაობა.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M4 4h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4Z" />
        <path d="M18 20h2V6a2 2 0 0 0-2-2" />
        <path d="M8 8h6" />
        <path d="M8 12h6" />
        <path d="M8 16h4" />
      </svg>
    ),
    title: "ტესტების არქივი",
    text: "იმუშავე წინა წლების ეროვნული გამოცდების ტესტებზე და შეამოწმე საკუთარი ცოდნა.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v5" />
        <path d="M21 12h-5" />
        <path d="M12 21v-5" />
        <path d="M3 12h5" />
      </svg>
    ),
    title: "მიზანზე მორგებული მომზადება",
    text: "დაგეგმე სწავლა შენი მიზნის, უნივერსიტეტისა და სასურველი მიმართულების მიხედვით.",
  },
  {
    title: "პროფესიონალი მასწავლებლები",
    text: "იპოვე პროფესიონალი მასწავლებელი მარტივად შენი საცხოვრებელი ქალაქის მიხედვით და დაუკავშირდი სასურველ მასწავლებელს.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "სიახლეები და შეტყობინებები",
    text: "მიიღე მყისიერი შეტყობინება მნიშვნელოვანი სიახლეების გამოქვეყნებისას ელ.ფოსტასა და ტელეფონის ნომერზე.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "უნივერსიტეტების სრული ინფორმაცია",
    text: "ყველა უნივერსიტეტისა და საგანმანათლებლო პროგრამის ინფორმაცია ერთ სივრცეში — ფაკულტეტები, სწავლის საფასური და სხვა მნიშვნელოვანი დეტალები.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="m3 10 9-5 9 5-9 5-9-5Z" />
        <path d="M5 12v5c0 1.5 3.13 3 7 3s7-1.5 7-3v-5" />
        <path d="M21 10v6" />
      </svg>
    ),
  },
  {
    title: "აბიტურიენტების საერთო ჩატი",
    text: "გაუზიარე სხვა აბიტურიენტებს შენი აზრი, დასვი კითხვები, მიიღე პასუხები და გაეცანი სხვების გამოცდილებას.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      </svg>
    ),
  },
];

/* =========================================================
   COURSES
========================================================= */

const courses = [
  {
    title: "ქართული ენა და ლიტერატურა",
    image: "georgialanguage.jpg",
  },
  {
    title: "მათემატიკა",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "ინგლისური ენა",
    image:
      "https://images.unsplash.com/photo-1543109740-4bdb38fda756?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "სხვა საგნები",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqItems = [
  {
    q: "რა არის Abitu?",
    a: "Abitu არის ციფრული საგანმანათლებლო პლატფორმა აბიტურიენტებისთვის, რომელიც აერთიანებს გამოცდებისთვის მომზადებას, ტესტებს, შედეგების ანალიზს და უნივერსიტეტის არჩევასთან დაკავშირებულ ინსტრუმენტებს.",
  },
  {
    q: "რა ღირს Abitu?",
    a: "Abitu-ს გამოწერის ღირებულება არის თვეში 7.99 ლარი, ხოლო წელიწადში 67 ლარი.",
  },
  {
    q: "შემიძლია წინა წლების ტესტების გამოყენება?",
    a: "დიახ. პლატფორმაზე ხელმისაწვდომია წინა წლების ეროვნული გამოცდების ტესტების არქივი.",
  },
  {
    q: "როგორ მუშაობს ჩარიცხვის სიმულატორი?",
    a: "სიმულატორი ითვალისწინებს შესაბამის კოეფიციენტებს და გეხმარება საკონკურსო ქულის გამოთვლასა და სხვადასხვა პროგრამის შედარებაში.",
  },
  {
    q: "როგორ მუშაობს შედეგების ანალიზატორი?",
    a: "შედეგების ანალიზატორი დეტალურად გაჩვენებს შენს შედეგებს და გეხმარება იმის გარკვევაში, რომელ თემებსა და დავალებებზე გჭირდება მეტი მუშაობა.",
  },
  {
    q: "შემიძლია სხვადასხვა უნივერსიტეტის შედარება?",
    a: "დიახ. Abitu-ზე შეგიძლია ერთ სივრცეში გაეცნო სხვადასხვა უნივერსიტეტისა და საგანმანათლებლო პროგრამის ინფორმაციას და შეადარო მათ შორის მნიშვნელოვანი დეტალები.",
  },
  {
    q: "რა ინფორმაციაა ხელმისაწვდომი უნივერსიტეტების შესახებ?",
    a: "შეგიძლია გაეცნო უნივერსიტეტების, ფაკულტეტების, საგანმანათლებლო პროგრამების, სწავლის საფასურისა და სხვა მნიშვნელოვანი დეტალების შესახებ ინფორმაციას.",
  },
  {
    q: "შემიძლია პროფესიონალი მასწავლებლის პოვნა?",
    a: "დიახ. Abitu-ზე აბიტურიენტებს შეუძლიათ მოძებნონ პროფესიონალი მასწავლებლები და იპოვონ სასურველი მასწავლებელი საცხოვრებელი ქალაქის მიხედვით.",
  },
  {
    q: "როგორ გავიგებ ახალ სიახლეებს?",
    a: "მნიშვნელოვანი სიახლეების გამოქვეყნებისას აბიტურიენტები მიიღებენ შეტყობინებებს ელ.ფოსტასა და მითითებულ ტელეფონის ნომერზე.",
  },
  {
    q: "რა არის აბიტურიენტების საერთო ჩატი?",
    a: "საერთო ჩატი არის სივრცე, სადაც აბიტურიენტებს შეუძლიათ ერთმანეთს გაუზიარონ გამოცდილება, დასვან კითხვები, გამოთქვან საკუთარი აზრი და მიიღონ პასუხები სხვა აბიტურიენტებისგან.",
  },
  {
    q: "შემიძლია Abitu-ს გამოყენება ტელეფონიდან?",
    a: "დიახ. Abitu შექმნილია ისე, რომ პლატფორმის გამოყენება კომფორტულად შეძლო როგორც კომპიუტერიდან, ისე ტელეფონიდან და პლანშეტიდან.",
  },
  {
    q: "როგორ შემიძლია Abitu-ზე რეგისტრაცია?",
    a: "რეგისტრაცია მარტივად შეგიძლია პლატფორმის შესაბამისი გვერდიდან. ანგარიშის შექმნის შემდეგ შეძლებ Abitu-ს ხელმისაწვდომი ფუნქციების გამოყენებას.",
  },
];

/* =========================================================
   MENU LINKS
========================================================= */

const menuLinks = [
  { id: "home", label: "მთავარი" },
  { id: "features", label: "შესაძლებლობები" },
  { id: "how-it-works", label: "როგორ მუშაობს" },
  { id: "subjects", label: "საგნები" },
  { id: "pricing", label: "ფასი" },
  { id: "faq", label: "ხშირად დასმული კითხვები" },
  { id: "contact", label: "დაგვიკავშირდი" },
];

/* =========================================================
   HERO SLIDES
========================================================= */

const heroSlides = [
  {
    eyebrow: "ABITU • N1 პლატფორმა აბიტურიენტებისთვის",
    title: (
      <>
        მოემზადე
        <br />
        <span className="text-[#00C58B]">უფრო მარტივად.</span>
      </>
    ),
    description:
      "იმიტირებული ტესტები, შედეგების ანალიზი, სიახლეები და ჩარიცხვის სიმულატორი - ყველაფერი, რაც ეროვნული გამოცდებისთვის გჭირდება, ერთ სივრცეში.",
    button: "დაიწყე მომზადება",
    secondary: "გაიგე მეტი",
    type: "analytics",
    image: "heroimage1.png",
  },
  {
    eyebrow: "ABITU • აბიტურიენტის გზამკვლევი",
    title: (
      <>
        შენი გზა
        <br />
        <span className="text-[#00C58B]">აბიტურიენტობიდან ჩარიცხვამდე.</span>
      </>
    ),
    description:
      "გაეცანი დეტალურ გზამკვლევს და ნაბიჯ-ნაბიჯ გაიგე, რა გელოდება გამოცდებიდან უნივერსიტეტში ჩარიცხვამდე.",
    button: "გაეცანი გზამკვლევს",
    secondary: "უნივერსიტეტები",
    type: "guide",
    image: "heroimage2.png",
  },
];

/* =========================================================
   HERO VISUAL - ANALYTICS
========================================================= */

function AnalyticsVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0E172B]">
      <div className="absolute -right-25 -top-25 h-75 w-75 rounded-full border border-white/10" />

      <div className="relative flex h-full items-center justify-center p-8 xl:p-14">
        <div className="w-full max-w-112.5 rounded-2xl bg-white p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">
                შედეგების ანალიზი
              </p>

              <h3 className="mt-1 text-lg font-bold text-[#0E172B]">
                შენი პროგრესი
              </h3>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8FBF5] text-[#00A97A]">
              <Chart className="h-5 w-5" />
            </div>
          </div>

          <div className="mb-6 flex items-end justify-between">
            <div>
              <div className="text-4xl font-bold text-[#0E172B]">86%</div>

              <p className="mt-1 text-sm text-slate-500">საერთო შედეგი</p>
            </div>

            <div className="rounded-full bg-[#E8FBF5] px-3 py-1.5 text-xs font-semibold text-[#00A97A]">
              +14% პროგრესი
            </div>
          </div>

          <div className="space-y-4">
            {[
              ["ქართული", 92],
              ["მათემატიკა", 81],
              ["ინგლისური", 86],
            ].map(([name, value]) => (
              <div key={name}>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">{name}</span>

                  <span className="font-semibold text-[#0E172B]">{value}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[#00C58B]"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-slate-100 pt-5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">ბოლო ტესტი</span>

              <span className="text-sm font-semibold text-[#0E172B]">
                42 / 50
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HERO VISUAL - CALCULATOR
========================================================= */

function CalculatorVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0E172B]">
      <div className="absolute left-0 top-0 h-full w-[40%] bg-[#142039]" />

      <div className="relative flex h-full items-center justify-center p-8 xl:p-14">
        <div className="w-full max-w-112.5 rounded-2xl bg-white p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">
                ჩარიცხვის სიმულატორი
              </p>

              <h3 className="mt-1 text-lg font-bold text-[#0E172B]">
                საკონკურსო ქულა
              </h3>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8FBF5] text-[#00A97A]">
              <Calculator className="h-5 w-5" />
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-xs text-slate-500">სავარაუდო შედეგი</p>

            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold text-[#0E172B]">174.6</span>

              <span className="mb-1 text-sm text-slate-400">ქულა</span>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
              <div>
                <p className="text-xs text-slate-400">უნივერსიტეტი</p>

                <p className="mt-1 text-sm font-semibold text-[#0E172B]">
                  სასურველი პროგრამა
                </p>
              </div>

              <ArrowRight className="h-4 w-4 text-slate-400" />
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
              <div>
                <p className="text-xs text-slate-400">შეფასება</p>

                <p className="mt-1 text-sm font-semibold text-[#00A97A]">
                  მაღალი შესაბამისობა
                </p>
              </div>

              <Check className="h-4 w-4 text-[#00C58B]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FULLSCREEN MENU
========================================================= */

function FullMenu({ open, onClose, onNavigate }) {
  return (
    <div
      className={`fixed inset-0 z-100 h-screen overflow-hidden bg-[#0B1424]/80 text-white backdrop-blur-md transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% -10%, rgba(0,197,139,0.16), transparent 45%), radial-gradient(circle at 0% 100%, rgba(0,197,139,0.08), transparent 40%)",
        }}
      />

      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl shrink-0 items-center justify-between px-5 py-4 lg:px-8 lg:py-5">
          <img className="w-25" src="abitulogo-white.svg" alt="Logo" />

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#00C58B] hover:text-[#00C58B]"
            aria-label="დახურვა"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mx-auto grid w-full max-w-7xl flex-1 gap-6 overflow-hidden px-5 pb-6 pt-2 lg:grid-cols-[1.3fr_1fr] lg:gap-14 lg:px-8">
          <nav className="flex min-h-0 flex-col justify-center">
            {menuLinks.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="group flex items-center gap-4 border-b border-white/10 py-2.5 text-left first:pt-0 sm:py-3"
              >
                <span className="text-[10px] font-bold text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-base font-extrabold tracking-tight text-slate-200 transition group-hover:translate-x-1 group-hover:text-[#00C58B] sm:text-lg">
                  {item.label}
                </span>

                <ArrowRight className="ml-auto h-4 w-4 text-slate-600 opacity-0 transition group-hover:translate-x-1 group-hover:text-[#00C58B] group-hover:opacity-100" />
              </button>
            ))}

            <button
              onClick={() => onNavigate("pricing")}
              className="mt-5 inline-flex h-10 w-fit items-center gap-2 rounded-lg bg-[#00C58B] px-5 text-xs font-bold text-[#0E172B] transition hover:bg-[#00E0A0]"
            >
              შესვლა / რეგისტრაცია
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </nav>

          <div className="hidden min-h-0 flex-col justify-center gap-6 lg:flex">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#00C58B]">
                  კონტაქტი
                </p>

                <div className="mt-3 space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-slate-500" />

                    <a
                      className="hover:text-[#00C58B]"
                      href="mailto:info.abitu@gmail.com"
                    >
                      info.abitu@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-slate-500" />

                    <a
                      className="hover:text-[#00C58B]"
                      href="tel:+995571025027"
                    >
                      +995 571 025 027
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#00C58B]">
                  გამოგვყევი
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
                  <a
                    href="https://facebook.com/abitu.ge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transition hover:text-[#00C58B]"
                  >
                    Facebook
                  </a>

                  <a
                    href="https://instagram.com/abitu.ge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transition hover:text-[#00C58B]"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs leading-5 text-slate-300">
                <span className="font-bold text-white">გაქვს კითხვა?</span>{" "}
                მოგვწერე და ჩვენი გუნდი დაგეხმარება Abitu-ს გამოყენებასთან
                დაკავშირებულ ნებისმიერ საკითხში.
              </p>

              <button
                onClick={() => onNavigate("contact")}
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#00C58B]"
              >
                დაგვიკავშირდი
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [heroSlide, setHeroSlide] = useState(0);

  /* =========================================================
     EMAILJS CONTACT FORM
  ========================================================= */

  const sendContactEmail = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const button = form.querySelector('button[type="submit"]');

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      alert("გთხოვ, შეავსე ყველა ველი.");
      return;
    }

    button.disabled = true;
    button.innerHTML = "იგზავნება...";

    try {
      await emailjs.send(
        "service_2qgmzei",
        "template_rduhn73",
        {
          name: name,
          email: email,
          message: message,
          time: new Date().toLocaleString("ka-GE"),
        },
        {
          publicKey: "Z-432hO7tnZjZXt3_",
        },
      );

      alert("შეტყობინება წარმატებით გაიგზავნა!");

      form.reset();

      button.innerHTML = `
        შეტყობინების გაგზავნა
        <span class="ml-2">→</span>
      `;
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert("შეტყობინების გაგზავნა ვერ მოხერხდა. გთხოვ, სცადე თავიდან.");

      button.innerHTML = `
        შეტყობინების გაგზავნა
        <span class="ml-2">→</span>
      `;
    } finally {
      button.disabled = false;
    }
  };

  /* LOCK SCROLL WHEN MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* HERO AUTOPLAY */
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((current) => {
        return (current + 1) % heroSlides.length;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const nextSlide = () => {
    setHeroSlide((current) => (current + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setHeroSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const currentHero = heroSlides[heroSlide];

  return (
    <div className="min-h-screen bg-white text-[#0E172B]">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2"
          >
            <img className="w-30" src="abitulogo.svg" alt="logo" />
          </button>

          <div className="flex items-center gap-3">
            <button className="hidden text-sm font-semibold text-[#0E172B] transition hover:text-[#00A97A] sm:inline-flex">
              შესვლა
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-11 items-center gap-2 rounded-lg bg-[#0E172B] pl-4 pr-3.5 text-sm font-bold text-white transition hover:bg-[#17233A]"
            >
              მენიუ
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <FullMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollTo}
      />

      {/* =====================================================
          FULL WIDTH HERO
      ===================================================== */}

      <section
        id="home"
        className="relative w-full overflow-hidden"
        style={{
          backgroundColor: "#FCF4EE",
          backgroundImage: `
            repeating-linear-gradient(
              to bottom,
              rgba(104, 78, 60, 0.075) 0px,
              rgba(104, 78, 60, 0.075) 1px,
              transparent 1px,
              transparent 32px
            )
          `,
        }}
      >
        <div className="relative w-full min-h-195 sm:min-h-185 md:min-h-180 lg:min-h-160">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full transition-opacity duration-700 ${
                heroSlide === index
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <div
                className="
                  flex min-h-195 w-full flex-col
                  sm:min-h-185
                  md:min-h-180
                  lg:grid lg:min-h-160 lg:grid-cols-[48%_52%]
                "
              >
                <div
                  className="
                    flex flex-1 flex-col justify-center
                    px-5
                    py-16
                    sm:px-8
                    sm:py-20
                    md:px-12
                    lg:px-16
                    lg:py-16
                    xl:px-[8vw]
                  "
                >
                  <div
                    className="
                      mb-5
                      flex items-center gap-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#00A97A]
                      sm:mb-6
                      sm:text-xs
                      md:mb-7
                    "
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#00C58B]" />
                    {slide.eyebrow}
                  </div>

                  <h1
                    className="
                      max-w-155
                      text-[32px]
                      font-extrabold
                      leading-[1.08]
                      tracking-[-0.035em]
                      text-[#0E172B]
                      sm:text-[38px]
                      md:text-[44px]
                      lg:text-[50px]
                      xl:text-[56px]
                    "
                  >
                    {slide.title}
                  </h1>

                  <p
                    className="
                      mt-5
                      max-w-145
                      text-[14px]
                      leading-6
                      text-slate-500
                      sm:mt-6
                      sm:text-base
                      sm:leading-7
                      md:mt-7
                      md:text-lg
                    "
                  >
                    {slide.description}
                  </p>

                  <div
                    className="
                      mt-7
                      flex
                      flex-col
                      gap-3
                      sm:mt-8
                      sm:flex-row
                      md:mt-9
                    "
                  >
                    <button
                      onClick={() =>
                        scrollTo(
                          slide.type === "calculator"
                            ? "university"
                            : "pricing",
                        )
                      }
                      className="
                        group
                        inline-flex
                        h-12
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        bg-[#00C58B]
                        px-6
                        text-sm
                        font-bold
                        text-white
                        transition
                        hover:bg-[#00B17D]
                        sm:w-auto
                      "
                    >
                      {slide.button}

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      onClick={() =>
                        scrollTo(
                          slide.type === "calculator"
                            ? "university"
                            : "features",
                        )
                      }
                      className="
                        inline-flex
                        h-12
                        w-full
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#E5DCD5]
                        bg-[#FFF9F5]
                        px-6
                        text-sm
                        font-bold
                        text-[#0E172B]
                        transition
                        hover:border-[#D8CCC3]
                        hover:bg-white
                        sm:w-auto
                      "
                    >
                      {slide.secondary}
                    </button>
                  </div>

                  <div
                    className="
                      mt-7
                      flex
                      flex-wrap
                      gap-x-5
                      gap-y-3
                      sm:mt-8
                      sm:gap-x-6
                      md:mt-9
                    "
                  >
                    {[
                      "მარტივი გამოყენება",
                      "დეტალური ანალიზი",
                      "ერთი სივრცე",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-2
                          text-[11px]
                          font-medium
                          text-slate-500
                          sm:text-xs
                        "
                      >
                        <span
                          className="
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#E8FBF5]
                            text-[#00A97A]
                          "
                        >
                          <Check className="h-3 w-3" />
                        </span>

                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative hidden min-h-160 overflow-hidden lg:block select-none">
                  <div
                    className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                      className="relative z-10 w-auto object-cover pointer-events-none select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="
              absolute
              bottom-8
              right-8
              z-30
              hidden
              items-center
              gap-5
              lg:flex
              xl:right-12
            "
          >
            <button
              onClick={previousSlide}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#E2D8D0]
                bg-[#FFF9F5]
                text-[#0E172B]
                transition
                hover:border-[#00C58B]
                hover:text-[#00A97A]
              "
              aria-label="წინა სლაიდი"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="text-sm font-semibold text-slate-500">
              <span className="text-[#0E172B]">{heroSlide + 1}</span>
              <span className="mx-2 text-slate-300">/</span>
              {heroSlides.length}
            </div>

            <button
              onClick={nextSlide}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#E2D8D0]
                bg-[#FFF9F5]
                text-[#0E172B]
                transition
                hover:border-[#00C58B]
                hover:text-[#00A97A]
              "
              aria-label="შემდეგი სლაიდი"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div
            className="
              absolute
              right-4
              top-4
              z-30
              flex
              items-center
              gap-2
              sm:right-6
              sm:top-5
              sm:gap-3
              lg:hidden
            "
          >
            <button
              onClick={previousSlide}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#E2D8D0]
                bg-[#FFF9F5]
                text-[#0E172B]
                shadow-sm
                transition
                hover:bg-white
              "
              aria-label="წინა სლაიდი"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <span
              className="
                rounded-full
                bg-[#FFF9F5]
                px-2.5
                py-1.5
                text-[11px]
                font-bold
                text-slate-500
                shadow-sm
                sm:text-xs
              "
            >
              {heroSlide + 1} / {heroSlides.length}
            </span>

            <button
              onClick={nextSlide}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#E2D8D0]
                bg-[#FFF9F5]
                text-[#0E172B]
                shadow-sm
                transition
                hover:bg-white
              "
              aria-label="შემდეგი სლაიდი"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

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

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-bold text-[#00A97A]">
              შესაძლებლობები
            </div>

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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SUBJECTS
      ===================================================== */}

      <section id="subjects" className="bg-[#F6F8F7] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="text-sm font-bold text-[#00A97A]">საგნები</div>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
                მოემზადე შენთვის საჭირო საგნებში
              </h2>
            </div>

            <button
              onClick={() => scrollTo("pricing")}
              className="flex items-center gap-2 text-sm font-bold text-[#00A97A]"
            >
              ყველა შესაძლებლობა
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between p-5">
                  <h3 className="text-sm font-bold text-[#0E172B]">
                    {course.title}
                  </h3>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-500">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section id="how-it-works" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-bold text-[#00A97A]">
              როგორ მუშაობს
            </div>

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

      {/* =====================================================
          ANALYTICS
      ===================================================== */}

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
                  "პროგრესის კონტროლი",
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
              <div className="flex items-center justify-between" />

              <img src="completed-tests.png" alt="completed tests" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORM
      ===================================================== */}

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
                პროცესი გაუმარტივოს და მისცეს მკაფიო წარმოდგენა საკუთარ
                პროგრესზე.
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

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="bg-[#F6F8F7] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-bold text-[#00A97A]">
              აბიტურიენტები
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
              მომზადება უფრო მარტივი ხდება
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                text: "ძალიან მოსახერხებელია, როცა ტესტებიც და შედეგების ანალიზიც ერთ ადგილას მაქვს.",
                name: "ანა",
                role: "აბიტურიენტი",
              },
              {
                text: "ჩარიცხვის სიმულატორი განსაკუთრებით დამეხმარა უნივერსიტეტების შედარებაში.",
                name: "ნიკა",
                role: "აბიტურიენტი",
              },
              {
                text: "შედეგების ნახვის შემდეგ უფრო მარტივად ვხვდები, რომელ თემებზე უნდა ვიმუშაო.",
                name: "მარიამი",
                role: "აბიტურიენტი",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="flex gap-1 text-[#00C58B]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  “{item.text}”
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="text-sm font-bold text-[#0E172B]">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          UNIVERSITY
      ===================================================== */}

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
                  შეიყვანე შენი შედეგები, შეარჩიე სასურველი პროგრამა და
                  გამოიყენე სიმულატორი იმისთვის, რომ უკეთ დაინახო შენი
                  საკონკურსო შედეგი.
                </p>

                <button
                  onClick={() => scrollTo("pricing")}
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

      {/* =====================================================
          PRICING
      ===================================================== */}

      <section id="pricing" className="bg-[#F6F8F7] py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-bold text-[#00A97A]">ფასი</div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
              ყველაფერი ერთ მარტივ გამოწერაში
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500">
              მიიღე წვდომა Abitu-ს ყველა ძირითად შესაძლებლობაზე შენთვის
              ხელსაყრელი გეგმით.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-500">თვიური</p>

                  <div className="mt-5">
                    <span className="text-5xl font-extrabold text-[#0E172B]">
                      7.99
                    </span>

                    <span className="ml-2 text-sm text-slate-400">₾ / თვე</span>
                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    გადახდა ხდება ყოველთვიურად
                  </p>
                </div>

                <div className="my-8 border-t border-slate-100" />

                <div className="space-y-4">
                  {[
                    "ჩარიცხვის სიმულატორი",
                    "შედეგების დეტალური ანალიზი",
                    "წინა წლების ტესტების არქივი",
                    "პროგრესის კონტროლი",
                    "ყველა ძირითადი ფუნქცია ერთ სივრცეში",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8FBF5] text-[#00A97A]">
                        <Check className="h-3.5 w-3.5" />
                      </div>

                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-bold text-[#0E172B] transition hover:bg-slate-50">
                  დაიწყე Abitu-ს გამოყენება
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  გაუქმება შეგიძლიათ ნებისმიერ დროს
                </p>
              </div>
            </div>

            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-[#00C58B] bg-white p-8 shadow-md">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#00C58B] px-3 py-1 text-xs font-bold text-white">
                დაზოგე 30%
              </div>

              <div>
                <div className="text-center">
                  <p className="text-sm font-bold text-[#00A97A]">წლიური</p>

                  <div className="mt-5">
                    <span className="text-5xl font-extrabold text-[#0E172B]">
                      5.59
                    </span>

                    <span className="ml-2 text-sm text-slate-400">₾ / თვე</span>
                  </div>

                  <p className="mt-2 text-xs font-semibold text-[#00A97A]">
                    67.12 ₾ იხდით წელიწადში ერთხელ
                  </p>
                </div>

                <div className="my-8 border-t border-slate-100" />

                <div className="space-y-4">
                  {[
                    "ჩარიცხვის სიმულატორი",
                    "შედეგების დეტალური ანალიზი",
                    "წინა წლების ტესტების არქივი",
                    "პროგრესის კონტროლი",
                    "ყველა ძირითადი ფუნქცია ერთ სივრცეში",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8FBF5] text-[#00A97A]">
                        <Check className="h-3.5 w-3.5" />
                      </div>

                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#00C58B] text-sm font-bold text-white transition hover:bg-[#00B17D]">
                  დაიწყე Abitu-ს გამოყენება
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  წლიური ანგარიშსწორება
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section id="faq" className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-bold text-[#00A97A]">კითხვები</div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
              ხშირად დასმული კითხვები
            </h2>
          </div>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="text-sm font-bold text-[#0E172B] sm:text-base">
                      {item.q}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <span className="text-xl font-light leading-none">+</span>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pr-12 text-sm leading-7 text-slate-500">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT — EMAILJS
      ===================================================== */}

      <section id="contact" className="bg-[#F6F8F7] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-sm font-bold text-[#00A97A]">
                დაგვიკავშირდი
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl">
                გაქვს შეკითხვა?
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
                მოგვწერე და ჩვენი გუნდი დაგეხმარება Abitu-ს გამოყენებასთან
                დაკავშირებულ ნებისმიერ საკითხში.
              </p>
            </div>

            <form
              onSubmit={sendContactEmail}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-600">
                    სახელი
                  </label>

                  <input
                    name="name"
                    type="text"
                    placeholder="შენი სახელი"
                    required
                    className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#00C58B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-600">
                    ელ. ფოსტა
                  </label>

                  <input
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                    className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#00C58B]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs font-bold text-slate-600">
                  შეტყობინება
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="მოგვწერე შენი შეკითხვა..."
                  required
                  className="w-full resize-none rounded-lg border border-slate-200 p-4 text-sm outline-none transition focus:border-[#00C58B]"
                />
              </div>

              <button
                type="submit"
                className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#0E172B] text-sm font-bold text-white transition hover:bg-[#17233A] disabled:cursor-not-allowed disabled:opacity-60"
              >
                შეტყობინების გაგზავნა
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="bg-white py-24 select-none"
        onContextMenu={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
        onCut={(e) => e.preventDefault()}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#F5F8F7]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="px-7 py-14 sm:px-12 lg:px-16 lg:py-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D7EDE7] bg-white px-3 py-1.5 text-xs font-bold text-[#00A97A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00A97A]" />
                  ყველაფერი ერთ სივრცეში
                </div>

                <h2 className="mt-6 max-w-xl text-3xl font-extrabold tracking-tight text-[#0E172B] sm:text-4xl lg:text-5xl">
                  ნაკლები ძებნა.
                  <br />
                  მეტი მომზადება.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
                  Abitu გაძლევს ყველა იმ ინსტრუმენტს, რომელიც ეროვნული
                  გამოცდებისთვის მომზადებისა და სწორი უნივერსიტეტის არჩევისთვის
                  გჭირდება.
                </p>

                <button
                  onClick={() => scrollTo("pricing")}
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-[#00A97A] px-7 text-sm font-bold text-white transition hover:bg-[#008F68]"
                >
                  დაიწყე Abitu-ს გამოყენება
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>
              </div>

              <div className="relative min-h-[360px] overflow-hidden bg-[#0E172B] p-7 sm:p-10">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
                <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-white/10" />

                <div className="relative flex h-full flex-col justify-center gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium text-slate-400">
                          მომზადება
                        </div>

                        <div className="mt-1 text-lg font-bold text-white">
                          ტესტები და ანალიზი
                        </div>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16382F] text-[#00C58B]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <path d="M4 4h16v16H4z" />
                          <path d="M8 8h8" />
                          <path d="M8 12h5" />
                          <path d="M8 16h8" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="ml-6 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm sm:ml-12">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium text-slate-400">
                          უნივერსიტეტი
                        </div>

                        <div className="mt-1 text-lg font-bold text-white">
                          არჩევანი და შედარება
                        </div>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16382F] text-[#00C58B]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <path d="m3 10 9-5 9 5-9 5-9-5Z" />
                          <path d="M5 12v5c0 1.5 3.13 3 7 3s7-1.5 7-3v-5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium text-slate-400">
                          შესაძლებლობები
                        </div>

                        <div className="mt-1 text-lg font-bold text-white">
                          ყველაფერი ერთ ანგარიშში
                        </div>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16382F] text-[#00C58B]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M8 12h8" />
                          <path d="M12 8v8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr] md:items-start">
            <div>
              <button
                onClick={() => scrollTo("home")}
                className="group flex items-center"
              >
                <img
                  className="w-[105px] transition-opacity group-hover:opacity-80"
                  src="abitulogo.svg"
                  alt="Abitu"
                />
              </button>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
                ციფრული საგანმანათლებლო პლატფორმა აბიტურიენტებისთვის —
                მომზადება, ინფორმაცია და უნივერსიტეტის არჩევა ერთ სივრცეში.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                <span className="h-2 w-2 rounded-full bg-[#00A97A]" />
                შენი გზა უნივერსიტეტამდე იწყება აქ
              </div>
            </div>

            <div className="md:justify-self-end">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0E172B]">
                ნავიგაცია
              </p>

              <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                <button
                  onClick={() => scrollTo("home")}
                  className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
                >
                  მთავარი
                </button>

                <button
                  onClick={() => scrollTo("features")}
                  className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
                >
                  შესაძლებლობები
                </button>

                <button
                  onClick={() => scrollTo("pricing")}
                  className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
                >
                  ფასი
                </button>

                <button
                  onClick={() => scrollTo("faq")}
                  className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
                >
                  ხშირად დასმული კითხვები
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className="text-left text-sm text-slate-500 transition hover:text-[#00A97A]"
                >
                  კონტაქტი
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-100 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Abitu.ge. ყველა უფლება დაცულია.
            </p>

            <div className="flex items-center gap-5">
              <span className="text-xs text-slate-400">
                შექმნილია აბიტურიენტებისთვის
              </span>

              <button
                onClick={() => scrollTo("home")}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-[#BDEFE2] hover:text-[#00A97A]"
                aria-label="ზემოთ დაბრუნება"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
