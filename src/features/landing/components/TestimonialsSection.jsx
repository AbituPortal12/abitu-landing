export function TestimonialsSection() {
  return (
    <section className="bg-[#F6F8F7] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-bold text-[#00A97A]">აბიტურიენტები</div>
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
                <p className="text-sm font-bold text-[#0E172B]">{item.name}</p>
                <p className="mt-1 text-xs text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
