import { ArrowLeft, ArrowRight, Check } from "./ui";
import { heroSlides } from "../data";

export function HeroSection({ heroSlide, setHeroSlide, scrollTo, goToApp }) {
  const nextSlide = () =>
    setHeroSlide((current) => (current + 1) % heroSlides.length);
  const previousSlide = () =>
    setHeroSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );

  return (
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
            <div className="flex min-h-195 w-full flex-col sm:min-h-185 md:min-h-180 lg:grid lg:min-h-160 lg:grid-cols-[48%_52%]">
              <div className="flex flex-1 flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-16 xl:px-[8vw]">
                <div className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#00A97A] sm:mb-6 sm:text-xs md:mb-7">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#00C58B]" />
                  {slide.eyebrow}
                </div>

                <h1 className="max-w-155 text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0E172B] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[56px]">
                  {slide.title}
                </h1>

                <p className="mt-5 max-w-145 text-[14px] leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-7 md:mt-7 md:text-lg">
                  {slide.description}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row md:mt-9">
                  <button
                    onClick={goToApp}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#00C58B] px-6 text-sm font-bold text-white transition hover:bg-[#00B17D] sm:w-auto"
                  >
                    {slide.button}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => {
                      if (slide.type === "guide") {
                        window.location.hash = "#guides";
                        return;
                      }

                      scrollTo("features");
                    }}
                    className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-[#E5DCD5] bg-[#FFF9F5] px-6 text-sm font-bold text-[#0E172B] transition hover:border-[#D8CCC3] hover:bg-white sm:w-auto"
                  >
                    {slide.secondary}
                  </button>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 sm:mt-8 sm:gap-x-6 md:mt-9">
                  {[
                    "მარტივი გამოყენება",
                    "დეტალური ანალიზი",
                    "ერთი სივრცე",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[11px] font-medium text-slate-500 sm:text-xs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8FBF5] text-[#00A97A]">
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
                    clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
                  }}
                >
                  <img
                    src={slide.image}
                    alt="Abitu"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    className="relative z-10 w-auto object-cover pointer-events-none select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 right-8 z-30 hidden items-center gap-5 lg:flex xl:right-12">
          <button
            onClick={previousSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2D8D0] bg-[#FFF9F5] text-[#0E172B] transition hover:border-[#00C58B] hover:text-[#00A97A]"
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2D8D0] bg-[#FFF9F5] text-[#0E172B] transition hover:border-[#00C58B] hover:text-[#00A97A]"
            aria-label="შემდეგი სლაიდი"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="absolute right-4 top-4 z-30 flex items-center gap-2 sm:right-6 sm:top-5 sm:gap-3 lg:hidden">
          <button
            onClick={previousSlide}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2D8D0] bg-[#FFF9F5] text-[#0E172B] shadow-sm transition hover:bg-white"
            aria-label="წინა სლაიდი"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <span className="rounded-full bg-[#FFF9F5] px-2.5 py-1.5 text-[11px] font-bold text-slate-500 shadow-sm sm:text-xs">
            {heroSlide + 1} / {heroSlides.length}
          </span>

          <button
            onClick={nextSlide}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2D8D0] bg-[#FFF9F5] text-[#0E172B] shadow-sm transition hover:bg-white"
            aria-label="შემდეგი სლაიდი"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
