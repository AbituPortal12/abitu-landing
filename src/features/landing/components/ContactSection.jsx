import { ArrowRight } from "./ui";

export function ContactSection({ sendContactEmail }) {
  return (
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
  );
}
