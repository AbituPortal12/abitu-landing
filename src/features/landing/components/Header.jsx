import { ArrowRight, Mail, Menu, Phone, X } from "./ui";
import { menuLinks } from "../data";

export function FullMenu({ open, onClose, onNavigate, goToApp }) {
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
              onClick={goToApp}
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

export function Header({ goToApp, menuOpen, setMenuOpen, scrollTo }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2"
          >
            <img className="w-30" src="abitulogo.svg" alt="logo" />
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={goToApp}
              className="hidden text-sm font-semibold text-[#0E172B] transition hover:text-[#00A97A] sm:inline-flex"
            >
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
        goToApp={goToApp}
      />
    </>
  );
}
