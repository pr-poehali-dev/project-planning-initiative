export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Slide 5</h3>
                <p className="text-white text-sm sm:text-base">English, 8G</p>
                <p className="text-white text-sm sm:text-base">School Project</p>
                <p className="text-white text-sm sm:text-base">2026</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Topic</h3>
                <p className="text-white text-sm sm:text-base">Where I'd like to go</p>
                <p className="text-neutral-400 text-sm sm:text-base">Japan 🇯🇵</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Работа выполнена</p>
                <h1 className="text-[8vw] sm:text-[7vw] lg:text-[6vw] leading-[0.9] mt-2 text-white font-bold tracking-tight">
                  ANDREEV
                  <br />
                  <span className="text-neutral-400">MATVEY</span>
                </h1>
                <p className="text-neutral-400 text-lg mt-3 uppercase tracking-widest">8Г класс</p>
              </div>
              <p className="text-white text-sm sm:text-base opacity-40">Thank you for watching 🙏</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}