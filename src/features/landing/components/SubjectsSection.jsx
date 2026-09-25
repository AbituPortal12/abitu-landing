import { ArrowRight } from "./ui";

export function SubjectsSection({ courses, scrollTo }) {
  return (
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
  );
}
